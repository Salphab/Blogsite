import {Routes, Route} from "react-router-dom";
import SecuritiesNewsPage from "../../../../Pages/general_pages/Markets-News-Pages/Securities-News-Pages/SecuritiesNewsPage";
function Health(){
    return(
        <Routes>
            <Route exact path='/category/health' element={<SecuritiesNewsPage/>}/>
        </Routes>
    )
}
export default Health;