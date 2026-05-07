import getBooks from "@/lib/getBooks";
import Image from "next/image";
import Link from "next/link";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaHandshake, FaRegHandshake, FaRegStar } from "react-icons/fa6";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const detailsPage = async({params}) => {
  const {id} = await params;
  const books = await getBooks();
  const book = books.find(b => b.id.toString() === id)
  return (
    <div className="container mx-auto py-20">
      <div className="pb-6">
        <Link href='/books' className="flex gap-2 items-center font-medium text-[#1E90FF]">
          <IoArrowBackCircleOutline className="text-xl"/>
          <p>Back To All Books</p>
        </Link>
      </div> 
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 lg:gap-30 px-5 lg:px-0">
        <div>
          <div className='relative w-80 h-120 mb-6'>
            <Image src={book.image} alt='book' fill className='rounded-lg object-cover' loading='lazy'></Image>
          </div>
          <button className='btn bg-[#0284C7] text-[#ffffff] w-full mt-auto active:scale-95 transition-transform duration-150 flex items-center gap-2 rounded-lg'>
            <FaHandshake />
            <p>Borrow Digital Copy</p>
          </button>
        </div>
        <div>
          <div className="border-b-2 border-[#bfbfbf53] pb-8">
            <div className="flex gap-4 mb-4">
              <div className='badge badge-primary badge-soft rounded-2xl px-5'>
                <p className='text-[#0284C7] font-bold'>{book.category}</p>
              </div>
              <div className='badge badge-primary badge-soft rounded-2xl px-5'>
                <p className='text-[#0284C7] font-bold'>{book.available_quantity} copies left</p>
              </div>
            </div>
            <h1 className="text-[48px] text-[#0F172A] font-bold pb-4">{book.bookName}</h1>
            <p className="text-[#64748B] text-[20px] pb-6">by <span className="font-medium text-[#0284C7]">{book.author}</span></p>
            <div className="flex gap-8 items-center">
              <div className='text-[18px] text-[#0F172A] font-bold flex gap-2 items-center'>
                <FaRegStar className='text-[#FD9A00]' />
                <p>{book.rating} <span className="text-[#64748B]">ratings</span></p>
              </div>
            </div>
          </div>
          <div className="py-8">
            <h2 className="text-[24px] text-[#0F172A] font-bold pb-4">Synopsis</h2>
            <p className="text-[#64748B]">{book.description}</p>
          </div>
          <div className="flex border-2 border-[#bfbfbf53] p-4 rounded-xl gap-10 md:gap-20 w-fit bg-[#ffffff]">
            <div>
              <h2 className="text-[#64748B] text-[12px] font-bold">Publisher</h2>
              <p className="text-[14px] text-[#0F172A] font-medium">{book.publisher}</p>
            </div>
            <div>
              <h2 className="text-[#64748B] text-[12px] font-bold">Publication Date</h2>
              <p className="text-[14px] text-[#0F172A] font-medium">{book.yearOfPublishing}</p>
            </div>
            <div>
              <h2 className="text-[#64748B] text-[12px] font-bold">Total Pages</h2>
              <p className="text-[14px] text-[#0F172A] font-medium">{book.totalPages}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default detailsPage