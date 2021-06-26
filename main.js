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
