// https://medium.com/tableless/entendendo-programa%C3%A7%C3%A3o-funcional-em-javascript-de-uma-vez-c676489be08b

const numbers = [1,2,3];
const square = x => x * x;

const squaredNumbers = numbers.map(square);

console.log(squaredNumbers);