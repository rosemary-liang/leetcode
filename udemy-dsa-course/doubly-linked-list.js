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
    let temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev; // move tail to the prev node (reassign tail)
      this.tail.next = null; // break off next link of temp
      temp.prev = null; // break off prev link of temp
    }
    this.length--;
    return temp;
  }

  unshift(value) {
    //edge: empty list, non empty list
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head; // newNode points to head
      this.head.prev = newNode; // head points to newNode
      this.head = newNode; // reassign head
    }
    this.length++;
    return this;
  }

  shift() {
    // edge: empty, 1 item, multiple items
    if (this.length === 0) return undefined;
    let temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next; // reassign head
      this.head.prev = null; // break item prev pointer
      temp.next = null; // break item next pointer
    }
    this.length--;
    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let temp = this.head;

    if (index < this.length / 2) {
      for (let i = 0; i < index; i++) {
        // check if statement condition!! between index, length, length -1
        temp = temp.next; // move temp until you get to correct index
      }
    } else {
      temp = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        temp = temp.prev; // move temp until you get to correct index
      }
    }
    return temp;
  }

  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      // if temp is at a valid index
      temp.value = value; // reassign temp value in-place
      return true;
    }
    return false;
  }

  insert(index, value) {
    // edge: index 0 - unshift; index = length - push, or insert in middle
    if (index < 0 || index > this.length) return false;
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);

    const newNode = new Node(value);
    const before = this.get(index - 1); // O(n)
    const after = before.next; // O(n) because using before
    before.next = newNode; // before points to newNode going forward
    newNode.next = after; // newNode points to after going forward
    newNode.prev = before; // NEW! newNode points to before going backward
    after.prev = newNode; // NEW! after points to newNode going backward
    this.length++;
    return true;
  }

  remove(index) {
    //edge: remove first, remove last, remove middle
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length) return this.pop();

    let temp = this.get(index);
    temp.prev.next = temp.next; // point prev to next (point forward skipping temp)
    temp.next.prev = temp.prev; // point next to prev (point backward skipping temp)
    temp.next = null; // disconnect temp
    temp.prev = null; // disconnect temp
    this.length--;
    return temp;
  }
}
