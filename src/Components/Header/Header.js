import HeaderComp from "./HeaderComp/HeaderComp";
import HeaderLogo from "./HeaderComp/HeaderLogo";
import MobileHeader from "./MobileHeader";
function Header(){
    const date = new Date();
    const day = date.getDay();
    const dayNO =  date.getDate();
    var dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const month = date.getMonth();
    const year = date.getFullYear();
    const monthName = ['January','February','March','April','May','June','July','August','September','October','Novmember','December'];
    return(
        <section className="sticky border-b-[3px] z-[9999] w-[100%] top-[0%] sm:flex md:block max-w-[100%] bg-white sm:h-[60px] md:h-[120px] ">
            <div className="lg:relative sm:hidden md:flex w-[100%] max-w-[100%] h-[40%] xl:w-[100%] xl:max-w-[93%] xl:m-auto 2xl:max-w-[70%] 3xl:max-w-[76%] 3xl:min-w-[76%] 4xl:max-w-[67%] 4xl:min-w-[67%] 5xl:max-w-[55%] 5xl:min-w-[55%] 6xl:max-w-[50%] 6xl:min-w-[50%] 7xl:max-w-[42%] 7xl:min-w-[42%]">
                <p className="lg:relative md:h-[fit-content] md:ml-[53%] xl:ml-[66%] md:text-md md:mt-[1%] lg:w-[100%] lg:max-w-[fit-content] lg:h-[60%] lg:m-auto lg:text-lg xl:text-lg 2xl:text-lg 3xl:text-lg 4xl:text-lg 5xl:text-lg 6xl:text-lg 7xl:text-lg lg:ml-[60%] lg:mt-[1%] text-gray-600 xl:w-[100%] xl:max-w-[fit-content] xl:mt-[1%] font-h-font xl:ml-[68%] xl:h-[60%] xl:m-auto 3xl:ml-[64%] 3xl:mt-[1%] 6xl:mt-[0.5%]">{dayName[day]} {dayNO}, {monthName[month]} {year} &nbsp; &nbsp; &nbsp; | &nbsp;</p>
                <div className="lg:relative flex md:h-[fit-content] md:w-[100%] md:max-w-[14%] md:ml-[4%] md:mr-[3%] lg:w-[100%] lg:h-[fit-content] lg:m-auto lg:max-w-[16%] lg:mr-[2%] xl:w-[100%] xl:max-w-[14%] xl:mr-[0%] xl:m-auto xl:h-[fit-content] ">
                    <a className='lg:relative mt-[3%] ml-[5%]' href="https://www.google.com/">
                        <i className='lg:relative text-gray-600 text-2xl md:text-[1.2rem] lg:text-2xl xl:text-2xl 2xl:text-2xl 3xl:text-2xl 4xl:text-2xl 5xl:text-2xl 6xl:text-2xl 7xl:text-2xl bx bxl-facebook-circle'></i>
                    </a>
                    <a className='lg:relative mt-[3%] ml-[5%]' href="https://www.google.com/">
                        <i className='lg:relative text-gray-600 text-2xl md:text-[1.2rem] lg:text-2xl xl:text-2xl 2xl:text-2xl 3xl:text-2xl 4xl:text-2xl 5xl:text-2xl 6xl:text-2xl 7xl:text-2xl bx bxl-twitter'></i>
                    </a>
                    <a className='lg:relative mt-[3%] ml-[5%]' href="https://www.google.com/">
                        <i className='lg:relative text-2xl md:text-[1.2rem] lg:text-2xl xl:text-2xl 2xl:text-2xl 3xl:text-2xl 4xl:text-2xl 5xl:text-2xl 6xl:text-2xl 7xl:text-2xl md:text-[1rem] text-gray-600 bx bxl-instagram-alt'></i>
                    </a>
                    <a className='lg:relative mt-[3%] ml-[5%]' href="https://www.google.com/">
                        <i className='lg:relative text-2xl md:text-[1.2rem] lg:text-2xl xl:text-2xl 2xl:text-2xl 3xl:text-2xl 4xl:text-2xl 5xl:text-2xl 6xl:text-2xl 7xl:text-2xl text-gray-600 bx bxl-linkedin'></i>
                    </a>
                    <a className='lg:relative mt-[3%] ml-[5%]' href="https://www.google.com/">
                        <i className='lg:relative text-2xl md:text-[1.2rem] lg:text-2xl xl:text-2xl 2xl:text-2xl 3xl:text-2xl 4xl:text-2xl 5xl:text-2xl 6xl:text-2xl 7xl:text-2xl text-gray-600 bx bxl-telegram'></i>
                    </a>
                </div>
            </div>
            <div className="lg:relative sm:hidden md:flex lg:w-[100vw] bg-black lg:max-w-[100%] h-[60%] xl:w-[100%] xl:max-w-[100%] xl:m-auto 2xl:max-w-[70%] 3xl:max-w-[80%] 3xl:min-w-[80%] 4xl:max-w-[67%] 4xl:min-w-[67%] 5xl:max-w-[55%] 5xl:min-w-[55%] 6xl:max-w-[50%] 6xl:min-w-[50%] 7xl:max-w-[40%] 7xl:min-w-[40%]">
                <HeaderLogo/>
                <HeaderComp/>
            </div>
            <MobileHeader/>
        </section>
    )
}
export default Header;