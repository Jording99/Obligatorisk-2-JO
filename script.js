console.log('Hello!');
console.log('Hello World!');

//Variables

//Let variables saving the number 28 on the age name
let age = 25;
//Charning mathod:
console.log('Min alder er:', age);
//Tamplate litteral
console.log(`Min alder er ${age}`);
console.log(typeof age);

//Const variables saves the string Julie on name name.
const name = 'Jørgen';
console.log('Mitt navn er:', name);
console.log(typeof name);

// Const variables saving the boolean true on the name
const isPresent = true;
console.log('Er tilstede?', isPresent);
console.log(typeof isPresent);

//Two const variables saving strings
//One const variable saving the data from the two first variables
const firstName = 'Jørgen';
const lastName = 'Ording';
const fullName = firstName + ' ' + lastName;
console.log(fullName, 'er navnet mitt');

const htmlElement = document.querySelector('#javaScriptData');
htmlElement.textcontent = fullName;
