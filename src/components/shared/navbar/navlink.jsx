'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

const Navlink = ({href, children}) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <div>
      <Link href={href} className={
        isActive ? 'font-bold text-[#0F172A]' : 'text-[#64748B] font-medium'
      }>
        {children}
      </Link>
    </div>
  )
}

export default Navlink