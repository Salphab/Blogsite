import {Link} from 'react-router-dom';

function SpotLight({info}){
    return(
        <>
            <section className="sm:max-w-[95%] sm:m-auto md:max-w-[95%] md:m-auto md:mb-[5%] md2:mb-[0%] md3:mb-[0%] lg:mb-[0%] lg:relative w-[100%] mr-[1%] max-w-[60%] ml-[1%] h-[700px] 6xl:h-[90vh] 7xl:h-[70vh]">
                <div className='lg:relative w-[100%] block max-w-[100%] h-[80%]'>
                    <Link to='/news/sample'>
                        <img src={info.imgsrc} alt='missing' className='relative rounded lg:w-[100%] lg:max-w-[100%] lg:h-[74%] xl:p-[1%] xl:w-[100%] xl:max-w-[100%]'/>
                        <h1 className='relative sm:text-[1.5rem] lg:text-[1.7rem] mb-[2%] mt-[1%] leading-[35px] hover:underline pr-[2%] lg:ml-[1%] font-bold xl:ml-[2%] md:text-[1.7rem] xl:text-[2rem] xl:font-h-font 2xl:text-[2rem]'>{info.headline}</h1>
                        <h2 className='lg:relative ml-[1%] mb-[2%] mr-[3%] lg:text-[0.9rem] text-gray-500 xl:text-[1rem] xl:ml-[2%] font-body-font 2xl:text-[1.1rem]'>{info.summary}</h2>
                        <p className='lg:relative text-[13px] pl-[1%] ml-[1%] border-l-[3px] border-blue-300 xl:ml-[2%] xl:text-[14px] 2xl:text-[1rem]'>{info.date}</p>
                    </Link>
                </div>
            </section>
        </>
    )
}
export default SpotLight;