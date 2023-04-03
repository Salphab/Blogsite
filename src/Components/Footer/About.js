import {Link} from 'react-router-dom';
function About(){
    return(
        <section className="lg:relative w-[100%] block md:max-w-[25%] lg:max-w-[30%] mr-[1%] h-[100%] border-r-[1px]">
            <h1 className="lg:relative text-black font-semibold ml-[2%] w-[100%] max-w-[fit-content] mb-[3%] pb-[1%] md:text-[1rem] lg:text-[1.2rem] border-b-[2px] font-h-font border-black 2xl:text-[1.3rem]">About Our Company</h1>
            <ul>
                <li className='lg:relative text-black border-[black] text-sm w-[100%] max-w-[fit-content] mb-[3%] ml-[3%] font-light font-h-font hover:border-b-[1px] 2xl:text-[1rem]'><Link to='/'>Home</Link></li>
                <li className='lg:relative text-black border-[black] text-sm w-[100%] max-w-[fit-content] mb-[3%] ml-[3%] font-light font-h-font hover:border-b-[1px] 2xl:text-[1rem]'><Link to='/about'>About US</Link></li>
                <li className='lg:relative text-black border-[black] text-sm w-[100%] max-w-[fit-content] mb-[3%] ml-[3%] font-light font-h-font hover:border-b-[1px] 2xl:text-[1rem]'><Link to='/contact'>Contact Us</Link></li>
                <li className='lg:relative text-black border-[black] text-sm w-[100%] max-w-[fit-content] mb-[3%] ml-[3%] font-light font-h-font hover:border-b-[1px] 2xl:text-[1rem]'><Link to='/authors'>Our Authors</Link></li>
                <li className='lg:relative text-black border-[black] text-sm w-[100%] max-w-[fit-content] mb-[3%] ml-[3%] font-light font-h-font hover:border-b-[1px] 2xl:text-[1rem]'><Link to='/privacy-policies'>Privacy Policies</Link></li>
                <li className='lg:relative text-black border-[black] text-sm w-[100%] max-w-[fit-content] mb-[3%] ml-[3%] font-light font-h-font hover:border-b-[1px] 2xl:text-[1rem]'><Link to='/terms-of-use'>Terms of use</Link></li>
                <li className='lg:relative text-black border-[black] text-sm w-[100%] max-w-[fit-content] mb-[3%] ml-[3%] font-light font-h-font hover:border-b-[1px] 2xl:text-[1rem]'><Link to='/code-of-ethics'>Code of ethics</Link></li>
                <li className='lg:relative text-black border-[black] text-sm w-[100%] max-w-[fit-content] mb-[3%] ml-[3%] font-light font-h-font hover:border-b-[1px] 2xl:text-[1rem]'><Link to='/work-with-us'>Work with us</Link></li>
            </ul>
        </section>
    )
}
export default About;