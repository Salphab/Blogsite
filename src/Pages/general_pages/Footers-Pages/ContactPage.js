import { useEffect } from "react";
import Header from "../../../Components/Header/Header";
import Ads from "../../../Components/Ads/Ads";
import ContactBody from "../../../Components/Footer/FootersBody/ContactBody";
import HomeFooter from "../../../Components/Footer/HomeFooter";
function ContactPage(){
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return(
        <>
            <Ads/>
            <div className="lg:relative w-[100%] max-[100%] h-[fit-content]">
                <Header/>
                <ContactBody title='CONTACT US'/>
                <HomeFooter/>
            </div>
        </>
    )
}
export default ContactPage;