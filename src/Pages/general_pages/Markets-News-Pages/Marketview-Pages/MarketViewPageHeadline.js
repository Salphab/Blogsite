import {Link} from 'react-router-dom';
import Axios from '../../../Axios/Axios-2';
import {useState} from 'react';
function MarketViewPageHeadline(){
    const [payloads,setPayloads] = useState('');
    const [isLoading,setisLoading] = useState(false);
    const url = 'http://localhost:5000/news/markets/market-view';
    Axios(url,setPayloads,setisLoading);
    console.log(payloads);
    const Top_Headings = payloads.slice(4,7);
    if(!isLoading){
        return(
            <h1>...is Loading</h1>
        )
    }
    return(
        <section className="lg:relative lg:flex mb-[1%] md:block w-[100%] max-w-[92%] xl:max-w-[85%] m-auto mt-[2%] h-[fit-content]">
        <Link to='' className="lg:relative w-[100%] md:h-[600px] block max-w-[45%] md:max-w-[100%] md:h-[900px] mr-[0.5%] h-[fit-conent]">
            <img className='lg:relative rounded w-[100%] max-w-[100%] md:h-[62%] lg:h-[50%] mb-[2%]' src={payloads[0].urlToImage} alt='credits'/>
            <h1 className='lg:relative w-[100%] max-w-[90%] lg:max-w-[100%] font-semibold text-[1.4rem] xl:text-3xl mb-[2%] hover:underline leading-[35px] md:ml-[1%] ml-[3%]'>{payloads[0].title}</h1>
            <h2 className='lg:relative ml-[3%] leading-6 md:text-[0.9rem] lg:text-[0.9rem] xl:text-[1.1rem] mt-[1%] md:ml-[1%]'>{payloads[0].description}</h2>
            <p className='lg:relative text-[13px] pl-[1%] border-blue-500 border-l-[3px] text-gray-500 md:ml-[1%] ml-[3%] mt-[4%]'>{payloads[0].publishedAt}</p>
        </Link>
        <div className="lg:relative block w-[100%] max-w-[49%] md:max-w-[75%] ml-[0.5%] h-[100%]">
                {Top_Headings.map((data)=>{
                    return(
                    <Link className='lg:relative flex w-[100%] max-w-[95%] border-b-[1px] m-auto mb-[3%] h-[fit-content]'>
                        <img className='lg:relative rounded mr-[2%] w-[100%] max-w-[35%] h-[90%]' src={data.urlToImage} alt='credit'/>
                        <div className='lg:relative block w-[100%] max-w-[65%]'>
                            <h1 className='lg:relative text-[1.2rem] xl:text-[1.5rem] hover:underline mb-[1%] font-semibold leading-[25px]'>{data.title}</h1>
                            <h2 className='lg:relative leading-2 md:text-[0.9rem] lg:text-[0.9rem] xl:text-[1.1rem] mb-[2%]'>{data.description}</h2>
                            <p className='lg:relative text-[13px] mb-[2%] pl-[1%] border-blue-500 border-l-[3px] text-gray-500'>{data.publishedAt}</p>
                        </div>
                    </Link>)
                })}
        </div>
    </section>
    )
}
export default MarketViewPageHeadline;