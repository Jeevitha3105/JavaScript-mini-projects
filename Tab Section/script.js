const container = document.querySelector('.main');
const buttons = document.querySelectorAll('.button');
const contents = document.querySelectorAll('.content');

container.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    console.log(id);

    if(id){
        buttons.forEach((button) => {
            button.classList.remove('active');
        })
        e.target.classList.add('active');

        contents.forEach((content) => {
            content.classList.remove('active');
        })
        const element = document.getElementById(id);
        element.classList.add('active');
    }
})