import { useEffect } from "react";
import Header from "../../../Components/Header/Header";
import Ads from "../../../Components/Ads/Ads";
import AuthorsBody from "../../../Components/Footer/FootersBody/AuthorsBody";
import HomeFooter from "../../../Components/Footer/HomeFooter";
function AuthorsPage(){
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return(
        <>
            <Ads/>
            <div className="lg:relative w-[100%] max-[100%] h-[fit-content]">
                <Header/>
                <AuthorsBody title='OUR AUTHORS'/>
                <HomeFooter/>
            </div>
        </>
    )
}
export default AuthorsPage;