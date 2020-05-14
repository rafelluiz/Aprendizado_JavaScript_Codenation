let months = [
    {shortName: 'JAN',fullName: 'January', number:1},
    {shortName: 'FEB',fullName: 'Fevereiro', number:2},
    {shortName: 'MAR',fullName: 'Março', number:3},
    {shortName: 'ABR',fullName: 'April', number:4},
    {shortName: 'MAI',fullName: 'Maio', number:5},
    {shortName: 'JUN',fullName: 'Junho', number:6},
    {shortName: 'JUL',fullName: 'Julho', number:7},
    {shortName: 'AGO',fullName: 'Agosto', number:8},
    {shortName: 'SET',fullName: 'Setembro', number:9},
    {shortName: 'OUT',fullName: 'Outubro', number:10},
    {shortName: 'NOV',fullName: 'Novembro', number:11},
    {shortName: 'DEZ',fullName: 'Dezembro', number:12},
];

let shortNameMonths = months.map(function (month) {
    console.log(` ${month.shortName} teste`);
    return month.shortName;
});

console.log(shortNameMonths);