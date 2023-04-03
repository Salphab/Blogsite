import { useEffect } from "react";
import Header from "../../../Components/Header/Header";
import Toptitle from "../../../Components/TopTitle/Toptitle";
import HomeFooter from "../../../Components/Footer/HomeFooter";
import Ads from "../../../Components/Ads/Ads";
import OpinionPageHeadline from "./OpinionPageHeadline";
import OpinionPageBody from "./OpinionPageBody";
function OpinionPage(){
    useEffect(() => {
        document.title = `Opinion | Latest from Proclaimer's View`
        window.scrollTo(0, 0);
    }, []);
    return(
        <>
            <Ads/>
            <div className="lg:relative w-[100%] max-[100%] h-[fit-content]">
                <Header/>
                <Toptitle title='OPINION'/>
                <OpinionPageHeadline/>
                <Ads/>
                <OpinionPageBody/>
                <HomeFooter/>
            </div>
        </>
    )
}
export default OpinionPage;