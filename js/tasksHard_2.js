'use strict';

const money = +prompt('Введите ваш доход');
let taxation = 0;

if (money <= 15000) {
    taxation = money * 0.13;
    console.log(`Сумма вашего налога составила: ${taxation} рублей`);
}
if (money > 15000 && money <= 50000) {
    taxation = (money - 15000) * 0.2;
    console.log(`Сумма вашего налога составила: ${taxation} рублей`);
}
if (money > 50000) {
    taxation = (money - 50000) * 0.3;
    console.log(`Сумма вашего налога составила: ${taxation} рублей`);
}