import {Routes, Route} from "react-router-dom";
import Hollywood from "./Hollywood/Hollywood";
import India from "./India/India";
import Korean from "./Korean/Korean";
import Nollywood from "./Nollywood/Nollywood";
import Series from "./Series/Series";
import Wrestling from "./Wrestling/Wrestling";
import MarketsNewsPage from '../../../Pages/general_pages/Markets-News-Pages/MarketNewsPage';

function Videos(){
    return(
        <>
            <Hollywood/>
            <India/>
            <Korean/>
            <Nollywood/>
            <Series/>
            <Wrestling/>
            <Routes>
                <Route exact path='/category/videos' element={<MarketsNewsPage/>}/>
            </Routes>
        </>
    )
}
export default Videos;