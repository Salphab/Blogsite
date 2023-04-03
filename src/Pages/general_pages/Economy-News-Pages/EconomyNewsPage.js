import { useEffect } from "react";
import Header from "../../../Components/Header/Header";
import Toptitle from "../../../Components/TopTitle/Toptitle";
import HomeFooter from "../../../Components/Footer/HomeFooter";
import Ads from "../../../Components/Ads/Ads";
import EconomyNewsPageHeadline from "./EconomyNewsPageHeadline";
import EconomyNewsPageBody from "./EconomyNewsPageBody";
function EconomyNewsPage(){
    useEffect(() => {
        document.title = `Business News | Latest from Proclaimer's View`
        window.scrollTo(0, 0);
    }, []);
    return(
        <>
            <Ads/>
            <div className="lg:relative w-[100%] max-[100%] h-[fit-content]">
                <Header/>
                <Toptitle title='ECONOMY'/>
                <EconomyNewsPageHeadline/>
                <Ads/>
                <EconomyNewsPageBody/>
                <HomeFooter/>
            </div>
        </>
    )
}
export default EconomyNewsPage;