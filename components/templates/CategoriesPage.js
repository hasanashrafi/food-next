import { useRouter } from 'next/router';
import React, { useState } from 'react'

function CategoriesPage() {
    const [query, setQuery] = useState({ difficulty: "", time: "" });
    const router = useRouter()

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
                <div className=''>
                    <select
                        value={query.difficulty}
                        name="difficulty"
                        onChange={changeHandler}
                        className=' border-none w-[150px] h-[40px] rounded-md mr-[10px] p-[10px] text-[#48ac0a] shadow-lg outline-none'>
                        <option value="" selected>
                            Difficulty
                        </option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>

                    <select
                        value={query.time}
                        name="time"
                        onChange={changeHandler}
                        className='border-none w-[150px] h-[40px] rounded-md mr-[10px] p-[10px] text-[#48ac0a] shadow-lg outline-none'>
                        <option value="" selected>Cooking Time</option>
                        <option value="more">More Than 30 min </option>
                        <option value="less">Less Than 30 min </option>
                    </select>
                    <button
                        onClick={searchHandler}
                        className='outline-none border-none bg-[#53c60b] text-white h-[39px] px-5 rounded-md cursor-pointer shadow-lg hover:bg-white hover:transition-all hover:text-[#53c60b]'>Search</button>
                </div>
            </div>
        </div>
    )
}

export default CategoriesPage