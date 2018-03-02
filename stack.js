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
  return list.top.data;
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

const is_palindrome = sentence => {
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

// MATCHING PARENTHESES

// const matchingParens = code => {
//   code = code.replace(/[^()]/g, '');
//   const check = new Stack();
//   for (let i=0; i<code.length; i++) {
//     if (code[i] === '(') {
//       check.push('(');
//     } if (code[i] === ')') {
//       const removedParen = check.pop();
//       if (removedParen === null) {
//         return false;
//       }
//     }
//   }
//   if (check.top !== null) {
//     return false;
//   }
//   return true;
// };

// const matchingBrackets= code => {
//   code = code.replace(/[^()[\]{}]/g, '');
//   const checkBrackets = new Stack();
//   for (let i=0; i<code.length; i++) {
//     if (code[i] === '(') {
//       checkBrackets.push('(');
//     } if (code[i] === ')') {
//       const removedParen = checkBrackets.pop();
//       if (removedParen === '{') {
//         throw new Error('Was expecting } but found a )');
//       }
//       if (removedParen === '[') {
//         throw new Error('Was expecting ] but found a )');
//       }
//     }
//     if (code[i] === '{') {
//       checkBrackets.push('{');
//     } if (code[i] === '}') {
//       const removedParen = checkBrackets.pop();
//       if (removedParen === '(') {
//         throw new Error('Was expecting ) but found a }');
//       }
//       if (removedParen === '[') {
//         throw new Error('Was expecting ] but found a }');
//       }
//     }
//     if (code[i] === '[') {
//       checkBrackets.push('[');
//     } if (code[i] === ']') {
//       const removedParen = checkBrackets.pop();
//       if (removedParen === '(') {
//         throw new Error('Was expecting ) but found a ]');
//       }
//       if (removedParen === '{') {
//         throw new Error('Was expecting } but found a ]');
//       }
//     }
//   }
//   if (checkBrackets.top !== null) {
//     return false;
//   }
//   return true;
// };

const matchingCode= code => {
  code = code.replace(/[^"'()[\]{}]/g, '');
  const checkCode = new Stack();
  let quote = false;

  for (let i=0; i<code.length; i++) {
    if (!quote) {
      if (code[i] === '"') {
        checkCode.push('"');
        quote = true;
      } if (code[i] === '\'') {
        checkCode.push('\'');
        quote = true;
      }

      if (code[i] === '(') {
        checkCode.push('(');
      } if (code[i] === ')') {
        const removedParen = checkCode.pop();
        if (removedParen === '{') {
          throw new Error('Was expecting } but found a )');
        }
        if (removedParen === '[') {
          throw new Error('Was expecting ] but found a )');
        }
      }
      if (code[i] === '{') {
        checkCode.push('{');
      } if (code[i] === '}') {
        const removedParen = checkCode.pop();
        if (removedParen === '(') {
          throw new Error('Was expecting ) but found a }');
        }
        if (removedParen === '[') {
          throw new Error('Was expecting ] but found a }');
        }
      }
      if (code[i] === '[') {
        checkCode.push('[');
      } if (code[i] === ']') {
        const removedParen = checkCode.pop();
        if (removedParen === '(') {
          throw new Error('Was expecting ) but found a ]');
        }
        if (removedParen === '{') {
          throw new Error('Was expecting } but found a ]');
        }
      }
    } else {
      if(code[i] === peek(checkCode)) {
        checkCode.pop();
        quote = false;
      }
    } 
  }

  if (checkCode.top !== null) {
    return false;
  }

  return true;
};

// console.log(matchingBrackets('{hello("{samuel"})(gould])[]}'));

// console.log(matchingCode('(45())""[]{}'));
// console.log(matchingCode('(()")"[)]'));
// console.log(matchingCode('{hello("{samuel")(gould)[]}'));