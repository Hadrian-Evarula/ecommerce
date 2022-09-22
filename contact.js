function imgSlider(anything) {
    document.querySelector('.shoes1').src = anything;   
}
function changeBgColor(color) {
    const sec = document.querySelector('.sec');
    sec.style.background = color;
}
function menuToggle() {
    const toggleMenu = document.querySelector('.toggleMenu');
    const navigation = document.querySelector('.navigation');
    toggleMenu.classList.toggle('active');
    navigation.classList.toggle('active'); 
}



const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");



function validateForm(){
    clearMessages();

   if(nameInput.value.length < 1){
       errorNodes[0].innerText ="Name cannot be blank";
       nameInput.classList.add("error-border");
   }

   if(!emailIsValid(email.value)) {
       errorNodes[1].innerText = "Invalid email address";
       nameInput.classList.add("error-border");
   }
}

function clearMessages(){
    for(let i=0; i < errorNodes.length; i++){
        errorNodes[1].innerText = "";
    }
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");

}

function emailIsValid(email){
    document.getElementById("success").innerHTML = "Successful!";     
    document.getElementById("success").style.color="green"; 
    document.getElementById("success").style.fontSize="15px";    
    document.getElementById("success").style.marginTop="10px";                                                                                                                            
}