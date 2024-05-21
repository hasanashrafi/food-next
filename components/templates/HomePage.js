import Attributes from "../modules/Attributes"
import Banner from "../modules/Banner"
import Definition from "../modules/Definition"

function HomePage() {
    return (
        <div className=" flex flex-wrap justify-between p-4 ">
            <Banner />
            <Attributes />
            <Definition />
        </div>
    )
}

export default HomePage