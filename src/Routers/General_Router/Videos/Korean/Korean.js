import {Routes, Route} from "react-router-dom";
import SecuritiesNewsPage from "../../../../Pages/general_pages/Markets-News-Pages/Securities-News-Pages/SecuritiesNewsPage";
function Korean(){
    return(
        <Routes>
            <Route exact path='/category/korean' element={<SecuritiesNewsPage/>}/>
        </Routes>
    )
}
export default Korean;