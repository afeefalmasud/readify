
import Image from 'next/image'
import React from 'react'


const Hero = () => {
  return (
    <div className='bg-[#F8FAFC]'>
      <div className='container mx-auto flex flex-col-reverse md:flex-row px-5 md:px-0 gap-5 md:gap-0 justify-between items-center min-h-screen py-30'>
        <div className='mb-6'>
          <div className='badge badge-primary badge-soft rounded-2xl px-5'>
            <div className='p-1 rounded-full bg-[#0284C7]'></div>
            <p className='text-[#0284C7]'>New Books Every Week</p>
          </div>
          <h1 className='text-[40px] md:text-[60px] font-bold text-[#0F172A] mb-6'>Find Your Next <br /> Great Read Today</h1>
          <p className='text-[18px] text-[#64748B] mb-8'>Explore thousands of books, from timeless classics to <br></br>
          modern masterpieces. Borrow easily and read anywhere.</p>
          <button className='btn bg-[#0284C7] text-[#ffffff] rounded-md'>Borrow Now</button>
        </div>
        <div>
          <Image src='/assets/hero.png' alt='hero' width={600} height={600}/>
        </div>
      </div>
    </div>
  )
}

export default Hero