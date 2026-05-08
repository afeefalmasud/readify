'use client'
import { useEffect, useState } from "react";
import { Navigation } from "../shared/drawer/drawer";
import { Basic } from "../shared/search/search";
import Card from "../card/card";
import { useSearchParams } from "next/navigation";

const FilteredBooks = ({books}) => {
    const searchParams = useSearchParams();

    const initialCategory = searchParams.get("category") || "all";

    const [category, setCategory] = useState(initialCategory);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const urlCategory = searchParams.get("category") || "all";
        setCategory(urlCategory);
    }, [searchParams]);

    const filteredBooks = books.filter(book => {
      const categoryBooks = category === 'all' || book.category.toLowerCase() === category.toLowerCase();
      const searchBooks = search === '' || book.bookName.toLowerCase().includes(search.toLowerCase());
      return categoryBooks && searchBooks;
    })    
  return (
    <div>
        <div className="flex justify-between flex-col md:flex-row gap-4 pb-10">
            <div>
              <Navigation setCategory={setCategory}></Navigation>
            </div>
            <div>
              <Basic search={search} setSearch={setSearch}></Basic>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center space-y-6">
          {
            filteredBooks.map(book => (
              <Card key={book.id} book={book}></Card>
            ))
          }
        </div>
    </div>
  )
}

export default FilteredBooks