class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    //edge: empty vs nonempty
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    // edge: empty, 1, multi
    if (this.length === 0) return undefined;
    let temp = this.head;
    let pre = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      while (temp.next) {
        pre = temp;
        temp = temp.next;
      }
      this.tail = pre;
      this.tail.next = null;
    }
    this.length--;
    return temp;
  }
}
