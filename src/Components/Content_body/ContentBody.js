
import Axios from '../../Axios/Axios-3-withid';
import {useState} from 'react';
import JustIn from '../Just-In/JustIn';
function ContentBody(props){
    const [payloads,setPayloads] = useState('');
    const [isLoading,setisLoading] = useState(false);
    const url = props.url;
    Axios(url,setPayloads,setisLoading);
    console.log(payloads);
    const Top_Headings = payloads;
    if(!isLoading){
        return(
            <h1>...is Loading</h1>
        )
    }
    return(
        <section className="lg:relative w-[100%] flex md:max-w-[100%] lg:max-w-[80%] m-auto h-[fit-content]">
            <div className="lg:relative w-[100%] md:bg-white md:max-w-[90%] lg:max-w-[70%] mt-[1%] h-[fit-content] block m-auto">
                <h3 className='lg:relative text-gray-600 mt-[5%]'>{Top_Headings.author}</h3>
                <h2 className="lg:relative mt-[2%] font-bold leading-[130%] font-h-font md:text-[2rem] lg:text-[2.2rem] xl:text-[2.5rem]">{Top_Headings.title}</h2>
                <p className='lg:relative text-gray-500 mt-[2%] md:text-[1.2rem] font-body-font lg:text-[1.1rem] xl:text-[1.1rem]'>{Top_Headings.description}</p>
                <div className='lg:relative w-[100%] flex max-w-[100%] h-[40px] mt-[2%]'>
                    <p className='lg:relative w-[100%] max-w-[60%] text-gray-500 md:text-[1rem] h-[fit-content] border-l-[5px] border-blue-300 pl-[1%] lg:text-[1rem] xl:text-[1rem] mt-[1%]'>{Top_Headings.publishedAt}</p>
                    <div className='lg:relative w-[100%] max-w-[40%] flex ml-[40%]'>
                    <div className=" lg:relative mr-[8%] mt-[2%] fb-share-button" data-href="https://guardian.ng/news/drama-as-observers-obasanjo-abdulsalami-query-elections/" data-layout="" data-size="">
                        <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fguardian.ng%2Fnews%2Fdrama-as-observers-obasanjo-abdulsalami-query-elections%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">
                            <i className='lg:relative text-blue-600 text-3xl bx bxl-facebook-circle'></i>
                        </a>
                    </div>
                    <a className="lg:relative mr-[8%] mt-[2%] twitter-share-button" href="https://twitter.com/intent/tweet?url=https://guardian.ng/news/drama-as-observers-obasanjo-abdulsalami-query-elections/" data-size="large">
                        <i className='lg:relative text-[#03A9F4] text-3xl bx bxl-twitter'></i>
                    </a>
                    
                    <a className='lg:relative mr-[8%] mt-[2%]' href="https://wa.me/?text=https://guardian.ng/news/drama-as-observers-obasanjo-abdulsalami-query-elections/">
                        <i className='lg:relative text-green-600 text-3xl bx bxl-whatsapp'></i>
                    </a>                               
                       
                    <a className='lg:relative mr-[8%]' href='https://telegram.me/share/url?url=https://guardian.ng/news/drama-as-observers-obasanjo-abdulsalami-query-elections/&text=<TEXT>' className='lg:relative mr-[8%] mt-[2%] w-[100%] max-w-[fit-content] '>
                       <i className='lg:relative text-[#009CE6] text-3xl bx bxl-telegram'></i>
                    </a>


                        <a className='lg:relative mr-[8%]' href='https://www.linkedin.com/sharing/share-offsite/?url=https://guardian.ng/news/drama-as-observers-obasanjo-abdulsalami-query-elections/' className='lg:relative mr-[8%] mt-[2%] w-[100%] max-w-[fit-content] '>
                            <i className='lg:relative text-[#0073B1] text-3xl bx bxl-linkedin-square'></i>
                        </a>
                    </div>
                </div>
                <img className='lg:relative w-[100%] mb-[5%] max-w-[100%] mt-[4%]' src={Top_Headings.urlToImage} alt='media'/>
                <div className="lg:relative w-[100%] max-w-[100%] md:text-[1.1rem] font-body-font lg:text-[1.1rem] xl:text-[1.1rem] prose" dangerouslySetInnerHTML={{__html:Top_Headings.content}}/>
                
            </div>
            <div className="lg:relative w-[100%] md:hidden lg:block lg:max-w-[25%] lg:sticky mt-[9%] h-[900px]">
                    <JustIn />
            </div>
        </section>
    )
}
export default ContentBody;