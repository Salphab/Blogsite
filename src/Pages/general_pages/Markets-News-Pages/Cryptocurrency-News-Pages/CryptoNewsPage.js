import { useEffect } from "react";
import Header from "../../../../Components/Header/Header";
import Toptitle from "../../../../Components/TopTitle/Toptitle";
import HomeFooter from "../../../../Components/Footer/HomeFooter";
import Ads from "../../../../Components/Ads/Ads";
import CryptoPageBody from "./CryptoPageBody";
import CryptoPageHeadline from "./CryptoPageHeadline";

function CryptoNewsPage(){
    useEffect(() => {
        document.title = `Crypto News | Latest from Proclaimer's View`
        window.scrollTo(0, 0);
    }, []);
    return(
        <>
            <Ads/>
            <div className="lg:relative w-[100%] max-[100%] h-[fit-content]">
                <Header/>
                <Toptitle title='CRYPTO NEWS'/>
                <CryptoPageHeadline/>
                <Ads/>
                <CryptoPageBody/>
                <HomeFooter/>
            </div>
        </>
    )
}
export default CryptoNewsPage;