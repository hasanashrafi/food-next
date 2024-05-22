import Link from "next/link";


function Banner() {
    return (
        <div className='flex-col-reverse sm:flex sm:flex-row sm:text-2xl '>
            <div className=' flex flex-col mt-5 text-center sm:text-justify sm:w-1/2'>
                <h2 className="border-b-2 border-b-green-800 w-fit my-5 self-center sm:self-start ">YEMEK</h2>
                <p className="font-semibold my-4">Food Delivery and Takeout!</p>
                <span className="text-gray-600 text-center sm:text-justify ">
                    YEMEK is an online food ordering and delivery platform launched by
                    Uber in 2014. Meals are delivered by couriers using cars, scooters,
                    bikes, or on foot.
                </span>
                <Link href="/menu" className="w-fit py-2.5 self-center xl:self-start md:self-start sm:self-start px-6 mt-6 rounded text-white bg-[#53c60b] hover:bg-green-700 ease-in-out">See All</Link>
            </div>

            <div className='sm:w-96 w-60 m-auto mt-5 sm:text-center '>
                <img src="/images/banner.png" alt="Food image" />
            </div>
        </div>
    );
}

export default Banner;