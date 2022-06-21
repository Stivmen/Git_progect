//TASK 2
const fruits = [{
    fruitName: 'strawberry',
    amount: 20,
    price: 50,
    color: 'red'
},

{
    fruitName: 'melon',
    amount: 100,
    price: 80,
    color: 'green'
},

{
    fruitName: 'grape',
    amount: 391,
    price: 45,
    color: 'purple'
}
];

const table = document.querySelector('.table');

function sortTable(tableHeader, valueToSort) {
console.log('Сортирую по ' + tableHeader.textContent);
if (tableHeader.hasAttribute("data-number")) {
    fruits.sort((a, b) => (a[valueToSort] < b[valueToSort]) ? 1 : -1);
} else {
    fruits.sort((a, b) => (a[valueToSort] > b[valueToSort]) ? 1 : -1);
}
}

function fillTable(table, array) {
table.innerHTML = '';

const tableHeader = document.createElement('tr');
tableHeader.classList.add('table-header');
tableHeader.innerHTML = `
    <th>Ягода</th>
    <th data-number>Количество</th>
    <th data-number>Цена за кг</th>
    <th>Цвет</th>
`;
table.append(tableHeader);

array.forEach(item => {
    const newTableRow = document.createElement('tr');
    newTableRow.classList.add('table-row');

    newTableRow.innerHTML = `
        <td class = "fruit-name">${item.fruitName}</td>
        <td class = 'amount'>${item.amount}</td>
        <td class = 'price'>${item.price}</td>
        <td class = 'price'>${item.color}</td>
    `;

    table.append(newTableRow);
});
}

fillTable(table, fruits);


const tableHeaders = document.querySelectorAll('th');

table.addEventListener('click', (e) => {
let target = e.target;
if (target.tagName == 'TH') {
    let key;
    tableHeaders.forEach((item, index) => {
        if (target.textContent == item.textContent) {
            const keys = Object.keys(fruits[0]);
            key = keys[index];
        }
    });

    sortTable(target, key);
    console.log(fruits);
    fillTable(table, fruits);

}
});


//TASK 3

const resizebleDiv = document.querySelector('.resizable');
const resizer = document.querySelector('.resizer');
console.log(resizebleDiv.getBoundingClientRect());

resizer.addEventListener('mousedown', () => {
  window.addEventListener('mousemove', resize);
  window.addEventListener('mouseup', stopResize);
});

function resize(e) {
console.log(e);
resizebleDiv.style.width = e.pageX - resizebleDiv.getBoundingClientRect().left + 'px';
resizebleDiv.style.height = e.pageY - resizebleDiv.getBoundingClientRect().top + 'px';
}

function stopResize() {
window.removeEventListener('mousemove', resize);
}