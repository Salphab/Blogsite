import  {TwitterTweetEmbed} from "react-twitter-embed"
function Tweets(props){
    return(
        <section className="lg:relative w-[100%] max-w-[25%] m-auto">
           <TwitterTweetEmbed
                tweetId={props.tweetid}
            />
        </section>
    )
}
export default Tweets;