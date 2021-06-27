/*
A JavaScript file where all the functions of the calculator are made. 
The backend of the calculator. 
*/

// Initializing variables 

const display1El = document.querySelector('.display-1'); 
const display2El = document.querySelector('.display-2'); 
const tempResultEl = document.querySelector('.tempResult'); 
const numbersEl = document.querySelectorAll('.number');
const operationEl  = document.querySelectorAll('.operation');
const equalEl = document.querySelector('.equal');
const clearEl = document.querySelector('.all-clear');
const clearLastEl = document.querySelectorAll('.last-entity-clear');

let display1Num = '';
let display2Num = '';
let result = null;
let lastOperation = '';
let haveDot = false;

//add event listener so that we can press the numbers on the calculator and have them display

numbersEl.forEach( number => {
    number.addEventListener('click', (e)=> {
        
        // Here I am creating an exception for the decimal point.
        // We only want 1 decimal point at a time. A simple if else statement
        // Check to see if there is a decimal point or not. 

        if(e.target.innerText === '.' && !haveDot){    
            haveDot = true;                                 
        }else if (e.target.innerText === '.' && haveDot){
            return;
        }
        display2Num += e.target.innerText;
        display2El.innerText = display2Num; 
    })
})

// creating the event listener for the operaations of the calculator

operationEl.forEach( operation => {
    operation.addEventListener('click', (e)=> {
        if(!display2Num) result;
        haveDot = false;
        const operationName = e.target.innerText;
        if(display1Num && display2Num && lastOperation) {
            mathOperation();
        } else {
            // using parseFloat to change the string stored within the display2Num, to a number
            result = parseFloat(display2Num); 
        }
        clearVariable(operationName);
        lastOperation = operationName;
        console.log(result);
    })
})

// creating the clearVariable function and showing the stored variable on the correct display

function clearVariable(name = '') {
    display1Num +=  display2Num+ ' ' + name+ ' ';
    display1El.innerText = display1Num;
    display2El.innerText = ' ';
    display2Num = ' ';
    tempResultEl.innerText = result;
}

function mathOperation() {
    if (lastOperation === 'X'){
        result = parseFloat(result) * parseFloat(display2Num);
    } else if (lastOperation === '+'){
        result = parseFloat(result) + parseFloat(display2Num);
    }else if (lastOperation === '-'){
        result = parseFloat(result) - parseFloat(display2Num);
    }else if (lastOperation === '/'){
        result = parseFloat(result) / parseFloat(display2Num);
    }else if (lastOperation === '%'){
        result = parseFloat(result) % parseFloat(display2Num);
    }
}
// checking to see the verified signature
//final check
// verification sorted?


