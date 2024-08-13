const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if(validateForm()){
        console.log('Registered successfully!')
    }
})

function validateForm(){

    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passVal = password.value.trim();
    const cpassVal = cpassword.value.trim();
    let success = true;

    clearMessages();

    if(usernameVal === ''){
        success = false;
        setError(username, "Please enter your username", 'username-error');
    }else{
        success = true;
        setSuccess(username);
    }


    if(emailVal === ''){
        success = false;
        setError(email, "Enter your email address", 'email-error');
    }else if(!validateEmail(emailVal)){
        success = false;
        setError(email, "Enter validate email address", 'email-error');
    }else{
        success = true;
        setSuccess(email);
    }


    if(passVal === ''){
        success = false;
        setError(password, "Enter your password", 'password-error');
    }else if(passVal.length < 8){
        success = false;
        setError(password, "Password should be 8 characters long", 'password-error');
    }else{
        success = true;
        setSuccess(password);
    }



    if(cpassVal === ''){
        success = false;
        setError(cpassword, "Re-Enter your password", 'cpassword-error');
    }else if(cpassVal !== passVal){
        success = false;
        setError(cpassword, "Password does not match", 'cpassword-error');
    }else{
        success = true;
        setSuccess(cpassword);
    }

return success;

}

function setError(element, message, errorId){
    const errorElement = document.getElementById(errorId);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
    errorElement.style.color = 'red';
    element.style.border = '1px solid red';
}

function setSuccess(element){
    const errorId = `${element.id}-error`;
    const errorElement = document.getElementById(errorId);
    errorElement.textContent = '';
    errorElement.style.display = 'none';
    element.style.border = '1px solid green';
}


function clearMessages() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(message => {
        message.textContent = '';
        message.style.display = 'none';
    });
}



const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };