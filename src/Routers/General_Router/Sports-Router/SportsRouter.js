import {Routes, Route} from "react-router-dom";
import SportPage from "../../../Pages/general_pages/Sports-New-Pages/SportPage";
import FootballRouter from "../Sports-Router/Football-Router/FootballRouter";
import BasketballRouter from "../Sports-Router/Basketball-Router/BasketballRouter";
import TennisRouter from "../../General_Router/Sports-Router/Tennis-Router/TennisRouter";
function SportRouter(){
    return(
        <>
            <TennisRouter/>
            <BasketballRouter/>
            <FootballRouter/>
             <Routes>
                <Route exact path='category/sports' element={<SportPage/>}/>
            </Routes>     
        </>  
    )
}
export default SportRouter;