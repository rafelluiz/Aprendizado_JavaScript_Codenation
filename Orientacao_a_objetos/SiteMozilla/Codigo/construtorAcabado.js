function Person(first,last,age,gender,interestsList) {
    this.name = {
        'first':first,
        'last':last
    };
    this.age = age;
    this.gender = gender;

    let interests = (lista) => {
        let stringInterests = '';
        let lengthInterests = lista.length;
        if (lengthInterests === 1){
            stringInterests = `${lista[0]}`;
        }
        else {
            for (i = 0;i < lengthInterests;i++){
                if (i < lengthInterests-2){
                    stringInterests +=  (`${lista[i]}, `);
                } else if (i < lengthInterests-1) {
                    stringInterests +=  (`${lista[i]}`);
                } else {
                    stringInterests += ` and ${lista[i]}`;
                }
            }
        }

        console.log(stringInterests);
        return stringInterests;
    };
    let interestsPrint = interests(interestsList);

    let pronome = (gender) => {
        let genderReturn ;
        if (gender === 'male'){
            genderReturn = 'He';
        } else {
            genderReturn = 'She';
        }
        return genderReturn;
    };

    let pronomePrint = pronome(this.gender);

    this.bio = function () {
        console.log(`${this.name.first} ${this.name.last} is ${this.age} years old. ${pronomePrint} likes ${interestsPrint}.`)
    };
    this.greetting = function () {
        console.log(`Hi! I\'m ${this.name.first}.`)
    }

}

let person1 = new Person('Bob','Smith', 32,'male',['viajar','nadar','correr','brincar','progamar']);

let person2 = new Person('Marta','Silva', 35,'femele',['andar de bicicleta','Jogar','Ler']);


lista = ['interests','oi','li',2,3,234,'rafael'];

person1.bio();

person2.bio();


 
