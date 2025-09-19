
// 1
const celsius = Number(prompt("How many degrees is it outside (in Celsius)"));
console.log((celsius*1.8)+32);
console.log(typeof (celsius));
// 2
const daysInMonth = Number(prompt("Write any day of this month (From 1 to 30)"));
console.log(daysInMonth * 24);
console.log(daysInMonth * 1440);
console.log(typeof (daysInMonth));
// 3
const health = 100;
const energy = 100;
console.log(health - 10);
console.log(typeof (health));
console.log(energy - 19);
console.log(typeof (energy));
// 4
const totalPrice = Number(prompt("How much costs product which you would to buy?"));
const discount = 0.1;
const discountedPrice = totalPrice - (totalPrice * discount);
console.log(discountedPrice);
console.log(typeof (discountedPrice));
// 5
const floatNumber = 12.78;
const roundedDown = Math.floor(floatNumber);
console.log(roundedDown);
console.log(typeof roundedDown);
// 6
const floatString = "45.67";
const parsedFloat = parseFloat(floatString);
console.log(parsedFloat);
console.log(typeof (parsedFloat));
// 7
const intString = "123"
const parsedInt = parseInt(intString)
console.log(parsedInt);
console.log(typeof (parsedInt));
//  8
const number = Number(prompt("Your favorite number is..."))
const sqrtNumber = Math.sqrt(number);
console.log(sqrtNumber);
console.log(typeof (sqrtNumber));
// 9
let integer = 42;
let stringNumber = "256";
const convertedInt = parseInt(stringNumber);
console.log(convertedInt);
console.log(typeof (convertedInt));
console.log(integer.toString());
 console.log(typeof (integer));
 
 