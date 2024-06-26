let userEntry = document.querySelector('.userEntry');
let finalCalc = document.querySelector('.finalCalc');
let buttons = document.querySelectorAll('.button');
let operators = document.querySelectorAll('.operator');
let clearButton = document.getElementById('clear');
let equalsButton = document.getElementById('equals');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        userEntry.textContent += button.textContent;
    });
});

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        userEntry.textContent += ' ' + operator.textContent + ' ';
    });
});

clearButton.addEventListener('click', () => {
    userEntry.textContent = '';
    finalCalc.textContent = '';
});

equalsButton.addEventListener('click', () => {
    try {
        let result = eval(userEntry.textContent);
        finalCalc.textContent = result;
    } catch (e) {
        finalCalc.textContent = 'Error';
    }
});