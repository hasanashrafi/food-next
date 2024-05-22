
import SpaceX from "../icons/SpaceX";
import Tesla from "../icons/Tesla";
import Apple from "../icons/Apple";
import Binance from "../icons/Binance";
import Marquee from "react-fast-marquee";


function Companies() {
    return (
        <div className='w-full flex items-center justify-around'>
            <Marquee>
                
                <img src='/images/awem365ii.png' className="m-5 w-28 h-24" />
                <img src='/images/chickenbiryani.png' className="m-5 w-28 h-24" />
                <img src='/images/awem365ii.png' className="m-5 w-28 h-24" />
                <img src='/images/fish.png' className="m-5 w-28 h-24" />
                <img src='/images/chickenbiryani.png' className="m-5 w-28 h-24" />
                <img src='/images/fish.png' className="m-5 w-28 h-24" />
                <img src='/images/burger.png' className="m-5 w-28 h-24" />
            </Marquee>
        </div>
    );
}

export default Companies;