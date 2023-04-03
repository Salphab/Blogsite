import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
function Category(props){
    const [isLoading, setLoading] = useState(false);
    const [payloads,setPayloads] = useState('');
    const url = props.url;

    useEffect(()=>{
        axios.get(url)
        .then((data)=>{
            setPayloads(data.data.slice(0,4));
            setLoading(true);
        })
    },[])
        
    if (!isLoading) {
            return <div className="App">Loading...</div>;
          }

    return(
        <section className='lg:relative w-[100%] block max-w-[50%] mr-[1.5%] mt-[2%] border-r-[2px] h-[100%] '>
            <div className="lg:relative w-[100%] flex max-w-[100%]">
                <p className="md:text-[1.2rem] relative font-h-font p-[1%] text-[1.3rem] mt-[1%] font-semibold mb-[2%] 2xl:text-[1.3rem]">
                    {props.title}
                </p>
                <Link to={props.extension} className="lg:relative font-light w-[100%] max-w-[fit-content] h-[fit-content]  m-auto mr-[5%] ">
                    <p className="lg:relative font-h-font text-sm 2xl:text-[1rem]">
                        See more
                    </p>
                </Link>
            </div>
            <div className="lg:relative grid grid-cols-2 p-[1%] w-[100%] block max-w-[100%] h-[80%] 2xl:h-[90%]">
            {payloads.map((data)=>{
                    return(
                        <Link className="lg:relative flex w-[100%] max-w-[100%] h-[90%]">
                            <img className="lg:relative md:h-[70%] rounded w-[100%] max-w-[40%] lg:h-[130px] xl:max-w-[45%]" src={data.urlToImage} alt='credit'/>
                            <div className="lg:relative w-[100%] block max-w-[100%] h-[100%]">
                                <h1 className="lg:relative md:leading-[18px] md:text-[.9rem] ml-[3%] w-[100%] max-w-[90%] break-word leading-[20px] font-bold font-h-font lg:text-[14px] xl:text-[.95rem]">{data.title}</h1>
                                <p className="relative md:text-[0.7rem] ml-[3%] border-l-[3px] border-blue-300 font-h-font  pl-[2%] text-[13px] mt-[3%] ">{data.publishedAt}</p>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}
export default Category;