'use strict';

const yourMoney = +prompt('Введите ваш доход');
let tax = 0;

if (yourMoney <= 15000) {
    tax = yourMoney * 0.13;
    console.log(`Сумма вашего налога составила: ${tax} рублей`)
}
if (yourMoney > 15000 && yourMoney <= 50000) {
    tax = (yourMoney - 15000) * 0.2;
    console.log(`Сумма вашего налога составила: ${tax} рублей`)
}
if (yourMoney > 50000) {
    tax = (yourMoney - 50000) * 0.3;
    console.log(`Сумма вашего налога составила: ${tax} рублей`)
}