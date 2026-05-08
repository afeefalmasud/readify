'use client'

import { useSession } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import { Modal, UpdateProfile } from "./modal";


const ProfileCard = () => {
    const {data, isPending} = useSession()
    const user = data?.user;
    if(isPending){
        return <span className="loading loading-ring loading-lg"></span>
    }
    return (
        <div className="space-y-6 bg-[#ffffff] py-8 px-10 rounded-2xl border-2 border-[#bfbfbf53] shadow-lg mx-5 md:mx-0 flex flex-col items-center justify-center">
            <div>
               <Avatar className="w-35 h-35">
                    <Avatar.Image alt="John Doe" src={user?.image}  referrerPolicy="no-referrer"/>
                    <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
                </Avatar>
            </div>
            <h1 className="text-[30px] text-[#0F172A] font-bold">{user.name}</h1>
            <p className="text-[18px] text-[#64748B]"> email: {user.email}</p>
            <UpdateProfile></UpdateProfile>
        </div>
    )
}

export default ProfileCard