import {Routes, Route} from "react-router-dom";
import CryptoNewsPage from "../../../../Pages/general_pages/Markets-News-Pages/Cryptocurrency-News-Pages/CryptoNewsPage";
function Wrestling(){
    return(
        <Routes>
            <Route exact path='/category/wrestling' element={<CryptoNewsPage/>}/>
        </Routes>
    )
}
export default Wrestling;