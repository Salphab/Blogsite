import Category from "./Category";
function BodyBox(props){
    return(
        <section className="lg:relative w-[100%] max-w-[98%] flex mt-[1%] mb-[4%] m-auto h-[400px] border-t-[2px] xl:max-w-[90%] 2xl:max-w-[75%] 3xl:max-w-[85%] 3xl:min-w-[85%] 4xl:max-w-[70%] 4xl:min-w-[70%] 5xl:max-w-[57%] 5xl:min-w-[57%] 6xl:max-w-[47%] 6xl:min-w-[47%] 7xl:max-w-[40%] 7xl:min-w-[40%]" style={{borderColor:props.border_color}}>
           <Category title={props.title1} url={props.url1}  extension={props.extension1}/>
           <Category title={props.title2} url={props.url2} extension={props.extension2}/>
        </section>
    )
}
export default BodyBox;