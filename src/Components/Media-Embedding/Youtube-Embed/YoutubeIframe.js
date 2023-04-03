// props.src is the url source of the youtube media to cast
function YoutubeIFrame(props){
    return(
        <seciton >
           <iframe className="lg:relative m-auto mt-[2%]" width="560" height="315" src={props.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </seciton>
    )
}
export default YoutubeIFrame;