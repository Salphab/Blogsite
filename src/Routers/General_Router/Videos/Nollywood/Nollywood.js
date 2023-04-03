import {Routes, Route} from "react-router-dom";
import EquitiesNewsPage from "../../../../Pages/general_pages/Markets-News-Pages/Equities-News-Pages/EquitiesNewsPage";
function Nollywood(){
    return(
        <Routes>
            <Route exact path='/category/nollywood' element={<EquitiesNewsPage/>}/>
        </Routes>
    )
}
export default Nollywood;