import Image from 'next/image'
import { FaRegStar } from 'react-icons/fa6'
import { PiBookOpenUserBold } from 'react-icons/pi'
import FeaturedModal from './featuredModal'

const FeaturedCard = ({book}) => {
  return (
    <div>
      <div className='bg-[#dcdcdc7c] p-4 rounded-lg w-fit mb-4'>
        <div className='relative w-50 h-70'>
          <Image src={book.image} alt='book' fill className='rounded-lg object-cover' loading='lazy'></Image>
        </div>
      </div>
      <div className='flex justify-between mb-4 items-start'>
        <div>
          <h1 className='text-[18px] text-[#0F172A] font-bold pb-2' title={book.bookName}>{book.bookName}</h1>
          <p className='text-[14px] text-[#64748B]'>{book.author}</p>
        </div>
        <div className='text-[14px] text-[#0F172A] font-bold flex gap-1 items-center'>
          <FaRegStar className='text-[#FD9A00]' />
          <p>{book.rating}</p>
        </div>
      </div>
      <FeaturedModal book={book}></FeaturedModal>
    </div>
  )
}

export default FeaturedCard