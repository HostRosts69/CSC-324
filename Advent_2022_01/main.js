const fs = require('fs');
console.log(process.cwd());
let input = fs.readFileSync(process.cwd() + "/Advent_2022_01/input.txt", 'utf8');
console.log(input);

const splitLines = str => str.split(/\n/);
let input2 = splitLines(input.toString);
console.log(input.toString);
