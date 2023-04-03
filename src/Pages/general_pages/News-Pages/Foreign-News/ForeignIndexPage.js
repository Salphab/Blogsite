import { useEffect } from "react";
import Header from "../../../../Components/Header/Header";
import Toptitle from "../../../../Components/TopTitle/Toptitle";
import HomeFooter from "../../../../Components/Footer/HomeFooter";
import Ads from "../../../../Components/Ads/Ads";
import ForeignNewsPageHeadline from "./ForeignNewsPageHeadline";
import ForeignNewsPageBody from "../NewsPageBody";

function ForeignIndexPage(){
    useEffect(() => {
        document.title = `International News | Latest from Proclaimer's View`
        window.scrollTo(0, 0);
    }, []);
    return(
        <>
            <Ads/>
            <div className="lg:relative w-[100%] max-[100%] h-[fit-content]">
                <Header/>
                <Toptitle title='INTERNATIONAL NEWS'/>
                <ForeignNewsPageHeadline/>
                <Ads/>
                <ForeignNewsPageBody/>
                <HomeFooter/>
            </div>
        </>
    )
}
export default ForeignIndexPage;