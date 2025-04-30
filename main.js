import { HashMap } from "./hashMap.js";

const test = new HashMap();
console.log(test.hash("kevin") === test.hash("kevin"));
console.log(test.hash("maelle") === test.hash("maelle"));
console.log(test.hash("evikn") !== test.hash("kevin"));

// console.log(test.hash("dog"));
// console.log(test.hash('ice cream'))
// console.log(test.hash('banana'))
// console.log(test.hash('carrot'))
// console.log(test.hash('elephant'))
// console.log(test.hash('grape'))
// console.log(test.hash('hat'))
// console.log(test.hash('jacket'))
// console.log(test.hash('kite'))
// console.log(test.hash('lion'))
// console.log(test.hash('frog'))
// console.log(test.hash("moon"));
// console.log(test.hash('apple'));

test.set('apple', 'red');
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

console.log(test.get("apple")); // red
console.log(test.get("banana")); // yellow
console.log(test.get("bucket hat")); // null

console.log(test.has("banana")); // true
console.log(test.has("ban")); // false

console.log(test.length());
test.set('jacket', 'black jacket');
console.log(test.length());


test.set('moon', 'silver')
test.set('moona', 'silver')
test.set('etodna', 'silver')
console.log(test.entries());
test.set('ttodna', 'silver')

console.log(test.keys());
console.log("1");
console.log(test.entries());
console.log("3");

console.log(test.remove("ban")); // false
console.log(test.remove("banana")); // true

test.clear();
console.log(test);
