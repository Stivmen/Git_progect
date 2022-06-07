function IsPerfect(a) {
    if (a <= 0) return false;
    let check = 0;
    for (let i = 1; i < a; ++i) {
        if (a % i == 0) {
            check += i;
        }
    }
    if (a == check) {
        return true;
    }
    else {
        return false;
    }
}

function onlyPerfect(low, high) {
    for (let i = low; i < high; ++i) {
        if (IsPerfect(i)) {
            console.log(i);
        }
    }

}