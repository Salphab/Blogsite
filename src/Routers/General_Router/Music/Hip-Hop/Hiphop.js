import {Routes, Route} from "react-router-dom";
import EntertainmentNewsPage from "../../../../Pages/general_pages/More/Entertainment-News-Page/EntertainmentNewsPage";
function EntertainmentNewsRouter(){
    return(
        <Routes>
            <Route exact path='/category/music/hip_hop' element={<EntertainmentNewsPage/>}/>
        </Routes>
    )
}
export default EntertainmentNewsRouter;