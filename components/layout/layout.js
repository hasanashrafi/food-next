import Link from 'next/link'
import React from 'react'
import { GiFullPizza } from "react-icons/gi";
function Layout({ children }) {
    return (
        <>
            <header className='flex flex-wrap  w-full  h-fit place-items-center bg-[#004225] justify-between'>
                <div className='p-2 text-2xl  w-1/4 sm:w-fit font-semibold text-[#F5F5DC]  m-2'>
                    <Link href='/' className='hover:text-white'>YEMEK</Link>
                </div>
                <div className='flex flex-col  text-[#FFB000] py-2 text-center justify-center'>
                    <GiFullPizza className='text-5xl  self-center' />
                </div>
                <div className='flex flex-wrap justify-around p-2 text-[#F5F5DC]  w-1/10 sm:w-48 md:w-48 xl:w-48 text-sm  sm:font-semibold   m-2'>
                    <Link href='/menu' className='hover:text-white ' >Menu</Link>
                    <Link href='/categories' className='hover:text-white ml-2 '>Categories</Link>
                </div>
            </header>
            <div>
                {children}
            </div>

            <footer className=' p-1  min-w-full h-fit place-items-center text-center text-white bg-[#004225] justify-between'>
                <p>Developed By HsN &copy;</p>
            </footer>
        </>
    )
}

export default Layout