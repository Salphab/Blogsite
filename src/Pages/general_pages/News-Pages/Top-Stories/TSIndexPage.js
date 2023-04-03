import { useEffect } from "react";
import Header from "../../../../Components/Header/Header";
import Toptitle from "../../../../Components/TopTitle/Toptitle";
import HomeFooter from "../../../../Components/Footer/HomeFooter";
import Ads from "../../../../Components/Ads/Ads";
import TSPageHeadline from "./TSPageHL";
import TSPageBody from "./TSPageBody";
function TSIndexPage(){
    useEffect(() => {
        document.title = `Top Stories | Latest from Proclaimer's View`
        window.scrollTo(0, 0);
    }, []);
    return(
        <>
            <Ads/>
            <div className="lg:relative w-[100%] max-[100%] h-[fit-content]">
                <Header/>
                <Toptitle title='TOP STORIES'/>
                <TSPageHeadline/>
                <Ads/>
                <TSPageBody/>
                <HomeFooter/>
            </div>
        </>
    )
}
export default TSIndexPage;