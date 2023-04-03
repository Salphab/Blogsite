import { useEffect } from "react";
import Header from "../../../Components/Header/Header";
import TopSection from "../../../Components/TopBarComp/TopSection";
import Ads from "../../../Components/Ads/Ads";
import BodyBox from "../../../Components/Categorybox/BodyBox";
import OpinionBar from "../../../Components/Categorybox/OpinionBar";
import HomeFooter from "../../../Components/Footer/HomeFooter";
import ForexAndStocks from "../../../Components/ThirdPartyQueries.js/ForexAndStocks";
import Sponsor from "../../../Components/Categorybox/Sponsor";
function HomePage(){
    useEffect(()=>{
        document.title = `Proclaimer's View Nigeria News | Breaking News, Nigeria News,Politics Entertainment News & Gist, Football News`
        window.scrollTo(0, 0);
    },[])

    return(
        <>
            <Ads/>
            <div className="lg:relative w-[100%] max-w-[100%] h-[fit-content]">
                <Header/>
                <TopSection/>
                <BodyBox border_color='red'  title1='Top Stories' url1={'http://localhost:5000/news/top_stories'} extension1='news/top-stories' title2='Economy' url2={'http://localhost:5000/news/economy'} extension2='/economy'/>
                <BodyBox border_color='orange' title1='Business' url1={'http://localhost:5000/news/business'} extension1='/business' title2='Controversial' url2={'http://localhost:5000/news/international_news'} extension2='/entertainment'/>
                <Ads/>
                <BodyBox border_color='black' title1='Market' url1={'http://localhost:5000/news/markets'} extension1='/market' title2='International News' url2={'http://localhost:5000/news/international_news'} extension2='news/foreign'/>
                <OpinionBar title='Opinions'/>          
                <BodyBox border_color='yellow' title1='Sports' url1={'http://localhost:5000/news/sports'} extension1='/sports' title2='Tech' url2={'http://localhost:5000/news/tech'} extension2='/tech'/>
                <Sponsor title='Sponsored'/>
                <HomeFooter/>
            </div>
        </>
    )
}
export default HomePage;