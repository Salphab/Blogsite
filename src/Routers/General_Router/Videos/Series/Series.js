import {Routes, Route} from "react-router-dom";
import CryptoNewsPage from "../../../../Pages/general_pages/Markets-News-Pages/Cryptocurrency-News-Pages/CryptoNewsPage";
function Series(){
    return(
        <Routes>
            <Route exact path='/category/series' element={<CryptoNewsPage/>}/>
        </Routes>
    )
}
export default Series;