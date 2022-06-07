// 1

let car = {
    maker: 'Lada',
    model: '21061',
    yearOfRelease: '1994',
    averageSpeed: 90,
    fuelBag: 38,
    averageFuel: 8,
    driver: 'Stanislav'
}

function carShow(param) {
    for (const key in param) {
        console.log(`${key} = ${param[key]}`);
    }
}

function addDriver() {
    let driver = prompt('Введіть ім`я водія');
    car.driver = driver;
}

function refuel() {
    confirm('Вам потрібно заправити ваше авто');
}

function timeCalc(s) {
    let t = 0;
    let fuel = car.fuelBag;
    do {
        fuel -= car.averageFuel * 0.9;
        if (fuel <= 0) {
            refuel();
            fuel = 38; 
        }
        s -= car.averageSpeed;
        if (s < 0) {
            break;
        }
        t++;
        if (t % 4 == 0) {
            t++;
            addDriver();
        }
    } while (t > 0);

    console.log(t);
}