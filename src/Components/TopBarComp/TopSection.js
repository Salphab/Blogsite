import SpotLight from "./Spotlight";
import LatestStories from "./LatestStories";
function TopSection(){
    const data = {imgsrc:"https://nairametrics.com/wp-content/uploads/2023/01/anthony-indraus-Bb9jWuTMPUk-unsplash.jpg",
                    headline:"How we achieved 24/7 power in my estate in Lekki",
                    reporter:" Badmus Ibrahim",
                    summary:"In 2022, my neighbors and I in the Ikate area of Lekki, Lagos, Nigeria, experienced a 24/7 power supply for the first time. This level of power supply is typically only available in select, upscale neighborhoods in Nigeria’s major cities like Lagos and Abuja.",
                    date:'13 Jan 2023',
                }
    return(
        <section className="sm:block md:block relative w-[100%] mt-[1%] flex lg:max-w-[95%] lg:m-auto h-[fit-content] lg:flex xl:flex 2xl:flex 3xl:flex 4xl:flex 5xl:flex 6xl:flex xl:max-w-[94%] xl:m-auto 2xl:max-w-[75%]
                             3xl:max-w-[87%] 3xl:min-w-[80%] 4xl:max-w-[70%] 4xl:min-w-[70%] 5xl:max-w-[56%] 5xl:min-w-[56%] 6xl:max-w-[48%]
                            6xl:min-w-[48%] 7xl:max-w-[40%] 7xl:min-w-[40%]">
            <SpotLight info={data}/>
            <LatestStories/>
        </section>
    )
}
export default TopSection;