const reset_button = document.querySelector('.reset');
const input = document.querySelector('#number');
const plus_button = document.querySelector('.plus');
const minus_button = document.querySelector('.minus');
const counter = document.querySelector('h1');

reset_button.addEventListener('click', reset);
plus_button.addEventListener('click', incrementCounter);
minus_button.addEventListener('click', decrementCounter);

function reset (){
    displayValue(0);
}

function clearInput(){
    input.value = "";
}

function incrementCounter(){
    let x = +input.value;
    let counter_number = +counter.innerText + x;
    counter.innerText = counter_number;
}

function decrementCounter(){
    let x = +input.value;
    let counter_number = +counter.innerText - x;
    counter.innerText = counter_number;
}

function displayValue(value){
    counter.innerText = value;
}