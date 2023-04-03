function Undisplay (event,param){
    event.preventDefault();
    let target = document.getElementById(param);
    if(target.style.display === 'block'){
        target.style.display = ''
    } 
}
export default Undisplay;