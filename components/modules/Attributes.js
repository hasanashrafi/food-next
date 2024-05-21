import Choice from "../icons/Choice";
import Clock from "../icons/Clock";
import Fast from "../icons/Fast";
import Food from "../icons/Food";


function Attributes() {
    return (
        <div className='w-full h-fit mt-24 '>
            <h3 className="text-lg text-[#53c60b] my-6">Why us?</h3>
          
            <div className='w-full flex justify-between text-center place-items-center '>
                <div className="flex flex-col  items-center w-48 h-20 sm:h-36 m-2  rounded-xl border-b-2 shadow-md shadow-[#53c60b] border-b-[#53c60b] text-center py-4 px-2 mt-18 ">
                    <Fast />
                    <p className="font-semibold mt-5 hidden sm:inline-block text-[#53c60b]">Fast</p>
                </div>
                <div className="flex flex-col  items-center w-48 h-20 sm:h-36 m-2  rounded-xl border-b-2 shadow-md shadow-[#53c60b] border-b-[#53c60b] text-center py-4 px-2 mt-18 ">
                    <Food />
                    <p className="font-semibold mt-5 hidden sm:inline-block text-[#53c60b]">Best Restaurants</p>
                </div>
                <div className="flex flex-col  items-center w-48 h-20 sm:h-36 m-2  rounded-xl border-b-2 shadow-md shadow-[#53c60b] border-b-[#53c60b] text-center py-4 px-2 mt-18 ">
                    <Choice />
                    <p className="font-semibold mt-5 hidden sm:inline-block text-[#53c60b]">Your Choice</p>
                </div>
                <div className="flex flex-col  items-center w-48 h-20 sm:h-36 m-2  rounded-xl border-b-2 shadow-md shadow-[#53c60b] border-b-[#53c60b] text-center py-4 px-2 mt-18 ">
                    <Clock />
                    <p className="font-semibold mt-5 hidden sm:inline-block text-[#53c60b]">24-7</p>
                </div>
            </div>
        </div>
    );
}

export default Attributes;