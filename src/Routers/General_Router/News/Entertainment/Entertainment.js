import {Routes, Route} from "react-router-dom";
import SecuritiesNewsPage from "../../../../Pages/general_pages/Markets-News-Pages/Securities-News-Pages/SecuritiesNewsPage";
function Entertainment(){
    return(
        <Routes>
            <Route exact path='/category/entertainment' element={<SecuritiesNewsPage/>}/>
        </Routes>
    )
}
export default Entertainment;