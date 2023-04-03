import {InstagramEmbed} from 'react-social-media-embed';
function InstagramPosts(props){
    return(
       <>
        <div className="lg:relative w-[100%] max-w-[fit-content] mt-[2%] m-auto  h-[fit-content]">
            <InstagramEmbed url={props.url} width={328} captioned />
        </div>
       </>
    )
}
export default InstagramPosts;