class Node {
  constructor(value) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.top = newNode;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;

    let temp = this.top;
    this.top = this.top.next; // move top to point to node before
    temp.next = null; // disconnect last element from stack
    this.length--;
    return temp;
  }
}
