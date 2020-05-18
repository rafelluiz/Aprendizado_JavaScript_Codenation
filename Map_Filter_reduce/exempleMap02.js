const students = [
    {name: 'Anna',grade:6},
    {name: 'John',grade:4},
    {name: 'Maria',grade:9},
];

const teachers = [
    {name: 'Mark', salary: 2500},
    {name: 'Todd', salary: 3700},
    {name: 'Angela', salary: 2500},
];

let getList = (object, attribute) => {
    return object[attribute];
};

let mapList = (list,key) => {
    return list.map((item) => getList(item,key));
};


const byName = object => object.name;
const byNames = list => list.map(byName);

console.log(mapList(students,'grade'));

//console.log(byNames(students));
//console.log(byNames(teachers));