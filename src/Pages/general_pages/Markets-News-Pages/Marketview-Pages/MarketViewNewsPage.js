import { useEffect } from "react";
import Header from "../../../Components/Header/Header";
import Toptitle from "../../../Components/TopTitle/Toptitle";
import HomeFooter from "../../../Components/Footer/HomeFooter";
import Ads from "../../../Components/Ads/Ads";
import MarketPageHeadline from "../MarketPageHeadline";
import MarketViewPageBody from "./MarketViewPageBody";
function MarketViewNewsPage(){
    useEffect(() => {
        document.title = `Markekt View | Latest from Proclaimer's View`
        window.scrollTo(0, 0);
    }, []);
    return(
        <>
            <Ads/>
            <div className="lg:relative w-[100%] max-[100%] h-[fit-content]">
                <Header/>
                <Toptitle title='EQUITIES NEWS'/>
                <MarketPageHeadline/>
                <Ads/>
                <MarketViewPageBody/>
                <HomeFooter/>
            </div>
        </>
    )
}
export default MarketViewNewsPage;