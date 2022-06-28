/* Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

Implement the MyQueue class:

void push(int x) Pushes element x to the back of the queue.
int pop() Removes the element from the front of the queue and returns it.
int peek() Returns the element at the front of the queue.
boolean empty() Returns true if the queue is empty, false otherwise.
Notes:

You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.


Example 1:

Input
["MyQueue", "push", "push", "peek", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 1, 1, false]

Explanation
MyQueue myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1
myQueue.pop(); // return 1, queue is [2]
myQueue.empty(); // return false


Constraints:

1 <= x <= 9
At most 100 calls will be made to push, pop, peek, and empty.
All the calls to pop and peek are valid. */


// var MyQueue = function() {

// };

// /**
//  * @param {number} x
//  * @return {void}
//  */
// MyQueue.prototype.push = function(x) {

// };

// /**
//  * @return {number}
//  */
// MyQueue.prototype.pop = function() {

// };

// /**
//  * @return {number}
//  */
// MyQueue.prototype.peek = function() {

// };

// /**
//  * @return {boolean}
//  */
// MyQueue.prototype.empty = function() {

// };

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */


//youtube https://www.youtube.com/watch?v=d0h0E8CuibU
// TIME:  worst case: o(n) linear at worst case
// TIME: enqeueue and dequeue pop method is o(1) // AMORTIZED ANALYSIS because the o(n) of moving numbers from push to pop stack is not very frequent. therefore stays constant in time
// SPACE:  is o(n) because as you add more inputs, you need to add more space
class MyQueue {
  constructor( {
    this.pushStack = [];
    this.popStack = [];
  })

  push(val) {
    this.pushStack.push(val); // constant time, void return
  }

  pop() {
    if (!this.popStack.length) {
      while(this.pushStack.length) {  // while there is a length
        this.popStack.push(this.pushStack.pop()) // push popped items from pushStack to popStack
      }
    }
    return this.popStack.pop();
  }

  peek() {
    if (!this.popStack.length) {
      while(this.pushStack.length) {
        this.popStack.push(this.pushStack.pop())
      }
    }
    return this.popStack[this.popStack.length - 1 ];
  }

  empty() {
    return !this.pushStack.length && !this.popStack.length
  }
}

class myQueue {
  constructor() {
    this.pushStack = [];
    this.popStack = [];
  }

  push(val) {
    this.pushStack.push(val);
  }

  pop() {
    if (!this.popStack.length) {
      while (this.pushStack.length) {
        this.popStack.push(this.pushStack.pop())
      }
    }
    return this.popStack.pop();
  }

  peek() {
    if (!this.popStack.length) {
      while (this.pushStack.length) {
        this.popStack.push(this.pushStack.pop())
      }
    }
    return this.popStack[this.popStack.length - 1];
  }

  empty() {
    if (!this.popStack.length && !this.pushStack.length)
  }
}
