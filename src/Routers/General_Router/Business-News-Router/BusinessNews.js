import {Routes, Route} from "react-router-dom";
import BusinessNewsPage from "../../../Pages/general_pages/Busines-News-Pages/BusinessNewsPage";
function BusinessNews(){
    return(
        <Routes>
            <Route exact path='/business/' element={<BusinessNewsPage/>}/>
        </Routes>
    )
}
export default BusinessNews;