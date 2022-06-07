// 2

function returnNumOFArguments(params) {
    console.log(arguments.length);
}

returnNumOFArguments(1, 2, 2, 3, 45);

// 3


function back(a, b) {
    if (a < b) {
        return -1;
    }
    else if (a > b) {
        return 1;
    }
    else {
        return 0;
    }
}

// 4

function factorial(n) {
    if (n == 0) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}

//5 

let number = "";

for (let i = 0; i < 3; ++i) {
    let n = prompt("Input a digit");
    number += n;
}

console.log(number);

// 6

function square(length, width) {
    if (arguments.length == 1) {
        console.log(length * length);
    }
    else {
        console.log(length * width);
    }
} 