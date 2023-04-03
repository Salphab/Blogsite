import { Link } from "react-router-dom";
function Socialmedia(){
    return(
        <section className="lg:relative w-[100%] max-w-[35%] border-r-[1px] block h-[100%]">
            <h1 className="lg:relative text-black font-semibold w-[100%] max-w-[fit-content] ml-[2%] mb-[3%] pb-[1%] md:text-[1rem] lg:text-[1.2rem] border-b-[2px] border-[black] font-h-font 2xl:text-[1.3rem]">Social Media</h1>
            <div className='lg:relative w-[100%] h-[85%] max-w-[100%] flex'>
            <div className="lg:relative w-[100%] block max-w-[45%] h-[100%]">
                <Link to='' className="lg:relative flex mr-[5%] h-[10%] w-[100%] font-h-font max-w-[fit-content] mt-[1%]"><i className='bx bxl-facebook text-lg h-[100%] text-blue-500  pl-[1.5%] mt-[2%] rounded-[50%] 2xl:text-[1.5rem]' ></i><p className='lg:relative text-sm h-[70%] mt-[6%] ml-[14%] text-black 2xl:text-[1rem]'>Facebook</p></Link>
                <Link to='' className="lg:relative flex mr-[5%] h-[10%] w-[100%] font-h-font max-w-[fit-content] mt-[5%]"><i className='bx bxl-twitter text-lg h-[100%] text-blue-500 pl-[1.5%] mt-[2%] rounded-[50%] 2xl:text-[1.5rem]' ></i><p className='lg:relative text-sm h-[70%] mt-[7%] ml-[14%] text-black 2xl:text-[1rem]'>Twitter</p></Link>
                <Link to='' className="lg:relative flex mr-[5%] h-[10%] w-[100%] font-h-font max-w-[fit-content] mt-[5%]"><i className='bx bxl-youtube text-xl h-[100%]  pl-[1.5%] mt-[2%] text-red-500 2xl:text-[1.5rem]' ></i><p className='lg:relative text-sm h-[70%] mt-[4%] ml-[14%] text-black 2xl:text-[1rem]'>Youtube</p></Link>
                <Link to='' className="lg:relative flex mr-[5%] h-[10%] w-[100%] font-h-font max-w-[fit-content] mt-[5%]"><i className='bx bxl-linkedin-square text-xl h-[100%]  pl-[1.5%] mt-[2%] text-blue-600 2xl:text-[1.5rem]' ></i><p className='lg:relative text-sm h-[70%] mt-[4%] ml-[14%] text-black 2xl:text-[1rem]'>Linkedin</p></Link>
                <Link to='' className="lg:relative flex mr-[5%] h-[10%] w-[100%] font-h-font max-w-[fit-content] mt-[5%]"><i className='bx bxl-instagram text-xl h-[100%]  pl-[1.5%] mt-[2%] text-red-600 2xl:text-[1.5rem]' ></i><p className='lg:relative text-sm h-[70%] mt-[4%] ml-[14%] text-black 2xl:text-[1rem]'>Instagram</p></Link>
            </div>
            <div className="lg:relative w-[100%] block max-w-[55%] mr-[3%] h-[100%]">
                <address className='lg:relative w-[100%] mt-[5%] max-w-[fit-content] mb-[10%] text-[12px] 2xl:text-[.9rem]'>NO 102 Nnamdi Azikwe Wuse phase II</address>
                <a href="mailto:help.example@organization.com" ><p className='lg:relative w-[100%] mb-[5px] max-w-[fit-content] text-[13px] 2xl:text-[.9rem]'>info@example.com</p></a><br/>
                <a href="tel:+2348032645980" className='lg:relative w-[100%] max-w-[100%] text-[13px] 2xl:text-[.9rem]'>+2348000001000</a>
            </div>
            </div>
        </section>
    )
}
export default Socialmedia;