const btn = document.getElementById('btn');
const input = document.getElementById('input');
const copy = document.getElementById('copy-icon');
const copiedAlert = document.querySelector('.copy-alert');

const passwordLength = 14;

function generatePassword(passwordLength){
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const specialChars = "~!@#$%^&*()_+=-<>?"

    let allowedChars = "";
    let password = "";

    allowedChars += lowercase;
    allowedChars += uppercase;
    allowedChars += numbers;
    allowedChars += specialChars;

    if(passwordLength <= 0){
        return "Password must contain atleast 1 character";
    }
    if(allowedChars.length === 0){
        return "Atleast one set of characters needs to be selected";
    }

    for(let i = 0; i < passwordLength; i++){
        let index = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[index];
    }

    return password;
}



btn.addEventListener('click', () => {
    const password = generatePassword(passwordLength);
    console.log(`generated password : ${password}`);
    input.value = password;
    input.style.color = 'black';
})

function copyPassword() {
    input.select();
    input.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(input.value);
  }

  copy.addEventListener('click' ,()=>{
    if(input.value == ''){
        copiedAlert.disabled = true;
    }else{
        copyPassword();
        copiedAlert.style.display = "block";
        setTimeout(()=>{
            copiedAlert.style.display = "none";
        },1000)
    }
  })

