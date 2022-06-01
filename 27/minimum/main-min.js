// завдання 1

let old = prompt('Скільки вам років?');

switch (true) {
    case (old >=1 && old<=8): 
        alert ("Дитина");
        break;
    case (old >=8 && old<=16): 
        alert ("Отрок");
        break;
    case (old >=16 && old<=21):
        alert ("Студент");
        break;
    case (old >=21 && old<=30): 
        alert ("Дорослий");
        break;
    case (old >=30 && old<=50): 
        alert ("Жизнь");
        break;
    case (old >=50 && old<=60): 
        alert ("Бальзак");
        break;
    case (old >=60 && old<=120 ): 
        alert ("старость");
        break;
    case (old >=120 ): 
        alert ("СМЕЕЕЕРТЬ");
        break;    
    default: alert('Введіть ваш вік в цифрах');
}   

// Завдання 2

let pass = +prompt('введіть ціфру від 0 до 9');

switch (true) {
    case (pass == 0): 
        alert ("Ваш символ - )");
        break;
    case (pass == 1): 
        alert ("Ваш символ - !");
        break;
    case (pass == 2): 
        alert ('Ваш символ - @');
        break;
    case (pass == 3): 
        alert ("Ваш символ - #");
        break;
    case (pass == 4): 
        alert ("Ваш символ - $");
        break;
    case (pass == 5): 
        alert ("Ваш символ - %");
        break;
    case (pass == 6): 
        alert ("Ваш символ - ^");
        break;
    case (pass == 7): 
        alert ("Ваш символ - &");
        break;
    case (pass == 8): 
        alert ("Ваш символ - *");
        break;
    case (pass == 9): 
        alert ("Ваш символ - (");
        break;
    default: alert('Error :  Введіть вашу цифру');
}

//Завдання 3


let number1 = +prompt('Введіть перше число');
let number2 = +prompt('Введіть друге число');
let sum = 0;

while(number1 <= number2){       
    sum += number1;  
    number1 ++;
 }

alert('Сумма чисел у вашому діапазоні дорівнює ' + sum);

// Завдання 4


let a = prompt('Вкажіть перше число');
let b = prompt('Вкажіть друге число');
let gcd;
while (a != b) {
  if (a > b) {
    a = a - b;
  }
  else {
    b = b - a;
  }
}
gcd = a;
alert('Спільний дільник ваших чисел становить: ' + gcd)

//Завдання 5

let numberN = +prompt('Введіть число');

for (let i = 2; i * 2 <= numberN; i++) {
    if (numberN % i == 0 ) {
        alert(`Делители этого числа: ${i}`);
    }
}