class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    // edge: empty, 1 item, multiple items
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode; // connect new node as next
      newNode.prev = this.tail; // connect new node to prev
      // ^^ THIS LINE IS DIFFERENT FROM SINGLY LL!!!
      this.tail = newNode; // moves tail to proper node
    }
    this.length++;
    return this;
  }

  pop() {
    // O(1) with doubly LL
    // edge: 1 item only, no items, multiple items
    if (this.length === 0) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let temp = this.tail;
      this.tail = this.tail.prev; // move tail to the prev node
      this.tail.next = null; // break off next link of temp
      temp.prev = null; // break off prev link of temp
    }
    this.length--;
    return temp;
  }
}
