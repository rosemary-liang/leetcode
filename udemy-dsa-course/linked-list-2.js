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
    
  }
}
