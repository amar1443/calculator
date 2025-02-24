function updateDisplay(value) {
    const display = document.getElementById('display');
    display.value = value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.value.slice(-1) !== value){
    display.value += value;
}
}
function calculateResult() {
    const display = document.getElementById('display');
    try {
        let expression = display.value;
        expression = expression.replace(/\^/g, '**');
        expression = expression.replace(/pi/g, 'Math.PI');
        expression = expression.replace(/e/g, 'Math.E');
        const result = eval(expression);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const value = button.getAttribute('data-value');
            if (value === '=') {
                event.preventDefault(); // Prevent form submission
                calculateResult();
            } else if (value === 'C') {
                clearDisplay();
            } else {
                appendToDisplay(value);
            }
        });
    });

    document.addEventListener('keydown', (event) => {
        const key = event.key;
        if (key === 'Enter') {
            event.preventDefault(); // Prevent form submission
            calculateResult();
        } else if (key === 'Escape') {
            clearDisplay();
        } else if (key.match(/[0-9+\-*/().^]/)) {
            appendToDisplay(key);
        } else if (key === 'Backspace') {
            const display = document.getElementById('display');
            display.value = display.value.slice(0, -1);
        }
    });
});