import FilteredBooks from "@/components/filteredBooks/filteredBooks";
import getBooks from "@/lib/getBooks"

const booksPage = async() => {
  const books = await getBooks();
  return (
    <div className="min-h-screen py-20 px-5 md:px-0 bg-[#F8FAFC]">
      <div className="container mx-auto">
        <FilteredBooks books={books}></FilteredBooks>
      </div>
    </div>
  )
}

export default booksPage