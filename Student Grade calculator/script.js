
function calculate(){
    const chemistry = document.getElementById('chemistry').value;
    const hindi = document.getElementById('hindi').value;
    const maths = document.getElementById('maths').value;
    const phy = document.getElementById('phy').value;
    const showdata = document.getElementById('showdata');

    let total = parseFloat(chemistry) + parseFloat(hindi) + parseFloat(maths) + parseFloat(phy);

    let percentage = (total / 400) * 100
    
    let grades = "";

    if (percentage <= 100 && percentage >= 80) {
        grades = "A";
    } else if (percentage <= 79 && percentage >= 60) {
        grades = "B";
    } else if (percentage <= 59 && percentage >= 40) {
        grades = "C";
    } else {
        grades = "F";
    }

    if(chemistry == '' || hindi == '' || phy == '' || maths == ''){
        showdata.textContent = "Please enter all the fields";
    }else{
        if(percentage >= 39.5){
            showdata.textContent = `Your total score is ${total} out of 400 and your grade is "${grades}" grade. You are pass`;
        }else{
            showdata.textContent = `Your total score is ${total} out of 400 and your grade is "${grades}" grade. You are fail`;
        }
    }
}