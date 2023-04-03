import { useEffect } from "react";
import Header from "../../../../Components/Header/Header";
import Toptitle from "../../../../Components/TopTitle/Toptitle";
import HomeFooter from "../../../../Components/Footer/HomeFooter";
import Ads from "../../../../Components/Ads/Ads";
import CommoditiesNewsPageHeadline from "./CommoditiesNewsPageHeadline";
import CommoditiesNewsPageBody from "./CommoditiesNewsPageBody";
function CommoditiesNewsPage(){
    useEffect(() => {
        document.title = `Commodities News | Latest from Proclaimer's View`
        window.scrollTo(0, 0);
    }, []);
    return(
        <>
            <Ads/>
            <div className="lg:relative w-[100%] max-[100%] h-[fit-content]">
                <Header/>
                <Toptitle title='COMMODITIES NEWS'/>
                <CommoditiesNewsPageHeadline/>
                <Ads/>
                <CommoditiesNewsPageBody/>
                <HomeFooter/>
            </div>
        </>
    )
}
export default CommoditiesNewsPage;