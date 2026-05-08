'use client'
import { signOut, useSession } from "@/lib/auth-client"
import Link from "next/link"

const NavUser = () => {
  const {data, isPending} = useSession()
  const user = data?.user;

  return (
    <div>
      {user ? 
        <>
          <div className="flex gap-4 items-center font-medium text-[#0F172A]">
            <h2>Welcome, {user.name} </h2>
            <button className="btn cursor-pointer btn-soft btn-error" onClick={() => signOut()}>Sign Out</button>
          </div>
        </> :
        <>
          <div className="space-x-3">
            <Link href='/signin'>
              <button className="btn cursor-pointer btn-soft btn-primary">Sign In</button>
            </Link>
            <Link href='/signup'>
              <button className="btn cursor-pointer btn-primary">Sign Up</button>
            </Link>
          </div>
        </>
      }
    </div>
  )
}

export default NavUser