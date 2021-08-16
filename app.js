function add(num1, num2) {
    return num1 + num2;
}
var num1 = 2;
var num2 = 2.2;
var result = add(num1, num2);
console.log(result);
// implementing js for type check
// function add(num1: number, num2: number) {
//   if (typeof num1 !== 'number' || typeof num2 !== 'number') {
//     throw new Error('Invalid type!');
//   }
//   return num1 + num2;
// }
