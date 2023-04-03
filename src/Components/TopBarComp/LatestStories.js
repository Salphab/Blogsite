import CustomTitle from "../Header/Title/CustomTitle"
import LatestComp from "./LatestComp/LatestComp"
function LatestStories(){
    return(
        <section className="md:max-w-[95%] md:m-auto md:ml-[3%] md:h-[450px] relative xl:p-[.5%] w-[100%] block max-w-[40%] mr-[1%] md:h-[600px] lg:h-[700px] xl:h-[700px] 2xl:h-[700px] 3xl:h-[85vh] 4xl:h-[80vh] 6xl:h-[60vh] 7xl:h-[50vh]">
            <CustomTitle value='News Highlights' textColor="white" innerDivWidth='35%' topDivBg='black'/>
            <div className="lg:relative w-[100%] max-w-[100%] md:h-[400px] lg:h-[600px] h-[85%] md:grid-cols-3 grid lg:grid-cols-2">
                <LatestComp title='FUGAZ investors gain N79 billion during the week' author='Badmus Ibrahim'  imgalt='missing' imgsrc='https://nairametrics.com/wp-content/uploads/2022/10/FUGAZ-CEOS-2.png?resize=350,250'/>
                <LatestComp title='FUGAZ investors gain N79 billion during the week' author='Aline Usman'  imgalt='missing' imgsrc='https://nairametrics.com/wp-content/uploads/2022/10/FUGAZ-CEOS-2.png?resize=350,250'/>
                <LatestComp title='FUGAZ investors gain N79 billion during the week' author='Zainab Badawi' imgalt='missing' imgsrc='https://nairametrics.com/wp-content/uploads/2022/10/FUGAZ-CEOS-2.png?resize=350,250'/>
                <LatestComp title='FUGAZ investors gain N79 billion during the week' author='Gbenga Aruleba'  imgalt='missing' imgsrc='https://nairametrics.com/wp-content/uploads/2022/10/FUGAZ-CEOS-2.png?resize=350,250'/>
                <LatestComp title='FUGAZ investors gain N79 billion during the week' author='Seun Akinlade'  imgalt='missing' imgsrc='https://nairametrics.com/wp-content/uploads/2022/10/FUGAZ-CEOS-2.png?resize=350,250'/>
                <LatestComp title='FUGAZ investors gain N79 billion during the week' author='Daniel Mike' imgalt='missing' imgsrc='https://nairametrics.com/wp-content/uploads/2022/10/FUGAZ-CEOS-2.png?resize=350,250'/>
                <LatestComp title='FUGAZ investors gain N79 billion during the week' imgsrc='https://nairametrics.com/wp-content/uploads/2022/10/FUGAZ-CEOS-2.png?resize=350,250'/>
                <LatestComp title='FUGAZ investors gain N79 billion during the week' imgsrc='https://nairametrics.com/wp-content/uploads/2022/10/FUGAZ-CEOS-2.png?resize=350,250'/>
            </div>
        </section>
        
    )
}
export default LatestStories