const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    if(formValidate()){
        successMessage();
    }
})

function successMessage(){
    const success = document.getElementById('success');
    success.style.display='block';

    const emailValue = email.value.trim();
    const passValue = password.value.trim();

    setTimeout(()=>{
        success.style.display='none';
        window.location.href = './login.html';
    },1000);

    localStorage.setItem(emailValue,passValue);
}

function formValidate(){
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cPasswordVal = cpassword.value.trim();
    let success = true;

    if(usernameVal===''){
        success = false;
        setError(username,'Username required');
    }
    else{
        setSuccess(username);

    }

    if(localStorage.getItem(emailVal)) {
        success = false;
        setError(email, 'Email already exists');
    }else if(emailVal === ''){
        success = false;
        setError(email,'email address required');
    }else if(!validateEmail(emailVal)){
        success = false;
        setError(email,'Enter a valid email');
    }else{
        setSuccess(email);
    }

    if(passwordVal === ''){
        success = false;
        setError(password,'password required');
    }else if(passwordVal.length < 8){
        success = false;
        setError(password, 'Password must be 8 characters long');
    }else{
        setSuccess(password);
    }

    if(cPasswordVal === ''){
        success = false;
        setError(cpassword, 'Re-enter the password');
    }else if(cPasswordVal !== passwordVal){
        success = false;
        setError(cpassword, 'Password does not match');
    }else{
        setSuccess(cpassword);
    }

    return success;
}




function setError(element, message){

    element.value = '';
    element.placeholder = message;

    element.style.border = '1px solid red';


    element.classList.add('showError');
    element.classList.remove('showSuccess');

}

function setSuccess(element){
    
    element.style.border = '1px solid green';
    element.classList.remove('showError');
    element.classList.add('showSuccess');

}


const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

function redirect(){
    window.location.href = './login.html';
}