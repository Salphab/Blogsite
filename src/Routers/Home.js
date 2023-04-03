import {Routes,Route} from 'react-router-dom';
import HomePage from '../Pages/general_pages/Main/HomePage';
function Home(){
    return(
        <Routes>
            <Route path='/' element={<HomePage/>}/>
        </Routes>
    )
}
export default Home;