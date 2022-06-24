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

  push(value) {
    // edge, empty vs non empty
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode; // connect NN
      this.tail = newNode; // reassign tail to NN
    }
  }

  push(value) {
    // edge: empty vs nonempty
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
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

  pop() {
    let temp = this.head;
    let pre = this.head;

    if (this.length === 0) return undefined;
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

  pop() {
    let temp = this.head;
    let prev = this.head;
    if (this.length === 0) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      while (temp.next) {
        prev = temp;
        temp = temp.next;
      }
      this.tail = prev;
      this.tail.next = null;
    }
    this.length--;
    return temp;
  }

  unshift(value) {
    // edge: empty nonempty
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  unshift(value) {
    // edge empty nonempty
    const newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    // edge: empty, 1, multi
    if (this.length === 0) return undefined;
    let temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      temp.next = null;
    }
    this.length--;
    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }

  set(index, value) {
    // edge: empty, invalid index
    let temp = this.get();
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    // edge insert at first, last, middle
    // edge invalid index

    if (index < 0 || index > this.length) return false;
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);

    const newNode = new Node(value);
    const temp = this.get(index - 1);
    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    // edge remove 1st, last, middle
    // edge invalid index
    if (index < 0 || index > this.length) return false;
    if (index === 0) return this.shift();
    if (index === this.length) return this.pop();

    const before = this.get(index - 1);
    const temp = before.next;
    before.next = temp.next; // connect before to temp.next(skip over temp)
    temp.next = null; // disconnect temp
    this.length--;
    return temp;
  }

  reverse() {
    // need 3 pointers prev temp next

    let temp = this.head;

    // reverse h & t
    this.head = this.tail;
    this.tail = temp;
    let next = temp.next; // initialize as head.next
    let prev = null; // initialize as null

    for (let i = 0; i < this.length; i++) {
      next = temp.next; // move next to NN; 1st already true. 2nd gives access to NN
      temp.next = prev; // reverse pointer
      prev = temp; // move prev to NN
      temp = next; // move temp to next
    }
    return this;
  }

  reverse() {
    // 3 pointers, prev, temp, next
    let temp = this.head;
    this.head = this.tail;
    this.tail = this.head;
    let next = temp.next;
    let prev = null;

    for (let i = o; i < this.length; i++) {
      next = temp.next; // move next to give use access to NN
      temp.next = prev; // reverse pointer direction
      prev = temp; // move prev to next node
      temp = next; // move temp to next node
    }
    return this;
  }

  reverse() {
    // 3 pointers prev temp next
    let temp = this.head;
    this.head = this.tail;
    this.tail = this.head;
    let prev = null;
    let next = temp.next;

    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    return this;
  }
}
