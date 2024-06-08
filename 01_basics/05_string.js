const name = "Hritik";
const repoCount = 50

//console.log(name + repoCount); //outdated way to add string like this

console.log(`My name is ${name} and my repoCount is ${repoCount}`);


const gameName = new String ("Hritik-HC")

//console.log(gameName.length)
//console.log(gameName.toUpperCase())
//console.log(gameName.charAt(4));
//console.log(gameName.indexOf('t'))

const newString = gameName.substring(0, 5)
console.log(newString);

const anotherString = gameName.slice(0, 8)
console.log(anotherString)