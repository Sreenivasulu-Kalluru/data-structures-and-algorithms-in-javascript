const nameMap = new Map([
  [1, 'John'],
  [2, 'Jack'],
  [3, 'Jill'],
]);

const myFunction = () => {};
const myObj = {};

const map2 = new Map([
  ['name', 'John'],
  [1, 'number'],
  [true, 'really true'],
  [null, 'null'],
  [myFunction, 'my function'],
  [myObj, 'my object'],
]);

// console.log(map2);

// * Get Values
// console.log(nameMap.get(1));
// console.log(map2.get(myFunction));
// console.log(map2.get(myObj));

// * Set Values
nameMap.set(4, 'Mike');
nameMap.set(5, 'Sara');

// * Check Values
console.log(nameMap.has(1));
console.log(nameMap.has(10));

// * Remove Values
nameMap.delete(1);
console.log(nameMap.has(1));

// * Get size
console.log(nameMap.size);

// * Iterating over a map - using for of loop
for (let [key, value] of nameMap) {
  console.log(key, value);
}

// * Iterating over a map - using foreach higher order array method
nameMap.forEach((value, key) => console.log(key, value));

// * Get keys
console.log(nameMap.keys());

// * Get values
console.log(nameMap.values());

// * clear map
nameMap.clear();

console.log(nameMap.size);
