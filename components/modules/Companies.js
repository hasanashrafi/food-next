
import SpaceX from "../icons/SpaceX";
import Tesla from "../icons/Tesla";
import Apple from "../icons/Apple";
import Binance from "../icons/Binance";
import Marquee from "react-fast-marquee";

import CIcon from "@coreui/icons-react";
import { cilPizza } from "@coreui/icons";

function Companies() {
    return (
        <div className='w-full flex items-center justify-around'>
            <Marquee>
                <Apple />
                <SpaceX />
                <Binance />
                <Tesla />
                <CIcon icon={cilPizza}  className="w-12 ml-10 text-orange-500"/>
            </Marquee>
        </div>
    );
}

export default Companies;