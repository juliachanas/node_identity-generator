const fs = require('fs');
console.log(fs);

const genders = ['male', 'female'];
const maleNames = ['Adam', 'Adrian', 'Max', 'Timothy'];
const femaleNames = ['Julia', 'Jessica', 'Ana', 'Miranda'];
const lastNames = ['Doe', 'Boe', 'Northon', 'Parker'];
const people = [];

const randChoice = (arr) => arr[Math.floor(Math.random() * arr.length)];

for (let i = 0; i < 20; i++) {
  const gender = randChoice(genders);
  const firstName =
    gender === 'male' ? randChoice(maleNames) : randChoice(femaleNames);
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  const age = Math.floor(Math.random() * 50) + 18;

  people.push({ gender, firstName, lastName, age });
}

const data = JSON.stringify(people, null, 2);

fs.writeFile('people.txt', data, (err) => {
  if (err) throw err;
  console.log('File has been successfully generated! Check people.json');
});

console.log(people);
