import getFeaturedBook from "@/lib/getFeaturedBook"
import Link from "next/link";
import FeaturedCard from "./card";


const Featured = async() => {
  const books = await getFeaturedBook();
  return (
    <div className="bg-[#F8FAFC]">
      <div className="container mx-auto py-30 px-5 md:px-0">
        <div className="flex pb-8 justify-between items-center">
          <h1 className="text-[30px] text-[#0F172A] font-bold">Featured Books</h1>
          <Link href={'/books'} className="text-[#155DFC]" scroll={true}>See All</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center space-y-6 lg:space-y-0">
          {books.map(book =>(
            <FeaturedCard key={book.id} book={book}></FeaturedCard>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Featured