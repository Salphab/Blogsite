import {Routes, Route} from "react-router-dom";
import BasketballIndexPage from "../../../../Pages/general_pages/Sports-New-Pages/Basketball-News-Pages/BasketballIndexPage";
function BasketballRouter(){
    return(
        <Routes>
            <Route exact path='/category/sports/basketball/' element={<BasketballIndexPage/>}/>
        </Routes>
    )
}
export default BasketballRouter;