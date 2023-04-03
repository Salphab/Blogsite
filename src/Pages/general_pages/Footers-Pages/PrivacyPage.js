import { useEffect } from "react";
import Header from "../../../Components/Header/Header";
import Ads from "../../../Components/Ads/Ads";
import PrivacyBody from "../../../Components/Footer/FootersBody/PrivacyBody";
import HomeFooter from "../../../Components/Footer/HomeFooter";
function PrivacyPage(){
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return(
        <>
             <Ads/>
             <div className="lg:relative w-[100%] max-[100%] h-[fit-content]">
                <Header/>
                <PrivacyBody title='PRIVACY POLICY'/>
                <HomeFooter/>
            </div>
        </>
    )
}
export default PrivacyPage;