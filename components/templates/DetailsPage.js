import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { MdAttachMoney } from 'react-icons/md'
import { RiDiscountPercentLine } from 'react-icons/ri'
import { IoFastFoodOutline } from "react-icons/io5";

function DetailsPage(data) {
    const { id,
        name,
        price,
        discount,
        introduction,
        details,
        ingredients,
        recipe
    } = data

    return (
        <div className=' m-auto mt-50 w-full h-full p-2'>
            <h2 className='font-semibold text-xl border-b-2 mb-10 w-fit border-b-green-700'>Details</h2>
           
            <div className='flex flex-row'>
                <div className='flex my-5 p-3'>
                    <img src={`/images/${id}.jpeg`} alt={name} className='w-96 rounded ' />

                    <div className='w-full p-1 items-start ml-7 place-items-center '>
                        <h3 className='flex  font-semibold text-[#53c60b]'>
                            {name}
                        </h3>
                        <span className='flex  items-center my-2 '>
                            <FaLocationDot className='text-md mr-1 text-black' />
                            {details[0].Cuisine}
                        </span>

                        <span className='flex place-items-center my-2'>
                            <MdAttachMoney className='text-lg text-black mr-0.5' />

                            {
                                discount ?
                                    (price * (100 - discount) / 100)
                                    : price
                            }
                        </span>
                        {
                            discount ?
                                (
                                    <span className='flex w-fit place-items-center  my-2 bg-[#ed4133]  text-white px-1 rounded-md border'>
                                        <RiDiscountPercentLine className='text-xl mr-0.5' />
                                        {discount}
                                    </span>
                                )
                                : null
                        }
                    </div>
                </div>
            </div>
            <div>
                <div className=' my-16 leading-6 text-justify'>
                    <p>{introduction}</p>
                </div>
                <div className='mb-14'>
                    <h4 className='font-bold text-xl my-5 text-[#53c60b]'>Details</h4>
                    <ul className=''>
                        {details.map((detail, index) =>
                            <li key={index} className='flex items-center my-2 '>
                                <p className='text-lg mx-1'>{Object.keys(detail)[0]}: </p>
                                <span className='text-gray-600'> {Object.values(detail)[0]}</span>
                            </li>
                        )}
                    </ul>
                </div>
                <div className='p-4'>
                    <h4>Ingredients</h4>
                    <ul className='list-disc  list-inside bg-red-200 '>
                        {ingredients.map((ingredient, index) =>
                            <li key={index} className='flex'>
                                <p >{ingredient}</p>
                            </li>
                        )}
                    </ul>
                </div>
                <div className=''>
                    <h4>Recipe:</h4>
                    {recipe.map((item, index) =>
                        <div key={index} className={`w-full place-items-center p-2 ${index % 2 ? "bg-[#53c60b]" : "bg-[#87f343]"} flex text-lg `}>
                            <span className='text-2xl mr-5 font-bold  p-2 '>
                                {index + 1}
                            </span>
                            <p>{item}</p>
                        </div>
                    )}
                </div>
                <button className='p-3 bg-blue-600 rounded my-4 text-white'>Add To Cart</button>
            </div>

        </div>
    )
}

export default DetailsPage