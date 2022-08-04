// function add (number1, number2){
//     console.log(number1, number2);
//     var sum = number1 + number2;
//     return sum;
//     console.log('I need more code')
// }
// // add(45, 15);
// var total = add(34, 45);
// console.log('total :', total);


function bringSingra(mony){
    var singraPrice = 10;
    var quantity = mony / singraPrice;
    return quantity;
}
var myTaka = 150;
var singras = bringSingra(myTaka);
console.log('Eting Singra', singras);