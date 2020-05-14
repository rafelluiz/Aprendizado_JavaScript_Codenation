let Animal = {
    walk: function () {
        console.log("I'm walking...");
    }
};

let Dog = Object.create(Animal);

Animal.walk();

Dog.walk();

let Airplane = {
    fly:function () {
        console.log("I'm flying..");
    }
};

Airplane.walk();