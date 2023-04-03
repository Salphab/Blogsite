import {Routes, Route} from "react-router-dom";
import CarTrends from "./Car-Trends/CarTrends";
import Education from "./Education/Education";
import Entertainment from "./Entertainment/Entertainment";
import Health from "./Health/Health";
import Politics from "./Politics/Politics";
import Tech from "./Tech/Tech";
import MarketsNewsPage from '../../../Pages/general_pages/Markets-News-Pages/MarketNewsPage';

function Videos(){
    return(
        <>
            <CarTrends/>
            <Education/>
            <Entertainment/>
            <Health/>
            <Politics/>
            <Tech/>
            <Routes>
                <Route exact path='/category/news' element={<MarketsNewsPage/>}/>
            </Routes>
        </>
    )
}
export default Videos;