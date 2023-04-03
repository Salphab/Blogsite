import axios from 'axios';
import { Link } from 'react-router-dom';
import {useEffect,useState} from 'react';
function JustIn(){
    const [isLoading, setLoading] = useState(false);
    const [payloads,setPayloads] = useState('');
    const url = 'http://localhost:5000/news/justin';
    useEffect(()=>{
        axios.get(url)
        .then((data)=>{
            setPayloads(data.data);
            setLoading(true);
        })
    },[])
    if (!isLoading) {
        return <div className="App">Loading...</div>;
      }
    return(
        <section className="lrelative w-[100%] block max-w-[100%] h-[400px]">
            <div className="relative flex w-[100%] max-w-[100%] text-[0.9rem] font-semibold h-[fit-content]">
                <p className="relative w-[100%] max-w-[fit-content] border-l-[5px] pl-[4%] font-h-font border-blue-300 h-[fit-content]">JUST IN</p>
            </div>
            {payloads.map((data)=>{
                return(
                    <Link to=''>
                        <p className='lg:relative w-[100%] max-w-[100%] h-[fit-content] font-h-font mt-[8%] border-b-[1px] border-gray-200 pb-[10px]' >{data.title}</p>
                    </Link>
                )
            })}
        </section>
       
    )
}
export default JustIn;