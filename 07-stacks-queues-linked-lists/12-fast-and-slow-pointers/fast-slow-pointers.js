// // * primitives - called or passed by value
// let a = 1;
// let b = a;
// a = 2;

// console.log(b);

// // * non-primtives[ arrays, objects] - called or passed by reference
// let c = { name: 'John' };
// let d = c;
// c.name = 'Vas';

// console.log(d.name);

function findMiddle(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow;
}
