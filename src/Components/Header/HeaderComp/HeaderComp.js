import {Link} from 'react-router-dom';
import Display from '../../../EventHandler/Display';
import Undisplay from '../../../EventHandler/Undisplay';
import { useRef } from 'react';
import DefaultHeader from './DefaultHeader/DefaultHeader';
function HeaderComp(){
    const url = window.location.href;
    const menu1Ref = useRef('null');
    const home_border = useRef('null');
    const news_border = useRef('null');
    const economy_border = useRef('null');
    const Opinion_border = useRef('null');
    const Sports_border = useRef('null');
    const Business_border = useRef('null');
    const Market_border = useRef('null');
    const More_border = useRef('null');
    const default_border=[
        home_border,news_border,economy_border,Opinion_border,Sports_border,
        Business_border,Market_border,More_border
    ];
    DefaultHeader(url,default_border);
    return(
        <div className="md:bg-black md:h-[70%] md:max-w-[fit-content] md:min-w-[60%] md:ml-[2%] mr-[2%]
                lg:relative lg:w-[100%] lg:max-w-[fit-content] lg:min-w-[70%] lg:ml-[2%] lg:mr-[1%] rounded top-[10%] lg:h-[70%] flex
                xl:relative xl:w-[100%] xl:max-w-[fit-content] xl:min-w-[70%] xl:ml-[1%] xl:mr-[2%] xl:h-[70%]
                2xl:mr-[0%]">
                    <ul  className="md:w-[740px] md:max-w-[100%] relative lg:w-[900px] lg:max-w-[100%] lg:min-w-[70%] lg:mx-[2%] lg:h-[60%] m-auto
                     xl:w-[1100px] xl:max-w-[100%] xl:mx-[2%] 7xl:max-w-[100%] 7xl:min-w-[100%] flex">
                        <Link to='/'className="lg:relative lg:w-[100%] lg:max-w-[fit-content]  h-[80%] flex m-auto mr-[3%]"><li className='lg:text-[13px] text-white font-semibold transition-ease-in-out transition-all font-h-font 2xl:text-[0.9rem] md:text-[0.7rem]' ref={home_border}>HOME</li></Link>
                        <Link to='category/news/' className="lg:relative ml-[10%] mr-[0%] lg:w-[100%] lg:max-w-[13%]  h-[80%] flex m-auto 3xl:max-w-[10%]" onMouseOver={event=> Display(event,'menu0')} onMouseLeave={event=> Undisplay(event,'menu0')}><li className='lg:text-[13px] text-white font-semibold border-white transition-ease-in-out transition-all font-h-font md:text-[0.7rem] 2xl:text-[0.9rem]' ref={news_border}>NEWS
                            <div id='menu0' className='lg:absolute w-[100%] bg-[#F4F9FC] h-[fit-content] hidden z-[1000] mt-[3%] max-w-[165%] md:max-w-[130%] xl:max-w-[150%] 2xl:max-w-[100%] md:max-w-[fit-content]' ref={menu1Ref} onMouseOver={event=> Display(event,'menu0')} onMouseLeave={event=> Undisplay(event,'menu0')}>
                                <ul className='lg:relative w-[100%] bg-white max-w-[100%] h-[100%]'>
                                    <li className='lg: h-[30px] pt-[5%] text-sm text-black pb-[10px] pl-[10px] hover:bg-black hover:text-white font-light border-black pb-[2%]'><Link to='/category/techs'>Techs</Link></li>
                                    <li className='lg: h-[30px] pt-[5%] text-sm text-black  pl-[10px] hover:bg-black hover:text-white font-light border-black pb-[2%]'><Link to='/category/Entertainment/'>Entertainment</Link></li>
                                    <li className='lg: h-[30px] pt-[5%] text-sm text-black  pl-[10px] hover:bg-black hover:text-white font-light border-black pb-[2%]'><Link to='/category/politics'>Politics </Link></li>
                                    <li className='lg: h-[30px] pt-[5%] text-sm text-black  pl-[10px] hover:bg-black hover:text-white font-light border-black pb-[2%]'><Link to='/category/car_trends'>Car Trends</Link></li>
                                    <li className='lg: h-[30px] pt-[5%] text-sm text-black pl-[10px] hover:bg-black hover:text-white font-light '><Link to='/category/education'>Education</Link></li>
                                    <li className='lg: h-[30px] pt-[5%] text-sm text-black pl-[10px] hover:bg-black hover:text-white font-light '><Link to='/category/health'>Health</Link></li>
                                </ul>
                            </div>
                        </li><i className='bx bx-chevron-down lg:relative top-[5%] text-[1.3rem] text-white md:text-[0.9rem]'></i></Link>
                        <Link to='/sports/' className="lg:relative lg:w-[100%] ml-[4%] mr-[5%] lg:max-w-[13%]  h-[80%]  flex m-auto text-black 3xl:mt-[0.5%]" onMouseOver={event=> Display(event,'menu2')} onMouseLeave={event=> Undisplay(event,'menu2')}><li className='lg:text-[13px] text-white font-semibold font-semibold border-[#37F713] transition-ease-in-out transition-all mr-[3px] hover:border-[#37F713] font-h-font md:text-[0.7rem]' ref={Sports_border}>VIDEOS
                            <div id='menu2' className='lg:absolute w-[100%] bg-[#F4F9FC] h-[fit-content] hidden z-[1000] mt-[3%] max-w-[165%] md:max-w-[130%] xl:max-w-[150%] 2xl:max-w-[100%] md:max-w-[fit-content]' ref={menu1Ref} onMouseOver={event=> Display(event,'menu2')} onMouseLeave={event=> Undisplay(event,'menu2')}>
                            <ul className='lg:relative w-[100%] bg-white max-w-[100%] h-[100%]'>
                                    <li className='lg:relative h-[30px] pl-[10%] hover:text-white hover:bg-black pt-[5%] text-sm text-black pb-[3px] pl-[10%] font-light border-black pb-[2%]'><Link to='/category/hollywood'>Hollyhood</Link></li>
                                    <li className='lg:relative h-[30px] pl-[10%] hover:text-white hover:bg-black pt-[5%] text-sm text-black pl-[10%] font-light pb-[2%]'><Link to='/category/series'>Series</Link></li>
                                    <li className='lg:relative h-[30px] pl-[10%] hover:text-white hover:bg-black pt-[5%] text-sm text-black pl-[10%] font-light border-black pb-[2%]'><Link to='/category/nollywood'>Nollywood</Link></li>
                                    <li className='lg:relative h-[30px] pl-[10%] hover:text-white hover:bg-black pt-[5%] text-sm text-black pl-[10%] font-light pb-[2%]'><Link to='/category/korean'>Korean</Link></li>
                                    <li className='lg:relative h-[30px] pl-[10%] hover:text-white hover:bg-black pt-[5%] text-sm text-black pl-[10%] font-light pb-[2%]'><Link to='/category/chinese'>Chinese</Link></li>
                                    <li className='lg:relative h-[30px] pl-[10%] hover:text-white hover:bg-black pt-[5%] text-sm text-black pl-[10%] font-light pb-[2%]'><Link to='/category/india'>India</Link></li>
                                    <li className='lg:relative h-[30px] pl-[10%] hover:text-white hover:bg-black pt-[5%] text-sm text-black pl-[10%] font-light pb-[2%]'><Link to='/category/wrestling'>Wrestling</Link></li>
                                </ul>
                            </div>
                        </li><i className='bx bx-chevron-down lg:relative top-[5%] text-[1.3rem] text-white md:text-[0.9rem]'></i></Link>
                        <Link to='/market/' className="lg:relative lg:w-[100%] ml-[2%] mr-[2%] lg:max-w-[13%]  h-[80%]  flex m-auto text-black 3xl:mt-[0.5%]" onMouseOver={event=> Display(event,'menu3')} onMouseLeave={event=> Undisplay(event,'menu3')}><li className='lg:text-[13px] text-white font-semibold transition-ease-in-out transition-all mr-[3px] hover:border-[orange] font-h-font 2xl:text-[0.9rem] md:text-[0.7rem]' ref={Market_border}>MUSICS
                                <div id='menu3' className='lg:absolute w-[100%] bg-[#F4F9FC] h-[fit-content] hidden z-[1000] mt-[3%] max-w-[165%] md:max-w-[130%] xl:max-w-[150%] 2xl:max-w-[100%] md:max-w-[fit-content]' ref={menu1Ref} onMouseOver={event=> Display(event,'menu3')} onMouseLeave={event=> Undisplay(event,'menu3')}>
                                    <ul className='lg:relative w-[100%] bg-[#F4F9FC] max-w-[inherit] h-[100%]'>
                                        <li className='lg:relative pt-[5%] text-sm text-black pb-[3px] pl-[10%] h-[30px] hover:bg-black hover:text-white font-light border-[#B7D5F7] pb-[2%]'><Link to='/category/music/hip_hop'>Hip-Hop</Link></li>
                                        <li className='lg:relative pt-[5%] text-sm text-black mt-[3px] pl-[10%] h-[30px] hover:bg-black hover:text-white font-light border-[#B7D5F7] pb-[2%]'><Link to='/category/music/foreign'>Foreign</Link></li>
                                        <li className='lg:relative pt-[5%] text-sm text-black mt-[3px] pl-[10%] h-[30px] hover:bg-black hover:text-white font-light border-[#B7D5F7] pb-[2%]'><Link to='/category/music/mixtape'>Mixtape</Link></li>
                                    </ul>
                                </div>
                            </li><i className='bx bx-chevron-down lg:relative top-[5%] text-[1.3rem] text-white md:text-[0.9rem]'></i></Link>
                        <Link to='/category/sports' className="lg:relative lg:w-[100%] ml-[2%] mr-[2%] lg:max-w-[13%]  h-[80%]  flex m-auto text-black 3xl:mt-[0.5%]" onMouseOver={event=> Display(event,'menu4')} onMouseLeave={event=> Undisplay(event,'menu4')}><li className='lg:text-[13px] text-white font-semibold border-[pink] transition-ease-in-out transition-all hover:border-t-[2px] mr-[3px] hover:border-[pink] font-h-font 2xl:text-[0.9rem] md:text-[0.7rem]' ref={More_border}>SPORTS
                                <div id='menu4' className='lg:absolute w-[100%] bg-white h-[fit-content] hidden z-[1000] mt-[3%] max-w-[165%] md:max-w-[130%] xl:max-w-[150%] 2xl:max-w-[100%] md:max-w-[fit-content]' ref={menu1Ref} onMouseOver={event=> Display(event,'menu4')} onMouseLeave={event=> Undisplay(event,'menu4')}>
                                    <ul className='lg:relative w-[100%] bg-[#F4F9FC] max-w-[inherit] h-[100%]'>
                                        <li className='lg:relative pl-[10%] pt-[5%] h-[30px] text-sm text-black pb-[3px] hover:text-white hover:bg-black font-light border-[#B7D5F7] pb-[2%]'><Link to='/category/sports/football/'>Football</Link></li>
                                        <li className='lg:relative pl-[10%] pt-[5%] h-[30px] text-sm text-black mt-[3px] hover:text-white hover:bg-black font-light border-[#B7D5F7] pb-[2%]'><Link to='/category/sports/basketball/'>Basketball</Link></li>
                                        <li className='lg:relative pl-[10%] pt-[5%] h-[30px] text-sm text-black mt-[3px] hover:text-white hover:bg-black font-light border-[#B7D5F7] pb-[2%]'><Link to='/category/sports/tennis/'>Tennis</Link></li>
                                   </ul>
                                </div>
                        <i className='bx bx-chevron-down lg:relative top-[15%] text-[1.3rem] text-white md:text-[0.9rem] 3xl:top-[0%]'></i></li></Link>
                    </ul>
            </div>
    )
}
export default HeaderComp;