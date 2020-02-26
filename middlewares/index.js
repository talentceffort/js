const math = require('./math');
const fs = require('fs');

const { sum } = math;

console.log(sum(5, 5));

const data = fs.readFileSync('./data.txt', 'utf8');

console.log(data);
