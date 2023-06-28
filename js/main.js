const inputNumber1 = document.getElementById("number1");
const inputNumber2 = document.getElementById("number2");
inputNumber1.addEventListener('change', handleInputNumberChange);
inputNumber2.addEventListener('change', handleInputNumberChange);

function validateNumber(number) {
    return !isNaN(parseFloat(number)) && isFinite(number);
}

function handleInputNumberChange(event) {
    if (validateNumber(event.target.value)) {
        event.target.classList.remove("input-error");
    } 
    else {
        event.target.classList.add("input-error");
    }
}

const clear = document.getElementById("btn-clear");
clear.addEventListener('click', () => {
    location.reload();
});

const result = document.getElementById("result-box");

function sum() {
    result.innerHTML = parseFloat(inputNumber1.value) + parseFloat(inputNumber2.value);
};

function multiplication() {
    result.innerHTML = parseFloat(inputNumber1.value) * parseFloat(inputNumber2.value);
};