import {Routes, Route} from "react-router-dom";
import CommoditiesNewsPage from "../../../../Pages/general_pages/Markets-News-Pages/Commodities-News-Pages/CommodotiesNewsPage";
function Hollywood(){
    return(
        <Routes>
            <Route exact path='/category/hollywood' element={<CommoditiesNewsPage/>}/>
        </Routes>
    )
}
export default Hollywood;