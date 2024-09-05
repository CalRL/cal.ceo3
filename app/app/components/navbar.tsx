import * as React from 'react';
import Link from 'next/link';
export default function Navbar() {
    return(
        <div className="flex items-center mt-10">
            <ul className='flex  space-x-8 text-[#bac2de] font-semibold text-xl '>
                <Link href="./" className='hover:text-[#FFFFFF] transition-colors duration-300'>Home</Link>
                <Link href="./projects" className='hover:text-[#FFFFFF] transition-colors duration-300'>Projects</Link>
                <Link href="./about" className='hover:text-[#FFFFFF] transition-colors duration-300'>About</Link>
            </ul>
        </div>
    )

}