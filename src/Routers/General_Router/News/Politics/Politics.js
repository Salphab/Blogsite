import {Routes, Route} from "react-router-dom";
import SecuritiesNewsPage from "../../../../Pages/general_pages/Markets-News-Pages/Securities-News-Pages/SecuritiesNewsPage";
function Politics(){
    return(
        <Routes>
            <Route exact path='/category/india' element={<SecuritiesNewsPage/>}/>
        </Routes>
    )
}
export default Politics;