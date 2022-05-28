// let summa = 0.1 + 0.2;
// console.log(summa);

// let a = '1';
// let b = 2;
// alert(+a + b);

// let gb = prompt('введіть обьем флеш карти в гігабайтах');
// let obiem = (gb * 1024) / 820;
// alert ('На вашу флеш карту поміститься ' + Math.trunc(obiem) + ' ' + 'файлів розміром 820мб');


// let summaGrn = prompt('Введіть сумму грошей');
// let price = prompt('введіть ціну шоколадки');
// let namber = (summaGrn / price);
// let balance = (summaGrn % price);
// alert(Math.trunc(namber) + ' ' + "Шоколадок ви зможете придбати." + ' ' + balance + 'грн ' + 'Ваш залишок.');
//345

// let treeNamber = prompt('Введіть тризначне число');
// let aaa = treeNamber % 10; //5
// let bbb = (treeNamber / 10); 
// let bbb2 =(Math.trunc(bbb) % 10); //4
// let ccc = (treeNamber / 100);
// let ccc2 = (Math.trunc(ccc) % 10);
// alert(aaa + '' + bbb2 + '' + ccc2);

let contribution = prompt('Введіть сумму вкладу')
let interestamount = (contribution * 0.05) / 6;
alert('Ваш прибуток за 2 місяці' + ' ' +  interestamount);

//  2 && 0 && 3  виводить 0
// 2 || 0 || 3  виводить 2
// 2 && 0 || 3  виводить 3
