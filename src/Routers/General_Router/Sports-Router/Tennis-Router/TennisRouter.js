import {Routes, Route} from "react-router-dom";
import TennisIndexPage from "../../../../Pages/general_pages/Sports-New-Pages/Tennis/TennisIndexPage";
function TennisRouter(){
    return(
        <Routes>
            <Route exact path='/category/sports/tennis/' element={<TennisIndexPage/>}/>
        </Routes>
    )
}
export default TennisRouter;