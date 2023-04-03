import About from "./About";
import Socialmedia from "./Socialmedia";
import StayUpdated from "./StayUpdated"
function HomeFooter(){
    return(
        <section className="lg:relative w-[100%] bg-gray-100 block max-w-[100%] bg-white h-[420px]">
            <div className="lg:relative w-[100%] max-w-[100%] h-[23%] ">

            </div>
            <div className="lg:relative w-[100%] flex max-w-[90%] m-auto h-[70%] 2xl:max-w-[85%] 2xl:max-w-[75%] 3xl:max-w-[85%] 3xl:min-w-[85%] 4xl:max-w-[70%] 4xl:min-w-[70%] 5xl:max-w-[57%] 5xl:min-w-[57%] 6xl:max-w-[48%] 6xl:min-w-[48%] 7xl:max-w-[40%] 7xl:min-w-[40%]">
                <About/>
                <Socialmedia/>
                <StayUpdated/>
            </div>
            <div className="lg;relative w-[100%] max-w-[100%] m-auto bg-gray-800 h-[5%] 3xl:max-w-[85%] 3xl:min-w-[85%] 4xl:max-w-[70%] 4xl:min-w-[70%] 5xl:max-w-[57%] 5xl:min-w-[57%] 6xl:max-w-[48%] 6xl:min-w-[48%] 7xl:max-w-[40%] 7xl:min-w-[40%]">
                <p className="lg:relative text-white text-[12px] font-semibold font-h-font w-[100%] max-w-[fit-content] m-auto mt-[2%] 2xl:text-[1rem]">
                2022 Media Trust Limited. All rights reserved.
                </p>
            </div>
        </section>
    )

}
export default HomeFooter;