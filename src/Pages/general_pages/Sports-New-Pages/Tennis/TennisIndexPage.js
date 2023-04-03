import { useEffect } from "react";
import Header from "../../../../Components/Header/Header";
import Toptitle from "../../../../Components/TopTitle/Toptitle";
import HomeFooter from "../../../../Components/Footer/HomeFooter";
import Ads from "../../../../Components/Ads/Ads";
import TennisPageHeadline from "./TennisPageHeadline";
import TennisPageBody from "./TennisPageBody";
function TennisIndexPage(){
    useEffect(() => {
        document.title = `Tennis News | Latest from Proclaimer's View`
        window.scrollTo(0, 0);
    }, []);
    return(
        <>
            <Ads/>
            <div className="lg:relative w-[100%] max-[100%] h-[fit-content]">
                <Header/>
                <Toptitle title='TENNIS NEWS'/>
                <TennisPageHeadline/>
                <Ads/>
                <TennisPageBody/>
                <HomeFooter/>
            </div>
        </>
    )
}
export default TennisIndexPage;