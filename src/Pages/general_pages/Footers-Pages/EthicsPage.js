import { useEffect } from "react";
import Header from "../../../Components/Header/Header";
import Ads from "../../../Components/Ads/Ads";
import EthicsBody from "../../../Components/Footer/FootersBody/EthicsBody";
import HomeFooter from "../../../Components/Footer/HomeFooter";
function EthicsPage(){
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return(
        <>
            <Ads/>
            <div className="lg:relative w-[100%] max-[100%] h-[fit-content]">
                <Header/>
                <EthicsBody title='CODE OF EHTICS'/>
                <HomeFooter/>
            </div>
        </>
    )
}
export default EthicsPage;