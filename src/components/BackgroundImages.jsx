import Bitcoin from "../images/Bitcoin.svg"
import Litecoin from "../images/Litecoin.svg"
import Ethereum from "../images/Ethereum.svg"


export default function BackgroundImages({}) {
    return (
        <div className="background_images">
            <div className="bitcoin">
                    <img src={Bitcoin} alt="bitcoin" />
            </div>
            <div className="litecoin" id="litecoin">
                    <img src={Litecoin} alt="litecoin" />
            </div>
            <div className="ethereum">
                    <img src={Ethereum} alt="ethereum" />
            </div>
        </div>
    )
}