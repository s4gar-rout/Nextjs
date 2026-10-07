"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const Navbar = () => {

  const pathname = usePathname()
  return (
     <nav className='w-full h-16 flex bg-zinc-950 text-white p-4 justify-between'>
            <Link href="/" className='text-xl font-bold cursor-pointer'>DevShow</Link>
            <div className='text-gray-400 space-x-8 mr-4'>
                <Link href="/" className={`${pathname=="/"?"border-b-2 border-pink-500": ""} hover:text-white`}>Home</Link>
                <Link href="/developers" className={`${pathname=="/developers"?"border-b-2 border-pink-500": ""} hover:text-white`}>Developers</Link>
                <Link href="/about" className={`${pathname=="/about"?"border-b-2 border-pink-500": ""} hover:text-white`}>About</Link>
                <Link href="/contact" className={`${pathname=="/contact"?"border-b-2 border-pink-500": ""} hover:text-white`}>Contact</Link>
            </div>
        </nav>
  )
}

export default Navbar