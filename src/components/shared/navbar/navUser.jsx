'use client'
import { signOut, useSession } from "@/lib/auth-client"
import {Avatar} from "@heroui/react";
import Link from "next/link"

const NavUser = () => {
  const {data, isPending} = useSession()
  const user = data?.user;
  if(isPending){
    return <span className="loading loading-ring loading-lg"></span>
  }
  return (
    <div>
      {user ? 
        <>
          <div className="flex gap-4 items-center font-bold text-[#0F172A]">
            <h2>Welcome, {user?.name} </h2>
            <Avatar>
              <Avatar.Image alt="John Doe" src={user?.image}  referrerPolicy="no-referrer"/>
              <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
            </Avatar>
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