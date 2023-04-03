import { useEffect } from "react";
import Header from "../../../Components/Header/Header";
import Ads from "../../../Components/Ads/Ads";
import TermsBody from "../../../Components/Footer/FootersBody/TermsBody";
import HomeFooter from "../../../Components/Footer/HomeFooter";
function TermsPage(){
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return(
        <>
            <Ads/>
            <div className="lg:relative w-[100%] max-[100%] h-[fit-content]">
                <Header/>
                <TermsBody title='TERMS OF USE'/>
                <HomeFooter/>
            </div>
        </>
    )
}
export default TermsPage;