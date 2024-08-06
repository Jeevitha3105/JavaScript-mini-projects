const celsius = document.getElementById('celsius');
const fahrenheit = document.getElementById('fahrenheit');
const kelvin = document.getElementById('kelvin');

function temperatureCalculate(event){
    let currentValue = Number(event.target.value);

    switch(event.target.name){
        case "celsius" : {
            fahrenheit.value = ((currentValue * 9 / 5) + 32).toFixed(2);
            kelvin.value = (currentValue + 273.15).toFixed(2);
            break;
        }

        case "fahrenheit" : {
            celsius.value = (5/9 * (currentValue - 32)).toFixed(2);
            kelvin.value = (currentValue + 273.15).toFixed(2);
            break;
        }

        case "kelvin" : {
            fahrenheit.value = (9 / 5 * (currentValue - 273.15) + 32).toFixed(2);
            celsius.value = (currentValue - 273.15).toFixed(2);
            break;
        }
    }
}