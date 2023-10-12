const phn = document.querySelector("#phoneno");
const otp = document.querySelector(".OTP");

// console.log(typeof phn.value);
let num;
phn.addEventListener("input", function(e){
    num=phn.value;
    console.log(phn.value);
})

console.log(num);
console.log(typeof num);



otp.addEventListener("click", (e)=>{
    console.log(e)
    if(num.length==10 && num>6500000000 && num<9999999999){
        alert("OTP sent, plz check your phone");   
    }
    else{
        alert("Enter valid number");
    }
})