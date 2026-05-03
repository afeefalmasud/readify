import Card from "@/components/card/card";
import getBooks from "@/lib/getBooks"

const booksPage = async() => {
  const books = await getBooks();
  return (
    <div className="min-h-screen py-30 px-5 md:px-0 bg-[#F8FAFC]">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center space-y-6">
          {
            books.map(book => (
              <Card key={book.id} book={book}></Card>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default booksPage