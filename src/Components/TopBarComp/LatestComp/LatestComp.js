import { Link } from "react-router-dom";
function LatestComp({title,imgsrc,imgalt,author}){
    return(
        <section className="lg:relative flex ml-[1%] mt-[1%] mb-[1%] w-[100%] max-w-[100%] h-[100%]" >
            <Link className="lg:relative flex">
            <img className="lg:relative w-[100%]  mr-[3%] md:max-w-[29%] md:h-[70%] md:rounded-full lg:rounded-none lg:max-w-[40%] lg:h-[70%] xl:max-w-[45%] xl:h-[80%]" src={imgsrc} alt={imgalt}/>
            <div className="lg:relative block w-[100%] max-[55%] h-[100%] ">
                    <p className="lg:relative md:leading-[20px] font-bold font-h-font mb-[4%] lg:text-[13px] xl:text-sm 2xl:text-[1rem]">{title}</p>
                <p className="lg:relative text-[12px] 2xl:text-[0.8rem]">By {author}</p>
            </div>
            </Link>
        </section>
    )
}
export default LatestComp;