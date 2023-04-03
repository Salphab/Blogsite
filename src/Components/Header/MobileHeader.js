import { useRef } from "react";
import { Link } from "react-router-dom";
function MobileHeader(){
    const CatBar = useRef('null');
    const CancelBtn = useRef('null');
    const CatBtn = useRef('null');
     return(
       <section className="relative block w-[100%] max-w-[100%] md:hidden">
            <div className="sm:relative sm:w-[100%] sm:flex sm:max-w-[100%] sm:h-[100%] md:hidden">
                <button ref={CatBtn} className="sm:relative sm:h-[fit-content] sm:ml-[2%] sm:mr-[2%] sm:mt-[1%] md:hidden" onClick={(e)=>{
                    e.preventDefault();
                    CatBtn.current.style.display = 'none';
                    CancelBtn.current.style.display = 'block'
                    if(CatBar.current.style.display === ''){
                        CatBar.current.style.display = 'block';
                    }
                }}>
                    <i className='bx bx-menu sm:text-[2rem] sm:m-auto'></i>
                </button>
                <button className="sm:relative hidden sm:h-[fit-content] sm:ml-[2%] sm:mr-[2%] sm:mt-[1%] md:hidden" onClick={(e)=>{
                    CancelBtn.current.style.display = 'none'
                    CatBtn.current.style.display = 'block';
                   if(CatBar.current.style.display === 'block'){
                     CatBar.current.style.display = ''
                   }
                   
                }} ref={CancelBtn}>
                    <i className='bx bx-x sm:text-[2.5rem] sm:m-auto'></i>
                </button>
                <div className="sm:relative sm:w-[100%] sm:max-w-[60%] sm:min-w-[50%] sm:m-auto sm:h-[80%] border-[1px]">

                </div>
            </div>
            <div className="absolutev block sm:hidden md:hidden sticky h-[100vh] z-50 bg-white w-[100%] max-w-[50%] transition-all ease-in-out" ref={CatBar}>
                <ul className="relative w-[100%] max-w-[95%] h-[85%] top- m-auto border-t-[2px]">
                    <div className='relative w-[100%] max-w-[100%] mt-[4%] flex'>
                        <Link to='/' className="relative w-[100%] max-w-[80%] m-auto mt-[6%] mb-[10%] text-[1.3rem] font-semibold"><li>Home</li></Link>
                    </div>
                    <div className='relative flex w-[100%] max-w-[100%] flex'>
                        <Link to='/news' className="relative w-[100%] max-w-[75%] m-auto mb-[8%] text-[1.3rem] font-semibold"><li>News</li></Link>
                        <i class='bx bx-chevron-down'></i>
                    </div>
                    <div className='relative flex w-[100%] max-w-[100%] flex'>
                        <Link to='/economy' className="relative w-[100%] max-w-[80%] m-auto mb-[8%] text-[1.3rem] font-semibold"><li>Economy</li></Link>
                    </div>
                    <div className='relative flex w-[100%] max-w-[100%] flex'>
                        <Link to='/opinion' className="relative w-[100%] max-w-[80%] m-auto mb-[8%] text-[1.3rem] font-semibold"><li>Opinion</li></Link>
                    </div>
                    <div className='relative flex w-[100%] max-w-[100%] flex'>
                        <Link to='/business' className="relative w-[100%] max-w-[80%] m-auto mb-[8%] text-[1.3rem] font-semibold"><li>Business</li></Link>
                    </div>
                    <div className='relative flex w-[100%] max-w-[100%] flex'>
                        <Link to='/sports' className="relative w-[100%] max-w-[75%] m-auto mb-[8%] text-[1.3rem] font-semibold"><li>Sports</li></Link>
                        <i class='bx bx-chevron-down'></i>
                    </div>
                    <div className='relative flex w-[100%] max-w-[100%] flex'>
                        <Link to='/sports' className="relative w-[100%] max-w-[75%] m-auto mb-[8%] text-[1.3rem] font-semibold"><li>Market</li></Link>
                        <i class='bx bx-chevron-down'></i>
                    </div>
                    <div className='relative flex w-[100%] max-w-[100%] flex'>
                        <Link to='/sports' className="relative w-[100%] max-w-[75%] m-auto mb-[8%] text-[1.3rem] font-semibold"><li>More</li></Link>
                        <i class='bx bx-chevron-down'></i>
                    </div>
                </ul>
            </div>
       </section>
     )
}
export default MobileHeader;