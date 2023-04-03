import SideAds from "../../../../Components/Ads/SideAds";
import PageSubBody from "../../../PageSubBody";
import Axios from "../../../../Axios/Axios-2";
import { useState } from "react";
function EntertainmentPageBody(){
    const [payloads,setPayloads] = useState('');
    const [isLoading,setisLoading] = useState(false);
    const url = 'http://localhost:5000/news/entertainment';
    Axios(url,setPayloads,setisLoading);
    console.log(payloads);
    const Top_Headings = payloads;
    if(!isLoading){
        return(
            <h1>...is Loading</h1>
        )
    }
    return(
        <section className="lg:relative w-[100%] max-w-[92%] xl:max-w-[85%] flex m-auto h-[fit-content]">
            <PageSubBody data={Top_Headings}/>
            <SideAds/>
        </section>
    )
}
export default EntertainmentPageBody;