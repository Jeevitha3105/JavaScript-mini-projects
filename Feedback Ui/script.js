const emojis = document.querySelectorAll('.feedback-emojis');
const result = document.getElementById('result');
const feedbackPage = document.getElementById('feedback');
const resultPage = document.getElementById('result-page');


emojis.forEach((emoji) => {
    emoji.addEventListener('click', ()=>{
        feedbackPage.style.display = 'none';
        resultPage.style.display = "block";

        const icon = emoji.querySelector('i');
        let feedback = icon.getAttribute('title');
        result.textContent = feedback;
    })
})