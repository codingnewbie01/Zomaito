const lg=document.querySelector(".login");

const zlg=document.querySelector(".zomaito_log");

const close=document.querySelector(".close");
const transP=document.querySelector("#transP");

// console.log(zbody.style.overflow);

zlg.addEventListener("click", (e)=>{
    // console.log(e);
    lg.style.visibility="visible";
    transP.style.visibility="visible";
    
    // console.log(lg.style);
    // zbody.style.overflow="hidden";
})
transP.addEventListener("click", (e)=>{
    // console.log(e);
    lg.style.visibility="hidden";
    transP.style.visibility="hidden";
    
    // console.log(lg.style);
    // zbody.style.overflow="hidden";
})

close.addEventListener("click",(e)=>{
    // console.log(e);
    lg.style.visibility="hidden";
    transP.style.visibility="hidden";
    // console.log(lg.style);
    // zbody.style.overflow="scroll";

})

