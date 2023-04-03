import axios from 'axios';
import { useEffect } from 'react';
async function Axios(url,setPayloads,setisLoading){
    useEffect(()=>{
        axios.get(url)
        .then((data)=>{
            setPayloads(data.data.reverse());
            setisLoading(true);
        })
    },[]);
}
export default Axios;