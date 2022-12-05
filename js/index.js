const nav__close=document.querySelector(".nav__close")
const nav__menu=document.querySelector(".nav__menu")
const nav__links=document.querySelector(".nav__links")
const body=document.querySelector(".body")
const nav = document.querySelector('.nav');
var handleChange=false;
nav__menu.addEventListener('click',()=>{
    nav__menu.style.transform="scale(0)";
    nav__close.style.transform="scale(1)";
    nav__links.style.opacity=1;

    body.style.overflow='hidden'
    nav.style.setProperty("--opacityForBefore",1)
})
nav__close.addEventListener('click',()=>{
    nav__close.style.transform="scale(0)";
    nav__menu.style.transform="scale(1)";

    nav__links.style.opacity=0;
    body.style.overflow='auto'
    nav.style.setProperty("--opacityForBefore",0)
})
window.onresize=async ()=>{
    if(body.offsetWidth>=875){
        nav__links.style.opacity=1;
        handleChange=true;

    }
    else{
        if(handleChange){

            nav__links.style.transition='none';
            nav__links.style.opacity=0;
            nav__close.style.transform="scale(0)";
            nav__menu.style.transform="scale(1)";
            body.style.overflow='auto'
            nav.style.setProperty("--opacityForBefore",0)
            handleChange=false;
            // nav__links.style.transition='opacity 0.4s ease-in';
        }
        else{
            nav__links.style.transition='opacity 0.4s ease-in';
        }
    }
    if(body.offsetWidth==874){
    nav__links.style.transition='opacity 0.4s ease-in';}
    // nav__links.style.transition='opacity 0.4s ease-in';
    console.log(handleChange)
}
// async function whenSizeReduces(){
//     nav__links.style.transition='none';
//     nav__links.style.opacity=0;
//     nav__close.style.transform="scale(0)";
//     nav__menu.style.transform="scale(1)";
//     body.style.overflow='auto'
//     nav.style.setProperty("--opacityForBefore",0)
//     handleChange=false;
   
// }