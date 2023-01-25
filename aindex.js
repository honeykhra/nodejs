const addFn = require("./add.js");

console.log("Hello from index.js");
console.log(addFn(3, 4));
console.log(addFn(1, 2));

const superHero = require("./moduleCaching.js");
console.log(superHero.getName());
superHero.setName("SuperMan");
console.log(superHero.getName());

const newSuperHero = require("./moduleCaching.js");
console.log(newSuperHero.getName());
