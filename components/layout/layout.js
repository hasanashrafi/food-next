import Link from 'next/link'
import React from 'react'
import { GiFullPizza } from "react-icons/gi";
function Layout({ children }) {
    return (
        <>
            <header className='flex flex-wrap p-1  min-w-full h-fit place-items-center bg-[#004225] justify-between'>
                <div className='p-2 text-2xl w-48 font-semibold text-[#F5F5DC]  m-2'>
                    <Link href='/' className='hover:text-white'>YEMEK</Link>
                </div>
                <div className='flex flex-col text-[#FFB000] text-center justify-center '>
                    <GiFullPizza className='text-5xl self-center' />
                    <p>Tatli Yemek!</p>
                </div>

                <div className='flex flex-wrap justify-around  text-[#F5F5DC]  w-1/3 xl:w-48 font-semibold  p-2 m-2'>
                    <Link href='/menu' className='hover:text-white ' >Menu</Link>
                    <Link href='/categories' className='hover:text-white '>Categories</Link>
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