import {Link} from 'react-router-dom';
import {useState} from 'react';
function PageSubBody(props){
    const [postExtend,setPostExtend] =  useState(7);
    const body = props.data.slice(5,postExtend);
    
    return(
        <div className="lg:relative block w-[100%] xl:max-w-[70%] max-w-[72%] mr-[1%] h-[fit-content]">
            {body.map((data)=>{
                        return(
                        <Link className='lg:relative flex w-[100%] max-w-[95%] border-b-[1px] m-auto mb-[3%] h-[fit-content]'>
                            <div className='lg:relative mt-[1%] block w-[100%] max-w-[65%]'>
                                <h1 className='lg:relative text-[1.6rem] md:text-[1.3rem] xl:text-2xl hover:underline mb-[1%] font-semibold leading-[25px]'>{data.title}</h1>
                                <h2 className='lg:relative mt-[2%] md:text-[.9rem] lg:text-[.9rem] xl:text-[1.1rem] mb-[4%]'>{data.description}</h2>
                                <p className='lg:relative text-[13px] pl-[1%] border-blue-500 border-l-[3px] md:mb-[3%] md:mt-[-2%] text-gray-500'>{data.publishedAt}</p>
                            </div>
                            <img className='lg:relative mt-[1%] ml-[2%] w-[100%] max-w-[35%] xl:mb-[2%] h-[90%]' src={data.urlToImage} alt='credit'/>
                        </Link>)
            })}
            <div className='lg:relative block w-[100%] max-w-[100%] h-[100px]'>
                <button onClick={(e)=>{
                    e.preventDefault();
                    setPostExtend(postExtend + 2);
                }} className='lg:relative w-[100%] ml-[40%] max-w-[20%] h-[50px] md:h-[30px] lg:h-[35px] xl:h-[35px] bg-black text-white md:text-[.9rem] lg:text-[.9rem] xl:text-[.9rem] text-[1.2rem] font-semibold mt-[2%]'>Read More</button>
            </div>
        </div>
    )
}
export default PageSubBody;