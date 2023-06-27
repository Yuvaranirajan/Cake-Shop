const loader=document.querySelector('.spinner-wrapper');
const load=document.querySelector('.spinner-border');

setTimeout(()=>{
   loader.style.display="none";
   loader.classList.remove('spinner-wrapper')
   load.classList.remove('spinner-border')
},1000);
// loader.style.display="none"
// window.addEventListener('DOMContentLoaded',()=>{

  
// })