// Завдання 1

let down = 0;
let up = 100;
let res;

alert ('Починаймо гру! загадай число від нуля до сотні');

while (true) {
    res = Math.floor((up + down) / 2);
    res = Math.trunc(res);

    let check = prompt('Ваше число > ' + res + ', ' + ' < ' + res + ' або = ' + res + ' ?' );
    if (check == '=') {
        alert (res);
        break;
    }

    else if (check == '>') {
        down = Math.floor((up + down) / 2);
    }
    else {
        up = Math.floor((up + down) / 2);
    }
}




//Завдання 2

let numMul = 2;
do {
    for(let i = 1; i <= 10; i++) {
        let result = i * numMul;
        console.log(result);
    }
    numMul++;123
}
while(numMul <= 9);

// Завдання 3

let day = +prompt('Введіть день: ');
let mount = +prompt('Введіть місяць: ');
let year = +prompt('Введіть рік: ');

switch (true) {
    case( mount == 12 && day == 31):
        alert((year + 1) + " " + 1 + " " + 1);
        break;
    case(year % 4 == 0 && mount == 2 && day == 29):
    alert(year + " " + (mount + 1) + " " + '1');
    break
    case(year % 4 != 0 && mount == 2 && day == 28):
    alert(year + " " + (mount + 1) + " " + '1');
    break
    case (mount == 4 || mount == 6 || mount == 9 || mount == 11):
        if (day == 30) {
            alert(year + " " + (mount + 1) + " " + '1');
        }
        else{
            alert(year + " " + mount + " " + (day + 1));
        }
        break;
    default: if (day == 31) {
        alert(year + " " + (mount + 1) + " " + '1');
    }
    else{
        alert(year + " " + mount + " " + (day + 1));
    }
    break;
}