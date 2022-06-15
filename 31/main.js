// minimum

// class Circle {
//     constructor(radius) {
//         this.radius = radius
//     }

//     voice() {
//         console.log(this.radius);
//     }

//     addRadius() {
//        return this.radius = +prompt('Вкажіть значення радіусу');
//     }

//     diameter() {
//         console.log(this.radius * 2);
//     }

//     square() {
//         console.log(Math.PI * Math.pow(this.radius, 2));
//     }

//     length() {
//         console.log(Math.PI * this.radius * 25);
//     }
// } 

// let lapSettings = new Circle();
// lapSettings.voice();
// lapSettings.addRadius();
// lapSettings.diameter();
// lapSettings.square();
// lapSettings.length();


// Norma

// Примеры названий цветов
//Red, OrangeRed, Blue, Gray, Fuchsia

class Marker{
    constructor(){
        this.color = 'Fuchsia'
        this.bag = 100 + "%"
        this.text = ''
    }
    

    info() {
        console.log(this.text, this.bag, this.color);
    }

    addcolor() {
        return this.color = prompt('Введіть колір за бажанням')
    }

    addtext() {
        return this.text = prompt('Введіть текст')
    }

    write() {
    let text = this.text;
    let namber = text.length;
    let sum = namber * 0.5 
    for (let i = 0; this.bag >= sum; i++) {
        if (this.bag >= sum){
            console.log(`%c ${this.text}`, `color: ${this.color}`)
            return this.bag = this.bag - sum;
            }  
        }
        addtext();

    }
    
    
}

let markerok = new Marker();
markerok.info();
markerok.addtext();
markerok.write();

class NewMarker extends Marker{
    refuel() {
        return this.bag = 100
    }
}

let newmarkerok = new NewMarker();
newmarkerok.refuel();