import axios from 'axios';
import { useEffect } from 'react';
async function Axios(url,setPayloads,setisLoading){
    useEffect(()=>{
        axios.get(url)
        .then((res)=>{
            console.log(res)
            setPayloads(res.data);
            setisLoading(true);
        })
    },[]);
}
export default Axios;