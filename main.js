require('dotenv').config(); 
const message = require('./message');
const fs = require('fs');

const name = process.env.NAME; 
const number = process.env.NUMBER; 

const result = message.create(name, number);

fs.writeFileSync('result.txt', result);

console.log(result);
