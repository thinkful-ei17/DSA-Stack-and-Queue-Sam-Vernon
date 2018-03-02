'use strict';

class _Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.previous = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
	
  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    } 
    if (this.last) {
      node.next = this.last;
      this.last.previous = node;
    }
    this.last = node;
  }
	
  dequeue() {
    if (this.first === null) {
      return null;
    }
    const node = this.first;
		this.first = this.first.previous;
    if (this.last === node) {
      this.last = null;
    }
    return node.data;
  }
}

const peek = queue => {
  if (queue.first === null) {
    return null;
  }
  return queue.first.data;
};

const display = queue => {
  if (queue.first === null) {
    return null;
  }
  let item = queue.first;
  while (item !== null) {
    console.log(item.data);
    item = item.previous;
  }
};

// const main = () => {
  // const starTrekQ = new Queue();
  // starTrekQ.enqueue('Kirk');
  // starTrekQ.enqueue('Spock');
  // starTrekQ.enqueue('Uhura');
  // starTrekQ.enqueue('Sulu');
  // starTrekQ.enqueue('Checkov');
  // // console.log(peek(starTrekQ));
  // display(starTrekQ);
  // starTrekQ.dequeue();
  // starTrekQ.dequeue();
  // console.log('-----------------------');
  // display(starTrekQ);
// };

// main();

// SQUARE DANCE PAIRING 

const maleDancers = new Queue();
const femaleDancers = new Queue();

const dancePartners = dancer => {
  if (dancer[0] === 'M' && peek(femaleDancers) !== null) {
    dancer = dancer.slice(2);
    return `Female dancer is: ${femaleDancers.dequeue()} and the male dancer is: ${dancer}`;
  } else if (dancer[0] === 'F' && peek(maleDancers) !== null) {
    dancer = dancer.slice(2);
    return `Female dancer is: ${dancer} and the male dancer is: ${maleDancers.dequeue()}`;
  } else if (dancer[0] === 'M') {
    dancer = dancer.slice(2);
    maleDancers.enqueue(dancer);
  } else {
    dancer = dancer.slice(2);
    femaleDancers.enqueue(dancer);
  }
};

console.log(dancePartners('F Jane'));
console.log(dancePartners('M Frank'));
console.log(dancePartners('M John'));
console.log(dancePartners('M Sherlock'));
console.log(dancePartners('F Madonna'));
console.log(dancePartners('M David'));
console.log(dancePartners('M Christopher'));
console.log(dancePartners('F Beyonce'));
console.log(maleDancers);
console.log(femaleDancers);

// OPHIDIAN BANK

// const ophidianBankQueue = new Queue();

// const newArrival = name => {
//   ophidianBankQueue.enqueue(name);
// };

// const paperworkCheck = () => {
//   if (Math.random() < .25) {
//     return false;
//   }
//   return true;
// };

// const handleCustomer = () => {
//   const customer = ophidianBankQueue.dequeue();
//   if (!paperworkCheck()) {
//     ophidianBankQueue.enqueue(customer);
//   }
// };

// newArrival('Sam');
// display(ophidianBankQueue);
// console.log('------------------');
// newArrival('Joe');
// newArrival('Mike');
// handleCustomer();
// display(ophidianBankQueue);
// console.log('------------------');
// newArrival('Danny');
// newArrival('Georgia');
// handleCustomer();
// display(ophidianBankQueue);
// console.log('------------------');
// newArrival('Laura');
// handleCustomer();
// display(ophidianBankQueue);
// console.log('------------------');
// newArrival('Max');
// newArrival('Ruggles');
// handleCustomer();
// display(ophidianBankQueue);
// console.log('------------------');

