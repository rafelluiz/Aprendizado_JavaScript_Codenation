function createNewPerson(name) {
    let obj = {};
    obj.name = name;
    obj.greetting = function () {
        console.log(`Hi I\'m ${obj.name}.`);
    };
    return obj;
}

let salva = createNewPerson('Salva');
salva.name;
salva.greetting();

// Função Construtora, Começa com letra maiuscula

function Person(name) {
    this.name = name;
    this.greetting = function () {
        console.log(`Hi! I\'m ${this.name}.`)
    }
}

let person1 = new Person('Bob');
let person2 = new Person('Sarah');

person1.name;
person1.greetting();

person2.name;
person2.greetting();