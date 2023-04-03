import {Routes, Route} from "react-router-dom";
import SecuritiesNewsPage from "../../../../Pages/general_pages/Markets-News-Pages/Securities-News-Pages/SecuritiesNewsPage";
function CarTrends(){
    return(
        <Routes>
            <Route exact path='/category/car_trends' element={<SecuritiesNewsPage/>}/>
        </Routes>
    )
}
export default CarTrends;