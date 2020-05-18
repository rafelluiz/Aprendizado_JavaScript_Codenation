const numbers = [1,4,7,10];
const isBiggerThanFour = value => value > 4;

const numbersBiggerThenFour = numbers.filter(isBiggerThanFour);

console.log(numbersBiggerThenFour);