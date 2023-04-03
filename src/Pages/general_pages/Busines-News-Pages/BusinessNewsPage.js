import {useEffect,useState} from "react";
import Header from "../../../Components/Header/Header";
import Toptitle from "../../../Components/TopTitle/Toptitle";
import HomeFooter from "../../../Components/Footer/HomeFooter";
import Ads from "../../../Components/Ads/Ads";
import BusinessNewsPageBody from "./BusinessNewsPageBody";
import BusinessNewsPageHeadline from "./BusinessNewsPageHeadline";
import Axios from "../../../Axios/Axios";
function BusinessNewsPage(){
    const [payloads,setPayload] = useState('');
    const url = 'http://localhost:5000/data/63c08edf854c8e0d792243c2';
    useEffect(() => {
        document.title = `Business News | Latest from Proclaimer's View`
        window.scrollTo(0, 0);
        Axios(url,setPayload);
    },[]);
    return(
        <section className='lg:relative h-[fit-content]'>
            <Ads/>
            <div className="lg:relative w-[100%] max-[100%] h-[fit-content]">
                <Header/>
                <Toptitle title='BUSINESS'/>
                <BusinessNewsPageHeadline data={payloads}/>\
                <Ads/>
                <BusinessNewsPageBody/>
                <HomeFooter/>
            </div>
        </section>
    )
}
export default BusinessNewsPage;