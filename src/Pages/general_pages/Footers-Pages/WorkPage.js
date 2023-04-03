import { useEffect } from "react";
import Header from "../../../Components/Header/Header";
import Ads from "../../../Components/Ads/Ads";
import WorkBody from "../../../Components/Footer/FootersBody/WorkBody";
import HomeFooter from "../../../Components/Footer/HomeFooter";
function WorkPage(){
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return(
        <>
            <Ads/>
            <div className="lg:relative w-[100%] max-[100%] h-[fit-content]">
                <Header/>
                <WorkBody title='WORK WITH US'/>
                <HomeFooter/>
            </div>
        </>
    )
}
export default WorkPage;