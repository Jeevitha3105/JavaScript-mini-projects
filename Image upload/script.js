const pic = document.getElementById('profile-pic');
const input = document.getElementById('input-file');

input.onchange = function(){
    pic.src = URL.createObjectURL(input.files[0])
}