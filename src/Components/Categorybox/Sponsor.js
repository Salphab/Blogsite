
function sponsor(props){
    return(
        <section className="lg:relative block w-[100%] max-w-[98%] m-auto border-t-[2px] border-b-[1px] border-blue-500 h-[550px] xl:max-w-[90%] 2xl:max-w-[75%] 
                            3xl:max-w-[85%] 3xl:min-w-[85%] 4xl:max-w-[70%] 4xl:min-w-[70%] 5xl:max-w-[57%] 5xl:min-w-[57%] 6xl:max-w-[48%] 6xl:min-w-[48%]
                            7xl:max-w-[40%] 7xl:min-w-[40%]">
        <h1 className="lg:relative md:text-[1.2rem] w-[100%] max-w-[fit-content] m-auto font-semibold text-2xl mt-[1%] font-h-font">{props.title}</h1>
        </section>
    )
}
export default sponsor;