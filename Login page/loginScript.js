
const loginForm = document.getElementById('login-form');
const userEmail = document.getElementById('userEmail');
const userPassword = document.getElementById('userPassword');

loginForm.addEventListener('submit',(e)=>{
    e.preventDefault();


    if(loginFormValidate()){
        console.log("Logged in successfully");
        login(userEmail.value.trim(), userPassword.value.trim());
    }
    else{
        console.log("Logged in unsuccess");
    }
})

function loginFormValidate(){
    const userEmailVal = userEmail.value.trim();
    const userPasswordVal = userPassword.value.trim();
    let successStatus = true;

    if(userEmailVal === ''){
        successStatus = false;
        setError(userEmail,'email address required');
    }else if(!validateEmail(userEmailVal)){
        successStatus = false;
        setError(userEmail,'Enter valid email');
    }else{
        setSuccess(userEmail);
    }


    if(userPasswordVal=== ''){
        successStatus = false;
        setError(userPassword,'password required');
    }else{
        setSuccess(userPassword);
        
    }

    return successStatus;
}


function login(email,password){
    const storedPassword = localStorage.getItem(email);

    if(storedPassword === password){
        console.log("Success");
        const successMessage = document.getElementById('success');
        successMessage.style.display = 'block';

        setTimeout(()=>{
            successMessage.style.display = 'none';
            window.location.href = './home.html';
        },1000);
        
    }else{
        console.log("failure");
        setError(userPassword, 'Incorrect email or password');
    }
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
    window.location.href = './signup.html';
}