import {Routes, Route} from "react-router-dom";
import FootballIndexPage from "../../../../Pages/general_pages/Sports-New-Pages/Football-News-Pages/FootballIndexPage";
function FootballRouter(){
    return(
        <Routes>
            <Route exact path='/category/sports/football/' element={<FootballIndexPage/>}/>
        </Routes>
    )
}
export default FootballRouter;