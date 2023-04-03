import {Routes, Route} from "react-router-dom";
import HealthPage from "../../../../Pages/general_pages/More/Health-Page/HealthPage";
function HealthRouter(){
    return(
        <Routes>
            <Route exact path='category/music/foreign' element={<HealthPage/>}/>
        </Routes>
    )
}
export default HealthRouter;