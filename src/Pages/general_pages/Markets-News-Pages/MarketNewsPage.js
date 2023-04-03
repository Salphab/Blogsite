import { useEffect } from "react";
import Header from "../../../Components/Header/Header";
import Toptitle from "../../../Components/TopTitle/Toptitle";
import HomeFooter from "../../../Components/Footer/HomeFooter";
import Ads from "../../../Components/Ads/Ads";
import MarketPageHeadline from "./MarketPageHeadline";
import MarketPageBody from "./MarketPageBody";
function MarketViewNewsPage(){
    useEffect(() => {
        document.title = `Market News | Latest from Proclaimer's View`
        window.scrollTo(0, 0);
    }, []);
    return(
        <>
            <Ads/>
            <div className="lg:relative w-[100%] max-[100%] h-[fit-content]">
                <Header/>
                <Toptitle title='MARKET VIEW'/>
                <MarketPageHeadline/>
                <Ads/>
                <MarketPageBody/>
                <HomeFooter/>
            </div>
        </>
    )
}
export default MarketViewNewsPage;