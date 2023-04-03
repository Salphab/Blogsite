import Header from "../../Components/Header/Header";
import HomeFooter from "../../Components/Footer/HomeFooter";
import ContentBody from "../../Components/Content_body/ContentBody";
function SampleContentPage(props){
    return(
        <>
           <Header/>
           <ContentBody url={props.content_url}/>
           <HomeFooter/>
        </>
    )
}
export default SampleContentPage;