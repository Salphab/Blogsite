import { useEffect } from "react";
import Header from "../../../../Components/Header/Header";
import Toptitle from "../../../../Components/TopTitle/Toptitle";
import HomeFooter from "../../../../Components/Footer/HomeFooter";
import Ads from "../../../../Components/Ads/Ads";
import TechNewsPageHeadline from "./TechNewsPageHeadline";
import TechNewsPageBody from "./TechNewsBody";
function TechNewsPage(){
    useEffect(() => {
        document.title = `Tech News | Latest from Proclaimer's View`
        window.scrollTo(0, 0);
    }, []);
    return(
        <>
            <Ads/>
            <div className="lg:relative w-[100%] max-[100%] h-[fit-content]">
                <Header/>
                <Toptitle title='TECH NEWS'/>
                <TechNewsPageHeadline/>
                <Ads/>
                <TechNewsPageBody/>
                <HomeFooter/>
            </div>
        </>
    )
}
export default TechNewsPage;