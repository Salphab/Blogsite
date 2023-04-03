import {Routes, Route} from "react-router-dom";
import SecuritiesNewsPage from "../../../../Pages/general_pages/Markets-News-Pages/Securities-News-Pages/SecuritiesNewsPage";
function Tech(){
    return(
        <Routes>
            <Route exact path='/category/tech' element={<SecuritiesNewsPage/>}/>
        </Routes>
    )
}
export default Tech;