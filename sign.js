
// Start function to Show The Password
let showPassWord=document.getElementById("show");
let pass = document.getElementById("pass");

showPassWord.onclick = function showMyPass() {
    if (pass.type =="password" && pass.value!== ""){
            pass.type="text";
            showPassWord.textContent="Hide Password";
    }else {
        pass.type="password";
        showPassWord.textContent="Show Password";
    }
}
// End function to Show The Password
// Start function to Validate 
function formValidate(){
let myEmail = document.getElementById("email").value;
let myPassWord = document.getElementById("pass").value;
let myName= document.getElementById("name").value;

let error = document.getElementById("error");
let text="";
    if(myName == "" || myName.length < 3){
        text="Please Enter Avalid Name"
        error.innerHTML=text;
        return false
}else if (myEmail.length < 10 || myEmail.indexOf("@")== -1 ){
    text="Please Enter Avalid Email"
    error.innerHTML=text;
    return false;
}else if (myPassWord.length < 8 ){
    text="Please enter more than eight character in password"
    error.innerHTML=text;
    return false;
}else {
    return true;
};
}
// End function to Validate 








