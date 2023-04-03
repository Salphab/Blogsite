import { useEffect } from "react";
import axios from 'axios';
function StayUpdated(){
    useEffect(()=>{
       axios.get("https://api.apilayer.com/currency_data/live?source=USD&currencies=NGN%2CEUR",{
        headers: {
            'apikey': 'tgRn0n5PVcCz7XbTlb3dG2OwqDQslJHM'
          }
       })
       .then(data=>console.log(data.data))
       .catch(error=>console.log(error.message))
    },[])
    return(
        <section className="lg:relative w-[100%] md:max-w-[40%] lg:max-w-[35%] h-[100%] border-r-[1px]">
             <h1 className="lg:relative text-black font-semibold w-[100%] max-w-[fit-content] ml-[4%] mb-[3%] pb-[1%] md:text-[1rem] lg:text-[1.2rem] border-b-[2px] border-[black] font-h-font 2xl:text-[1.3rem]">Stay Updated With Our News</h1>
             <p className="lg:relative md:text-[.9rem] lg:text-md ml-[4%] font-h-font 2xl:text-[1rem]">Subcribe to our Hot News</p>
             <div  className="lg:relative w-[100%] max-w-[100%] flex mt-[4%] h-[20%] ml-[4%]">
                <input type='email' placeholder="Email Address" className="lg:relative rounded-l-[5px] w-[100%] max-w-[65%] placeholder:text-sm placeholder:pl-[2%] border-[1px] border-blue-500 placeholder:pb-[5%] h-[60%] focus:outline-blue-800 focus:outline-[1px]"/>
                <button type='submit' className="lg:relative bg-red-500 bg-blue-800 rounded-r-[5px] text-white text-sm p-[5px] h-[60%]">Subscribe</button>
             </div>
        </section>
    )
}
export default StayUpdated;