const fs = require('fs');

const genders = ['M', 'F'];
const maleNames = ['Wojtek', 'Krzysiek', 'Janek'];
const femaleNames = ['Wanda', 'Zosia', 'Genia'];
const lastNames = ['Suchodolski', 'Kononowicz', 'Kowalski'];

const randChoice = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
}

const people = [];

for (let i = 0; i < 20; i++) {
    const person = {};
    person.gender = randChoice(genders);
    if (person.gender === 'M') {
        person.name = randChoice(maleNames);
    } else {
        person.name = randChoice(femaleNames);
    }
    person.lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    if (person.gender === 'F' && person.lastName.charAt(person.lastName.length - 1) === 'i') {
        // person.lastName = person.lastName.slice(0, -1) + 'a';
        person.lastName = person.lastName.replace(/.$/, "a");
    }
    person.age = Math.floor(Math.random() * (78 - 18) + 18);
    person.email = person.name.toLowerCase() + '.' + person.lastName.toLowerCase() + '@gmail.com';
    person.phone = Math.random().toString().slice(2, 11);
    people.push(person);
}

const data = JSON.stringify(people);

fs.writeFile('people.json', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});