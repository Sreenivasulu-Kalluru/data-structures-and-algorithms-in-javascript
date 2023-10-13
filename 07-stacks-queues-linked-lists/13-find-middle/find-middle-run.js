const findMiddle = require('./find-middle');
const { LinkedList } = require('./linked-list');

const list = new LinkedList();
list.add('a');
list.add('b');
list.add('c');
list.add('d');
list.add('e');
list.add('f');

const result = findMiddle(list);

console.log(result);
