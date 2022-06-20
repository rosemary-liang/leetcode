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
    this.tail = this.head; // head and tail pointed at same newNode
    this.length = 1;
  }

  push(value) {
    // edge cases: empty NodeList, non-empty NodeList
    const newNode = new Node(value); // create new node

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode; // append newNode
      this.tail = newNode; // reassign tail to newNode
    }
    this.length++; // increase length
    return this; // return ENTIRE LL
  }

  pop() {
    // edge cases: empty NodeList, 1-item NodeList, multi-item NodeList

    // start at head and iterate through list and need to set 2nd to last node pointer to null
    // temp - var points to last item to return. Move temp first, then pre.
    // pre - var points to 2nd to last item. set tail  = pre

    if (!this.head) return undefined; // if empty LL

    // if not empty LL
    temp = this.head;
    pre = this.head;

    while (temp.next) {
      pre = temp; // 1st does nothiing  // 2nd move pre to match temp
      temp = temp.next; // 1st moves temp to next node // 2nd move temp to next node
    }

    this.tail = pre;
    this.tail.next = null; // breaks last node off list
    this.length--;

    // if 1 node in LL, must assign h and t to null or else pointers still exist (above last 3 lines have no impact except for length)
    if (this.length === 0) {
      // if length === 0 after decrementing
      this.head = null;
      this.tail = null;
    }
    return temp; // return the item that was popped off
  }

  unshift(value) {
    // edge cases: with items, or head node are null
    const newNode = new Node(value);

    // if empty
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head; // adds newNode as first item in LL
      this.head = newNode; // moves head to newNode
    }
    this.length++;
    return this;
  }

  shift() {
    // remove item and return it
    //edge case: only 1 item, no items, multiple items

    if (!this.head) return undefined;
    const temp = this.head;
    this.head = this.head.next;
    temp.next = null; // break the link
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }

  get(index) {
    // cannot use index not btwn 0 and this.length
    if (index < 0 || index >= this.length) return undefined;
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next; // move temp pointer until you get to index
    }
    return temp;
  }

  set(index, value) {
    let temp = this.get(index); // reuse code in get method & automatically moves pointer to undefined or target node
    if (temp) {
      temp.value = value;
      return true;
    }
    return false; // temp is undefined
  }

  insert(index, value) {
    // edge case: insert at index 0(unshift); insert at index end (push); insert in middle
    // edge case: insert at invalid index
    if (index < 0 || index > this.length) return false;
    if (index === 0) return this.unshift(value);
    if (index === this.length) = this.push(value);

    const newNode = new Node(value);
    const temp = this.get(index - 1);
    newNode.next = temp.next; // connect next of newNode
    temp.next = newNode; // have temp point to newNode to insert into LL
    this.length++;
    return true;
  }
}
