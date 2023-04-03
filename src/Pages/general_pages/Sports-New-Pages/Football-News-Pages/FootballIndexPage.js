import { useEffect } from "react";
import Header from "../../../../Components/Header/Header";
import Toptitle from "../../../../Components/TopTitle/Toptitle";
import HomeFooter from "../../../../Components/Footer/HomeFooter";
import Ads from "../../../../Components/Ads/Ads";
import FootballPageHeadline from "./FootballPageHeadline";
import FootballPageBody from "./FootballPageBody";
function FootballIndexPage(){
    useEffect(() => {
        document.title = `Football News | Latest from Proclaimer's View`
        window.scrollTo(0, 0);
    }, []);
    return(
        <>
            <Ads/>
            <div className="lg:relative w-[100%] max-[100%] h-[fit-content]">
                <Header/>
                <Toptitle title='FOOTBALL NEWS'/>
                <FootballPageHeadline/>
                <Ads/>
                <FootballPageBody/>
                <HomeFooter/>
            </div>
        </>
    )
}
export default FootballIndexPage;