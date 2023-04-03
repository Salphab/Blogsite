import {Routes, Route} from "react-router-dom";
import SecuritiesNewsPage from "../../../../Pages/general_pages/Markets-News-Pages/Securities-News-Pages/SecuritiesNewsPage";
function Education(){
    return(
        <Routes>
            <Route exact path='/category/education' element={<SecuritiesNewsPage/>}/>
        </Routes>
    )
}
export default Education;