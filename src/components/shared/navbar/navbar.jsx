import Link from "next/link"
import { PiBookOpenUserBold } from "react-icons/pi"
import Navlink from "./navlink"

const Navbar = () => {
  return (
    <div className="shadow-md bg-base-100">
      <div className="navbar  container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li><Navlink href='/'>Home</Navlink></li>
              <li><Navlink href='/books'>All Books</Navlink></li>
              <li><Navlink href='/profile'>My Profile</Navlink></li>
            </ul>
          </div>
          <Link href='/'>
            <div className="text-[#0284C7] font-bold text-[24px] flex items-center gap-2">
              <PiBookOpenUserBold/>
              <h2>Readify</h2>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" menu-horizontal px-1 gap-4">
            <li><Navlink href='/'>Home</Navlink></li>
            <li><Navlink href='/books'>All Books</Navlink></li>
            <li><Navlink href='/profile'>My Profile</Navlink></li>
          </ul>
        </div>
        <div className="navbar-end gap-4">
          <button className="btn cursor-pointer btn-soft btn-primary">Log In</button>
          <button className="btn cursor-pointer btn-primary">Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar