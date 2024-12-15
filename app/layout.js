'use client';
import Logotype from "@/components/Logotype.js";
import "./globals.css";;
import ReduxProvider from "./reduxProvider";
import HeaderLi from "@/components/headerLi";
import ButtonChange from "@/components/buttonChange.js";
import { useState } from "react";
import { usePathname } from "next/navigation";
export default function RootLayout({ children }) {
  const [isActiveLink,setIsActiveLink]=useState(false);
  const handleClickUp = (name) =>{
    setIsActiveLink(name);
  }
  const pathname = usePathname();
  if(pathname === "/authorization/signUp" || pathname === "/authorization/signIn"){
    return(
      <html lang="en">
            <body>
              <ReduxProvider>
      {children}
      </ReduxProvider>
      </body>
      </html>
    )
  }
  console.log(pathname);
    return (
        <html lang="en">
            <body>
                <ReduxProvider>
                    <header className="flex justify-between items-center px-10 py-6 border-b-2 border-gray-300">
                        <nav>
                            <ul className="flex gap-4 text-gray-700">
                                <HeaderLi name="home" state={isActiveLink} handleClick={handleClickUp} href="#">Home</HeaderLi>
                                <HeaderLi name="feature" state={isActiveLink} handleClick={handleClickUp} href="#">Feature</HeaderLi>
                                <HeaderLi name="blog" state={isActiveLink} handleClick={handleClickUp}  href="/">Blog</HeaderLi>
                                <HeaderLi name="testimonials" state={isActiveLink} handleClick={handleClickUp} href="#">Testimonials</HeaderLi>
                            </ul>
                        </nav>
                        <Logotype />
                        <ButtonChange/>
                    </header>
                    {children}
                </ReduxProvider>
            </body>
        </html>
    );
}
