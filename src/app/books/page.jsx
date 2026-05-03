import Card from "@/components/card/card";
import { Navigation } from "@/components/shared/drawer/drawer";
import { Basic } from "@/components/shared/search/search";
import getBooks from "@/lib/getBooks"


const booksPage = async() => {
  const books = await getBooks();
  return (
    <div className="min-h-screen py-20 px-5 md:px-0 bg-[#F8FAFC]">
      <div className="container mx-auto">
        <div className="flex justify-between flex-col md:flex-row gap-4 pb-10">
            <div>
              <Navigation></Navigation>
            </div>
            <div>
              <Basic></Basic>
            </div>
        </div>
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