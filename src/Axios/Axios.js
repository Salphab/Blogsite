import axios from 'axios';
async function Axios(url,setPayload){
    await axios.get(url)
    .then((res)=>{
        setPayload(res.data)
    }).catch((err)=>{
        console.log(err)
    })
}
export default Axios;