import {Routes,Route} from 'react-router-dom';
import AboutPage from '../../../Pages/general_pages/Footers-Pages/AboutPage';
import ContactPage from '../../../Pages/general_pages/Footers-Pages/ContactPage';
import AuthorsPage from '../../../Pages/general_pages/Footers-Pages/AuthorsPage';
import PrivacyPage from '../../../Pages/general_pages/Footers-Pages/PrivacyPage';
import TermsPage from '../../../Pages/general_pages/Footers-Pages/TermsPage';
import EthicsPage from '../../../Pages/general_pages/Footers-Pages/EthicsPage';
import WorkPage from '../../../Pages/general_pages/Footers-Pages/WorkPage';
function FooterBundle(){
    return(
        <Routes>
            <Route exact path='/about' element={<AboutPage/>}/>
            <Route exact path='/contact' element={<ContactPage/>}/>
            <Route exact path='/authors' element={<AuthorsPage/>}/>
            <Route exact path='/privacy-policies' element={<PrivacyPage/>}/>
            <Route exact path='/terms-of-use' element={<TermsPage/>}/>
            <Route exact path='/code-of-ethics' element={<EthicsPage/>}/>
            <Route exact path='/work-with-us' element={<WorkPage/>}/>
        </Routes>
    )
}
export default FooterBundle;