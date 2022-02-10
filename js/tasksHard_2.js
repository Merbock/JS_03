'use strict';

const firstNum = +prompt('Введите первое число');
const secondNum = +prompt('Введите второе число');

const checkMin = () => {
    return (firstNum - secondNum < 0 && firstNum) || (secondNum - firstNum < 0 && secondNum);
}

console.log(checkMin());