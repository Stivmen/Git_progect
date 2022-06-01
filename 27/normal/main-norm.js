//Завдання 1

let numPalindrome = prompt('Вкажіть п`ятирозрядне число');
let numLength = numPalindrome.length;

switch (true) {
    case (numLength == 1 || numLength % 2 == 0):
        alert ('Ваше число не паліндром');
        break;
    case (numPalindrome.charAt(0) == numPalindrome.charAt(4) || numPalindrome.charAt(1) == numPalindrome.charAt(3)):
        alert ('Ваше число паліндром');
        break;
    case (numPalindrome.charAt(0) != numPalindrome.charAt(4) || numPalindrome.charAt(1) != numPalindrome.charAt(3)):
        alert ('Ваше число не паліндром');
        break;
    default: alert(" Боже яке кончене") ;
}


// Завдання 2

let price = +prompt('Введіть сумму покупки');
switch (true) {
    case (price >= 200 && price <= 300):
        alert('Сумма покупки зі скидкою становить: ' + (price - (price*0.03)));
        break;
    case (price >= 301 && price <= 500):
        alert('Сумма покупки зі скидкою становить: ' + (price - (price*0.05)));
        break;
    case (price > 501):
        alert('Сумма покупки зі скидкою становить: ' + (price - (price*0.07)));
        break;
    default: alert('Сумма покупки становить: ' + price);
}

//Завдання 3

let numPlus = 0;
let numMinus = 0;
let numZero = 0;
let numOdd = 0;
let numEven = 0;

for (let i = 0; i < 10; i++) {
    let numX = prompt("Введіть свої числа");

    if(numX > 0) {
        numPlus += 1;
    }
    else if(numX < 0) {
        numMinus += 1;
    }
    else if(numX == 0) {
        numZero += 1;
    } else { alert('error')}
    

    if(numX % 2 == 0) {
            numEven += 1;
    } 
    else if (numX % 2 != 0) {
        numOdd += 1;
    } else { alert('error')}
}
alert('Додатніх чисел: ' + numPlus + '. Від’ємних чисел: ' + numMinus + '. Hулів: ' + numZero + '. Парних чисел: ' + numEven + '. Непарних чисел: ' + numOdd);

//// Завдання 4

let week = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"]

for (let i = 0; i < 7; ++i) {

    confirm(week[i] + ". Хочеш побачити наступний день?");
    // if (i == 6) {
    //     i = -1;
    // }
}

