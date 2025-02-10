const resultInput = document.getElementById('result');
const buttons = document.querySelectorAll('.button');

let currentExpression = "";
let previousExpression = "";


buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const buttonValue = event.target.innerText;

        if (buttonValue === '=') {
            try {
                currentExpression = eval(currentExpression); 
                resultInput.value = currentExpression;
            } catch (error) {
                resultInput.value = 'Error';  
                currentExpression = "";  
            }
        } else if (buttonValue === 'AC') {
            currentExpression = "";
            resultInput.value = currentExpression;
        } else if (buttonValue === 'B') {
            currentExpression = currentExpression.slice(0, -1);
            resultInput.value = currentExpression;
        } else if (buttonValue === '%') {
            if (currentExpression !== "") {
                currentExpression = (parseFloat(currentExpression) / 100).toString();
                resultInput.value = currentExpression;
            }
        } else {
            currentExpression += buttonValue;
            resultInput.value = currentExpression;
        }
    });
});
