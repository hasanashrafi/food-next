import React from 'react'
import Card from '../modules/Card'

function MenuPage({ data }) {

    return (
        <div className='max-w-4xl p-5   sm:max-w-6xl m-auto mt-24 h-full '>
            <h2 className='border-b-2 w-fit border-b-[#53c60b] mb-12 text-lg'>Menu</h2>
            <div className='flex flex-wrap justify-between  '>
                {
                    data.map((food) =><Card key={food.id} {...food}/> )
                }
            </div>
        </div>
    )
}

export default MenuPage

