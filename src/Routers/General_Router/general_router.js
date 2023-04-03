import Home from '../Home';
import FooterBundle from '../General_Router/Footer-Router/FooterBundle';
import News from '../General_Router/News/News';
import SportRouter from '../General_Router/Sports-Router/SportsRouter';
import Videos from '../General_Router/Videos/Videos';
import Music from './Music/Music';

function general_router(){
    return(
        <>
            <Home/>
            <FooterBundle/>
            <News/>
            <SportRouter/>
            <Videos/>
            <Music/>
        </>
    )
}
export default general_router;