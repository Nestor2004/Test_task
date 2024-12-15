'use client'
import Link from "next/link"
export default function HeaderLi({handleClick,name,state,href,children}){
    return(
        <li
        className={`hover:text-black ${state === name ? 'text-black font-semibold' : ''}`}
        onClick={() => handleClick(name)}
      >
        <Link href={href}>{children}</Link>
      </li>
    )
}