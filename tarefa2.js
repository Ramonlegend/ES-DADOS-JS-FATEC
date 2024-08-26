class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}

function decimalToBinary(decimal) {
  let stack = new Stack();
  let binary = "";

  while (decimal > 0) {
    stack.push(decimal % 2);
    decimal = Math.floor(decimal / 2);
  }

  while (!stack.isEmpty()) {
    binary += stack.pop();
  }

  return binary;
}

// Example usage
let decimalNumber = 42;
let binaryNumber = decimalToBinary(decimalNumber);
console.log(`Decimal: ${decimalNumber}`);
console.log(`Binary: ${binaryNumber}`);