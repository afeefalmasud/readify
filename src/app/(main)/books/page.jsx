import FilteredBooks from "@/components/filteredBooks/filteredBooks";
import getBooks from "@/lib/getBooks"
import { Suspense } from "react";

export const metadata = {
  title: "Readify | Books",
  description: "all books page",
};

const booksPage = async() => {
  const books = await getBooks();
  return (
    <div className="min-h-screen py-20 px-5 md:px-0 bg-[#F8FAFC]">
      <div className="container mx-auto">
        <Suspense fallback={<div>Loading...</div>}>
          <FilteredBooks books={books}></FilteredBooks>
        </Suspense>
        
      </div>
    </div>
  )
}

export default booksPage