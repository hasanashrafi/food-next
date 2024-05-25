import React from 'react'

import { MdAttachMoney } from "react-icons/md"; import { RiDiscountPercentLine } from "react-icons/ri"; import Link from 'next/link';
import { FaLocationDot } from "react-icons/fa6";

function Card(props) {
    const { id, name, price, details, discount } = props
    return (
        <div className='flex flex-col w-64 shadow-lg mb-10 relative  h-fit bg-[#f9faf9] rounded-md p-2 m-2'>
            <img src={`/images/${id}.jpeg`} alt={name} className='rounded-sm min-w-full' />

            <div className='flex items-baseline justify-between mr-1 text-blue-800 text-sm my-5'>
                <h4 className='text-[#53c60b] font-semibold'>{name}</h4>
                <div className='flex place-items-center '>
                    <FaLocationDot className='text-md mr-1' />
                    {details[0].Cuisine}
                </div>
            </div>
            <div className='flex place-items-center justify-start items-center'>
                <MdAttachMoney className='text-lg text-gray-400' />
                {
                    discount ? (
                        <span className='text-red-700'>
                            {(price * (100 - discount) / 100)}
                        </span>
                    ) : (<span className='text-gray-400'>{price}</span>
                    )}
                {discount ?
                    <div className='flex place-items-center bg-[#ed4133]  text-white px-1 rounded-md border absolute top-4 left-4'>
                        <RiDiscountPercentLine className='text-xl mr-0.5' />{discount}
                    </div>
                    : null
                }
            </div>
            <Link href={`/menu/${id}`} className='bg-[#53c60b] text-white block w-full text-center mt-5  py-2 rounded-sm'>See Details</Link>
        </div>
    )
}

export default Card