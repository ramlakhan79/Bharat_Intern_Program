const temperatureInput = document.getElementById('temperature_input');
const celsiusOutput = document.getElementById('celsius-output');
const fahrenheitOutput = document.getElementById('fahrenheit-output');
const kelvinOutput = document.getElementById('kelvin-output');
const convertBtn = document.getElementById('convert-btn');
const invalidParaOutput = document.getElementById('invalidPara');


convertBtn.addEventListener('click',()=>{
    const userInputValue = temperatureInput.value;
    const length = userInputValue.length;
    const temperature = parseFloat(temperatureInput.value);
    let lastLetter = userInputValue[length-1];

    switch(lastLetter){
        case "C":
            celsiusOutput.value = temperature.toFixed(2);
            let Fc = 32+((9*temperature)/5);
            fahrenheitOutput.value = Fc.toFixed(2);
            let Kc = 273 + temperature;
            kelvinOutput.value = Kc.toFixed(2);

            document.body.style.backgroundColor = "#c2b184";
            invalidParaOutput.textContent = " ";
            break;
        case "K":
            let Ck = temperature-273;
            celsiusOutput.value = Ck.toFixed(2)
            let Fk = 32+((9*Ck)/5);
            fahrenheitOutput.value = Fk.toFixed(2);
            kelvinOutput.value = temperature.toFixed(2);

            document.body.style.backgroundColor = "#9ed3db";
            invalidParaOutput.textContent = " ";
            break;
        case "F":
            let Cf = ((temperature-32)*5)/9;
            celsiusOutput.value = Cf.toFixed(2);

            fahrenheitOutput.value = temperature.toFixed(2);

            let Kf = 273+Cf;
            kelvinOutput.value = Kf.toFixed(2);

            document.body.style.backgroundColor = "#d09edb";
            invalidParaOutput.textContent = " ";
            break;
        default:
            celsiusOutput.value = " ";
            fahrenheitOutput.value = " ";
            kelvinOutput.value = " ";
            invalidParaOutput.textContent = "Please Enter a Valid Temperature";
            break;
    }
});
