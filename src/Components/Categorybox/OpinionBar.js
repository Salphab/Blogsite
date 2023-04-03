import OpinionContent from "./OpinionContent";
import OpinionAds from "../Ads/OpinionAds";
function OpinionBar(props){
    return(
        <section className="lg:relative w-[100%] max-w-[98%] block mt-[1%] mb-[4%] m-auto h-[350px] border-t-[2px] border-blue-500 xl:max-w-[90%] 2xl:max-w-[75%] 3xl:max-w-[85%] 
                            3xl:min-w-[85%] 4xl:max-w-[70%] 4xl:min-w-[70%] 5xl:max-w-[57%] 5xl:min-w-[57%] 6xl:max-w-[48%] 6xl:min-w-[48%] 7xl:max-w-[40%] 7xl:min-w-[40%]">
            <p className='lg:relative md:text-[1.2rem] text-2xl mt-[1%] font-semibold font-h-font'>
                {props.title}
            </p>
            <div className='lg:relative w-[100%] flex block max-w-[100%] h-[90%]'>
                <OpinionContent/>
                <OpinionAds/>
            </div>
        </section>
    )
}
export default OpinionBar;