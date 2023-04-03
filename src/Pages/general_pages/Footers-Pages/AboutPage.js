import { useEffect } from "react";
import Header from "../../../Components/Header/Header";
import Ads from "../../../Components/Ads/Ads";
import AboutBody from "../../../Components/Footer/FootersBody/AboutBody";
import HomeFooter from "../../../Components/Footer/HomeFooter";
function AboutPage(){
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return(
        <>
            <Ads/>
            <div className="lg:relative w-[100%] max-[100%] h-[fit-content]">
                <Header/>
                <AboutBody title='ABOUT US'/>
                <HomeFooter/>
            </div>
            
        </>
    )
}
export default AboutPage;