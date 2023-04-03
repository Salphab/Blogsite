import { useEffect } from "react";
import Header from "../../../Components/Header/Header";
import Toptitle from "../../../Components/TopTitle/Toptitle";
import HomeFooter from "../../../Components/Footer/HomeFooter";
import Ads from "../../../Components/Ads/Ads";
import NewsPageHeadline from "./NewsPageHeadline";
import NewsPageBody from "./NewsPageBody";
function NewsPage(){
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return(
        <>
            <Ads/>
            <div className="lg:relative w-[100%] max-[100%] h-[fit-content]">
                <Header/>
                <Toptitle title='NEWS'/>
                <NewsPageHeadline/>
                <Ads/>
                <NewsPageBody/>
                <HomeFooter/>
            </div>
        </>
    )
}
export default NewsPage;