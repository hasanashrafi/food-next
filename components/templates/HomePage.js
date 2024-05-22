import Attributes from "../modules/Attributes"
import Banner from "../modules/Banner"
import Companies from "../modules/Companies"
import Definition from "../modules/Definition"
import Guide from "../modules/Guide"
import Instruction from "../modules/Instrction"
import Restrictions from "../modules/Restriction"

function HomePage() {
    return (
        <div className="w-full justify-between  ">
            <Banner />
            <Attributes />
            <Definition />
            <Companies />
            <Instruction />
            <Guide />
            <Restrictions />
        </div>
    )
}

export default HomePage