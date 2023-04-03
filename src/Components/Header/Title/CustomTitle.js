import {useEffect,useRef} from 'react';
function CustomTitle(props){
    const innerDiv = useRef('null');
    const text = useRef('null')
    useEffect(()=>{
        innerDiv.current.style.maxWidth = props.innerDivWidth;
        text.current.style.color = props.textColor;
        
    },[props])
    return(
        <>
            <div className="lg:relative w-[100%] md:h-[40px] max-w-[100%] bg-black z-[999]">
                <div className="lg:relative w-[100%] h-[100%]" ref={innerDiv}>
                    <h1 className="lg:relative  bg-gray-900 w-[100%] font-h-font md:max-w-[fit-content] lg:max-w-[fit-content] xl:max-w-[fit-content] h-[100%] text-black px-[5%] md:pt-[2%] lg:pt-[4%] font-bold 2xl:pt-[4%]" ref={text}>{props.value}</h1>
                </div>
            </div>
        </>
    )
}
export default CustomTitle;