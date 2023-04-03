import { useEffect } from "react";
import Header from "../../../../Components/Header/Header";
import Toptitle from "../../../../Components/TopTitle/Toptitle";
import HomeFooter from "../../../../Components/Footer/HomeFooter";
import Ads from "../../../../Components/Ads/Ads";
import EntertainmentPageHeadline from "./EntertainmentPageHeadline";
import EntertainmentPageBody from "./EntertainmentPageBody";
function EntertainmentNewsPage(){
    useEffect(() => {
        document.title = `Entertainment News | Latest from Proclaimer's View`
        window.scrollTo(0, 0);
    }, []);
    return(
        <>
            <Ads/>
            <div className="lg:relative w-[100%] max-[100%] h-[fit-content]">
                <Header/>
                <Toptitle title='ENTERTAINMENT'/>
                <EntertainmentPageHeadline/>
                <Ads/>
                <EntertainmentPageBody/>
                <HomeFooter/>
            </div>
        </>
    )
}
export default EntertainmentNewsPage;