import Toptitle from "../../TopTitle/Toptitle";
function TermsBody(props){
    return(
        <section className="lg:relative w-[100%] max-w-[98%] m-auto h-[fit-content]">
            <Toptitle title={props.title}/>
        </section>
    )
}
export default TermsBody;