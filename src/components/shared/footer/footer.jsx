import { FaFacebookF, FaXTwitter } from "react-icons/fa6"
import { FiInstagram } from "react-icons/fi"
import { HiOutlineLocationMarker } from "react-icons/hi"
import { IoCallOutline } from "react-icons/io5"
import { MdOutlineEmail } from "react-icons/md"
import { PiBookOpenUserBold } from "react-icons/pi"


const Footer = () => {
  return (
    <div className="bg-[#0F172A] py-20">
      <div className="container mx-auto text-[#e4e4e4d5]">
        <div className="flex justify-between items-center border-b-2 border-[#aeaeae57] pb-12">
          <div className="space-y-4">
            <div className="text-[#ffffff] font-bold text-[24px] flex items-center gap-2">
              <PiBookOpenUserBold/>
              <h2>Readify</h2>
            </div>
            <p>Your digital gateway to millions of stories, ideas, <br></br>
            and knowledge. Join our community of readers <br></br>
            today.</p>
            <div className="flex gap-2 cursor-pointer">
              <div className="bg-[#1E2939] px-2 py-2 rounded-full">
                <FaXTwitter className="text-[#ffffff]"/>
              </div>
              <div className="bg-[#1E2939] px-2 py-2 rounded-full">
                <FaFacebookF className="text-[#ffffff]" />
              </div>
              <div className="bg-[#1E2939] px-2 py-2 rounded-full">
                <FiInstagram className="text-[#ffffff]" />
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-[#ffffff] font-bold text-[20px]">Quick Links</h2>
            <ul className="space-y-3 cursor-pointer">
              <li>Home</li>
              <li>All Books</li>
              <li>New Arrivals</li>
              <li>My Profile</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-[#ffffff] font-bold text-[20px]">Contact Us</h2>
            <div className="space-y-3">
              <div className="flex gap-2 items-center">
                <HiOutlineLocationMarker />
                <p>123 Library Way, <br></br>
                Readington, CA 90210</p>
              </div>
              <div className="flex gap-2 items-center">
                <MdOutlineEmail />
                <p>hello@gmail.com</p>
              </div>
              <div className="flex gap-2 items-center">
                <IoCallOutline />
                <p>+01869540222</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between pt-8">
          <p>© 2024 Readify. All rights reserved.</p>
          <ul className="flex gap-2 cursor-pointer">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer