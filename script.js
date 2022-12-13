// const menuBtn = document.querySelector("#menu");
// const navigation = document.querySelector(".navigation");

// menuBtn.addEventListener("click",()=>{
//     menuBtn.classList.toggle("active");
//     navigation.classList.toggle("active");
// });

function Timing(){
const days=document.querySelector("#days")
const hours=document.querySelector("#hours")
const minutes=document.querySelector("#minutes")
const seconds=document.querySelector("#seconds")


const currentYear=new Date().getFullYear()
// console.log(currentYear)


const currentDate=new Date()
// console.log(currentDate)

const newYear=new Date(`January 1 2023 ${currentYear} 00:00:00`)
// console.log(newYear)

const diff=newYear-currentDate
const d=Math.floor(diff/1000/60/60/24)
const h =Math.floor((diff/1000/60/60)%24)
const m=Math.floor((diff/1000/60)%60)
const s=Math.floor((diff/1000)%60)

days.innerHTML=d<10?"0"+d:d +"<br>days"
hours.innerHTML=h+"<br> hr"
minutes.innerHTML=m+"<br>min"
seconds.innerHTML=s+"<br> sec"
}
setInterval(Timing,1000);


// validation

function validation(){
    var name=document.myForm.name.value;
    var email=document.myForm.Email.value;
    var password=document.myForm.password.value;

    
    if(name==null||name==""){
        alert("Name Can't be blank")
        return false
    }

    var atposition=email.indexOf("@");
    var dotposition=email.indexOf(".")
    if(email==null||email==""){
        alert("Email can't be blanked")
    }
    else if(atposition<2||dotposition<atposition+2||email.length<dotposition+2){
        alert("Please enter valid email(use @ and .)")
        return false
    }
    else if(password==null||password==""){
        alert("Password Can't be blanked")
        
        
    }
    // else if(password.length==8){
    //     alert("Please give the password atleast minimum 6 characters")
    // }
else{
    alert("you are successfully registered")
}
   
  
    

}

































































// mail.validation

// const form=document.getElementById("from1");
// const username=document.getElementById("name-error");
// const email=document.getElementById("email-error");
// const password=document.getElementById("pass-error");

// form.addEventListener('submit',e=>{
//     e.preventDefault();
//     checkInput()
// })

// function checkInput(){
//     const usernameValue=username.value.trim()
//     const emailValue=email.value.trim()
//     const passValue=pass.value.trim()
    
//     if(usernameValue===''){
//         setError(username,'username cannot be blank')
//     }
//     else{
//         setSuccess(username);
//     }
//     if(emailValue===''){
//         setError(email,'email cannot be blank')
//     }
//     else if(!isEmail(emailValue)){
//         setError(email,'Not a valid email')
//     }
//     else{
//         setSuccess(email)
//     }
//     if(passValue===''){
//         setError(pass,'password cannot be blank')
//     }
//     else{
//         setSuccess(pass);
//     }
// }

// function setError(input){
//     const formControl=input.parentElement
    
// }
// function isEmail(email){
//     return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
// }