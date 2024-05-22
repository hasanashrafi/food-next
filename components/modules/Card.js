import React from 'react'

function Card(props) {
    const { id, name, price, details, discount } = props
    return (
        <div className='w-60 h-fit bg-green-600 rounded-md p-2 m-2'>
            <img src={`/images/${id}.jpeg`} alt={name} className='rounded-sm min-w-full' />
            <p className='my-2 '>{name}</p>
        </div>
    )
}

export default Card