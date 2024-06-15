import Choice from "../icons/Choice";
import Clock from "../icons/Clock";
import Fast from "../icons/Fast";
import Food from "../icons/Food";


function Attributes() {
    return (
        <div className='w-full h-fit mt-24 p-3 '>
            <h3 className="text-lg  text-[#53c60b] my-6">Why us?</h3>

            <div className='w-full flex flex-wrap justify-center sm:justify-around text-center place-items-center '>
                <div className="flex flex-col place-content-center items-center w-24 sm:w-36  sm:h-36  m-2  rounded-xl  border-none shadow-md shadow-[#53c60b]  text-center place-items-center p-[15px] mt-18 ">
                    <Fast />
                    <p className=" mt-5 hidden sm:inline-block text-[#53c60b]">Fast</p>
                </div>
                <div className="flex flex-col place-content-center items-center w-24 sm:w-36  sm:h-36  m-2  rounded-xl  border-none shadow-md shadow-[#53c60b]  text-center p-[15px] mt-18 ">
                    <Food />
                    <p className=" mt-5 hidden sm:inline-block text-[#53c60b]">Best Restaurants</p>
                </div>
                <div className="flex flex-col place-content-center items-center w-24 sm:w-36  sm:h-36  m-2  rounded-xl border-none  shadow-md shadow-[#53c60b]  text-center p-[15px] mt-18 ">
                    <Choice />
                    <p className=" mt-5 hidden place-content-center sm:inline-block text-[#53c60b]">Your Choice</p>
                </div>
                <div className="flex flex-col place-content-center items-center w-24 sm:w-36  sm:h-36  m-2  rounded-xl  border-none shadow-md shadow-[#53c60b]  text-center p-[15px] mt-18 ">
                    <Clock />
                    <p className=" mt-5 hidden sm:inline-block text-[#53c60b]">24-7</p>
                </div>
            </div>
        </div>
    );
}

export default Attributes;