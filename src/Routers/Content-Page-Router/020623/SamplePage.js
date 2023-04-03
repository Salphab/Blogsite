import {Routes,Route} from "react-router-dom";
import SampleContentPage from "../../../Pages/content_page/SampleContentPage";

function SamplePage(){
    return(
        <Routes>
            <Route exact path='/news/sample' element={<SampleContentPage content_url='http://localhost:5000/news/sports/data/63d29971131b831af9f77b30'/>}/>
        </Routes>
    )
}
export default SamplePage;