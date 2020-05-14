let calculate = (fn,x,y) => {
    return fn(x,y);
};

const sum = (x, y) => x + y;
const mult = (x, y) => x * y;

//Não funcionou, nao se pq. 13/05/2020
// Tinha esquecido de criar a função calculate 14/05/2020

console.log(calculate(sum, 2, 5)); // 7
console.log(calculate(mult, 2, 5)); // 10