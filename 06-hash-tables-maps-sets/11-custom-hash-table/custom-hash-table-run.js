const HashTable = require('./custom-hash-table');

const myHashTable = new HashTable();

myHashTable.set('John', '555-234-345');
myHashTable.set('James', '555-234-342');
myHashTable.set('Sara', '555-278-342');

myHashTable.remove('James');

// console.log(myHashTable.get('James'));
// console.log(myHashTable.has('James'));
// console.log(myHashTable.has('John'));

myHashTable.clear();

// myHashTable.printTable();
