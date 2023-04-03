import {Routes, Route} from "react-router-dom";
import TechNewsPage from '../../../../Pages/general_pages/More/Tech-News-Page/TechNewsPage.js'
function TechNewsRouter(){
    return(
        <Routes>
            <Route exact path='/category/music/mixtape/' element={<TechNewsPage/>}/>
        </Routes>
    )
}
export default TechNewsRouter;