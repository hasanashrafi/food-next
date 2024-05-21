import Attributes from "../modules/Attributes"
import Banner from "../modules/Banner"
import Companies from "../modules/Companies"
import Definition from "../modules/Definition"

function HomePage() {
    return (
        <div className=" flex flex-wrap justify-between p-4 ">
            <Banner />
            <Attributes />
            <Definition />
            <Companies/>
        </div>
    )
}

export default HomePage