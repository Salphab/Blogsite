import { useEffect } from "react";
import Header from "../../../../Components/Header/Header";
import Toptitle from "../../../../Components/TopTitle/Toptitle";
import HomeFooter from "../../../../Components/Footer/HomeFooter";
import Ads from "../../../../Components/Ads/Ads";
import HealthPageHeadline from "./HealthPageHeadline";
import HealthPageBody from "./HealthPageBody";
function HealthPage(){
    useEffect(() => {
        document.title = `Health News | Latest from Proclaimer's View`
        window.scrollTo(0, 0);
    }, []);
    return(
        <>
            <Ads/>
            <div className="lg:relative w-[100%] max-[100%] h-[fit-content]">
                <Header/>
                <Toptitle title='Health'/>
                <HealthPageHeadline/>
                <Ads/>
                <HealthPageBody/>
                <HomeFooter/>
            </div>
        </>
    )
}
export default HealthPage;