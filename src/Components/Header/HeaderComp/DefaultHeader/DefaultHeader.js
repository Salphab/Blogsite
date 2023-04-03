import {useEffect} from 'react';
function DefaultHeader(url,border_array){
    useEffect(()=>{
        switch (url){
            case 'http://localhost:3000/':
                border_array[0].current.style.borderTopColor = 'white';
                border_array[0].current.style.borderTopWidth = '2px';
                break;
            case 'http://localhost:3000/news/':
                border_array[1].current.style.borderTopColor = 'blue';
                border_array[1].current.style.borderTopWidth = '2px';
                break;
            case 'http://localhost:3000/news/headline/':
                border_array[1].current.style.borderTopColor = 'blue';
                border_array[1].current.style.borderTopWidth = '2px';
                break;
            case 'http://localhost:3000/news/top-stories/':
                border_array[1].current.style.borderTopColor = 'blue';
                border_array[1].current.style.borderTopWidth = '2px';
                break;
            case 'http://localhost:3000/news/foreign/':
                border_array[1].current.style.borderTopColor = 'blue';
                border_array[1].current.style.borderTopWidth = '2px';
                break;
            case 'http://localhost:3000/economy/':
                border_array[2].current.style.borderTopColor = 'yellow';
                border_array[2].current.style.borderTopWidth = '2px';
                break;
            case 'http://localhost:3000/opinion/':
                border_array[3].current.style.borderTopColor = 'red';
                border_array[3].current.style.borderTopWidth = '2px';
                break;
            case 'http://localhost:3000/sports/':
                border_array[4].current.style.borderTopColor = 'green';
                border_array[4].current.style.borderTopWidth = '2px';
                break;
            case 'http://localhost:3000/sports/football/':
                border_array[4].current.style.borderTopColor = '#37F713';
                border_array[4].current.style.borderTopWidth = '2px';
                break;
            case 'http://localhost:3000/sports/basketball/':
                border_array[4].current.style.borderTopColor = '#37F713';
                border_array[4].current.style.borderTopWidth = '2px';
                break;
            case 'http://localhost:3000/sports/tennis/':
                border_array[4].current.style.borderTopColor = '#37F713';
                border_array[4].current.style.borderTopWidth = '2px';
                break;
            case 'http://localhost:3000/business/':
                border_array[5].current.style.borderTopColor = '#873e23';
                border_array[5].current.style.borderTopWidth = '2px';
                break;
            case 'http://localhost:3000/market/':
                border_array[6].current.style.borderTopColor = 'orange';
                border_array[6].current.style.borderTopWidth = '2px';
                break;
            case 'http://localhost:3000/market/crypto':
                border_array[6].current.style.borderTopColor = 'orange';
                border_array[6].current.style.borderTopWidth = '2px';
                break;
            case 'http://localhost:3000/market/commodities':
                border_array[6].current.style.borderTopColor = 'orange';
                border_array[6].current.style.borderTopWidth = '2px';
                break;
            case 'http://localhost:3000/market/equities':
                border_array[6].current.style.borderTopColor = 'orange';
                border_array[6].current.style.borderTopWidth = '2px';
                break;
            case 'http://localhost:3000/market/market-view':
                border_array[6].current.style.borderTopColor = 'orange';
                border_array[6].current.style.borderTopWidth = '2px';
                break;
            case 'http://localhost:3000/market/securities':
                border_array[6].current.style.borderTopColor = 'orange';
                border_array[6].current.style.borderTopWidth = '2px';
                break;
            case 'http://localhost:3000/entertainment':
                border_array[7].current.style.borderTopColor = 'pink';
                border_array[7].current.style.borderTopWidth = '2px';
                break;
            default:
                break;        
       }
    })
        
}
export default DefaultHeader;