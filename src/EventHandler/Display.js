function Display (event,param){
    event.preventDefault();
    let target = document.getElementById(param);
    if(target.style.display === ''){
        target.style.display = 'block'
    } 
    else{
        target.style.display = '';
    }
}
export default Display;