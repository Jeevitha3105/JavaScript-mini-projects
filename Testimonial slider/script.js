const testimonial = [
    {
        img : './images/team-1.jpg',
        quote : 'Choosing XYZ Company was a game-changer for us. Their expertise and proactive approach have not only streamlined our processes but also boosted our bottom line. I highly recommend them!',
        name : 'Michael Smith, CFO'
    },
    {
        img : './images/team-2.jpg',
        quote : 'I am so glad I found ABC Service. Their team went above and beyond to meet our needs. The results speak for themselves—we have seen a significant increase in sales since partnering with them.',
        name : 'Emily Davis, Marketing Manager'
    },
    {
        img : './images/team-3.jpg',
        quote : "Using Your Product Name has transformed how we operate. It's user-friendly, reliable, and has all the features we need. I can't imagine running our business without it.",
        name : 'David Thompson, Small Business Owner'
    },
]

const img = document.getElementById('img');
const text = document.getElementById('text');
const writtenBy = document.getElementById('name');

let index = 0;

function display(){
    img.setAttribute("src", testimonial[index].img);
    text.textContent = testimonial[index].quote;
    writtenBy.textContent = testimonial[index].name;

    index++;

    if(index == testimonial.length){
        index = 0;
    }
    
    setTimeout(()=>{
        display();
    },4000);
}

display();
