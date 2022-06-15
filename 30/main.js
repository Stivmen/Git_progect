//minimum

let shoppingList = [
    {
        productName: "Apple",
        amount: 4,
        purchased: false,
        price: 5,
        sum: 20
    },
    {
        productName: "Banana",
        amount: 2,
        purchased: false,
        price: 10,
        sum: 20
    },
    {
        productName: "Potato",
        amount: 5,
        purchased: false,
        price: 6,
        sum: 30
    },
    {
        productName: "Tomato",
        amount: 1,
        purchased: false,
        price: 50,
        sum: 50
    }
];


function sortByPurchased(paramList) {
    paramList.sort((a, b) => {
        return a.purchased - b.purchased;
    });
    console.log(paramList);
}

function buyProduct(product) {
    for (let i = 0; i < shoppingList.length; ++i) {
        if (product == shoppingList[i].productName) {
            shoppingList[i].purchased = true;
        }
    }
}

function createList(paramList) {
    let unPurchasedList = [];
    for (let i = 0; i < paramList.length; i++) {
        if (paramList[i].purchased == false) {
            unPurchasedList.push(paramList[i]);
        }

    }
    console.log(unPurchasedList);
}

// normal

function removeProduct(product) {
    let tempList = [];
    for (let i = 0; i < shoppingList.length; i++) {
        if (shoppingList[i].productName != product) {
            tempList.push(shoppingList[i]);
        }
    }

    shoppingList.length = 0;

    for (let i = 0; i < tempList.length; i++) {
        shoppingList.push(tempList[i]);
    }
}

function addPurchase(product) {
    for (let i = 0; i < shoppingList.length; i++) {
        if (product == shoppingList[i].productName) {
            shoppingList[i].amount++;
            shoppingList[i].sum += shoppingList[i].price;
        }
    }
}

// maximum

function calcSum() {
    let sum = 0;
    for (let i = 0; i < shoppingList.length; ++i) {
        sum += shoppingList[i].sum;
    }
    console.log(sum);
}

function calcUnpurchased() {
    let sum = 0;
    for (let i = 0; i < shoppingList.length; i++) {
        if (shoppingList[i].purchased == false) {
            sum += shoppingList[i].sum;
        }
    }
    console.log(sum);
}

function relevantSum(param) {
    if (param == '>') {
        shoppingList.sort((a, b) => {
            return b.sum - a.sum;
        });
    }
    else {
        shoppingList.sort((a, b) => {
            return a.sum - b.sum;
        });
    }
}