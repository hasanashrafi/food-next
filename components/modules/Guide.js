import Link from "next/link";


function Guide() {
    return (
        <div className="flex flex-col  sm:flex-row sm:justify-between justify-center  mb-24 place-items-center">
            <Link href="/menu" className="w-24 flex items-center place-content-center sm:w-36 text-center m-3 shadow-lg shadow-[#53c60b] py-4 px-10 rounded-md cursor-pointer hover:bg-[#53c60b] hover:text-white ease-in-out text-[#53c60b]">
                Menu
            </Link>
            <Link href="/categories" className="w-24  flex items-center place-content-center sm:w-36 text-center m-3 shadow-lg shadow-[#53c60b] py-4 px-10 rounded-md cursor-pointer hover:bg-[#53c60b] hover:text-white ease-in-out text-[#53c60b]">
                Categories
            </Link>
            <Link href="/" className="w-24  flex items-center place-content-center sm:w-36 text-center m-3 shadow-lg shadow-[#53c60b] py-4 px-10 rounded-md cursor-pointer hover:bg-[#53c60b] hover:text-white ease-in-out text-[#53c60b]">
                Discount
            </Link>
        </div>
    );
}

export default Guide;