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

const byName = object => object.name;
const byNames = list => list.map(byName);

console.log(byNames(students));
console.log(byNames(teachers));