import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Card from '../modules/Card';


function CategoriesPage({ data }) {
    const router = useRouter()
    const [query, setQuery] = useState({ difficulty: "", time: "" });

    useEffect(() => {
        const { difficulty, time } = router.query
        if (query.difficulty !== difficulty || query.time !== time) {
            setQuery({ difficulty, time })
        }
    }, [])
    const changeHandler = (e) => {
        setQuery({ ...query, [e.target.name]: e.target.value });
    }

    const searchHandler = () => {
        router.push({ pathname: "/categories", query })
    }

    return (
        <div className='p-5 max-w-[900px] m-auto mt-[100px] min-h-screen'>
            <h2 className='border-b-4 border-b-[#53c60b] w-fit mb-[50px] text-lg'> Categories</h2>
            <div className=''>
                <div className='flex flex-row mx-auto  p-3 items-center place-content-center '>
                    <select
                        value={query.difficulty}
                        name="difficulty"
                        onChange={changeHandler}
                        className=' border-none w-[180px] h-[45px] rounded-md mr-[10px] p-[10px] text-[#48ac0a] shadow-lg outline-none'>
                        <option value="" > Difficulty </option>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                    <select
                        value={query.time}
                        name="time"
                        onChange={changeHandler}
                        className='border-none w-[180px] h-[45px] rounded-md mr-[10px] p-[15px] text-[#48ac0a] shadow-lg outline-none'>
                        <option value="" >Cooking Time</option>
                        <option value="more">More Than 30 min </option>
                        <option value="less">Less Than 30 min </option>
                    </select>
                    <button
                        onClick={searchHandler}
                        className='outline-none border-none bg-[#53c60b] text-white h-[43px] px-5 rounded-md cursor-pointer shadow-lg hover:bg-white hover:transition-all hover:text-[#53c60b]'>Search</button>
                </div>

                <div className='flex flex-wrap mt-10 place-content-center'>
                    {!data.length ? (
                        <img src="/images/search.png" alt="Category" className='w-[250px]   self-center' />
                    ) : null}
                    {data.map(food => (<Card key={food.id} {...food} />))}
                </div>
            </div>
        </div>
    )
}

export default CategoriesPage