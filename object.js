var mobile = {
    brand: 'Sumsung', //value
    price: 19000,
    camera: '84px',
    storage: '64gb',
    pen: 1
}

// console.log(mobile);
// mobile.storage = '12gb'
// console.log(mobile.camera);
// console.log(mobile)

var penCount = mobile.pen;
// console.log(penCount);
var penCount1 = mobile['pen'];
// console.log(penCount1);
var proparties = Object.keys(mobile);
// console.log(proparties);
var propartiyVelus = Object.values(mobile);
// console.log(propartiyVelus);
var propartyName = 'price';
var priceValues = mobile[propartyName];
// console.log(propartyName, priceValues);

// set property velu
mobile.pen = 10;
// console.log(mobile);
mobile['camera'] = '120mp';
// console.log(mobile);

var cameraUpdate = 'camera';
mobile[cameraUpdate] = '600mp';
console.log(mobile);