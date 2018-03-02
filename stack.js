'use strict';

class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    if(this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }
    const node = new _Node(data, this.top);
    this.top = node;
    return this.top;
  }

  pop() {
    if(this.top === null) {
      return null;
    }
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

const peek = list => {
  if (list.top === null) {
    return null;
  }
  console.log(list.top.data);
};

const display = list => {
  if (list.top === null) {
    return null;
  }
  let item = list.top;
  while(item !== null) {
    console.log(item.data);
    item = item.next;
  }
};

const main = () => {
  // const starTrek = new Stack();
  // starTrek.push('Kirk');
  // starTrek.push('Spock');
  // starTrek.push('McCoy');
  // starTrek.push('Scotty');
  // peek(starTrek);
  // display(starTrek);
  // console.log(starTrek.pop());
  // console.log(starTrek.pop());
};

// Kirk is the first item in my stack.

main();

// PALINDROME

// const is_palindrome = sentence => {
//   sentence = sentence.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
//   const forward = new Stack();
//   const backward = new Stack();
//   for (let i=0; i<sentence.length; i++) {
//     forward.push(sentence[i]);
//   }
//   for (let i=sentence.length-1; i>=0; i--) {
//     backward.push(sentence[i]);
//   }
//   while (forward.top !== null && backward.top !== null) {
//     if (forward.pop() !== backward.pop()) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(is_palindrome('dad'));
// console.log(is_palindrome('A man, a plan, a canal: Panama'));
// console.log(is_palindrome('1001'));
// console.log(is_palindrome('Tauhida'));