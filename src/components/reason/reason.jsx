import React from 'react'
import { AiOutlineSafety } from 'react-icons/ai'
import { LuLibrary } from 'react-icons/lu'
import { RiFlashlightLine } from 'react-icons/ri'

const Reason = () => {
  return (
    <div className='bg-[#F8FAFC]'>
      <div className='container mx-auto  px-5 md:px-0 flex flex-col md:flex-row justify-between gap-6 py-40'>
        <div className='space-y-6 md:w-1/2'>
          <div className='badge badge-primary badge-soft rounded-2xl px-5'>
            <p className='text-[#0284C7] font-bold'>Our Promise</p>
          </div>
          <h1 className='text-[36px] text-[#0F172A] font-bold'>More than just a library. <br></br>
            A better way to read.</h1>
          <p className='text-[18px] text-[#64748B] md:w-1/2'>We built Readify to make reading accessible, 
          secure, and lightning-fast. Join thousands of 
          readers who have already made the switch.</p>
        </div>
        <div className='flex flex-col gap-4'>
          <div className="p-6 border-2 border-[#bfbfbf53] rounded-2xl bg-[#ffffff] flex items-center gap-4">
            <div className="p-3 bg-[#E0F2FE] text-[#0284C7] text-2xl rounded-full w-fit">
              <RiFlashlightLine />
            </div>
            <div>
              <h2 className='text-[18px] text-[#0F172A] font-bold mb-1'>Lightning Fast Borrowing</h2>
              <p className='text-[14px] text-[#64748B]'>Skip the waitlist. Get instant access to digital copies or reserve
              physical books with a single click.</p>
            </div>
          </div>
          <div className="p-6 border-2 border-[#bfbfbf53] rounded-2xl bg-[#ffffff] flex items-center gap-4">
            <div className="p-3 bg-[#E0F2FE] text-[#0284C7] text-2xl rounded-full w-fit">
              <AiOutlineSafety />
            </div>
            <div>
              <h2 className='text-[18px] text-[#0F172A] font-bold mb-1'>Enterprise-Grade Security</h2>
              <p className='text-[14px] text-[#64748B]'>Your reading habits and personal data are encrypted and
              protected with industry-leading security protocols.</p>
            </div>
          </div>
          <div className="p-6 border-2 border-[#bfbfbf53] rounded-2xl bg-[#ffffff] flex items-center gap-4">
            <div className="p-3 bg-[#E0F2FE] text-[#0284C7] text-2xl rounded-full w-fit">
              <LuLibrary/>
            </div>
            <div>
              <h2 className='text-[18px] text-[#0F172A] font-bold mb-1'>Massive Curated Collection</h2>
              <p className='text-[14px] text-[#64748B]'>Explore over 100,000 titles across multiple languages, from
              indie authors to New York Times bestsellers.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reason