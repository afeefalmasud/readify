"use client"

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const scrollToTop = () => {
  const pathname = usePathname();
  return(
    useEffect(()=>{
      window.scrollTo(0,0)
    },[pathname])
  )
}
export default scrollToTop;
