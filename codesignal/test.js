const makeCounter = () => {
  let counter = 0;
  const changeBy = (val) => {
    counter += val;
  }

  return {
    increment: () => {
      changeBy(1);
    },
    decrement: () => {
      changeBy(-1);
    },
    value: () =>{
      return counter;
    }

  }
}


var makeCounter = function () {
  var counter = 0;
  var changeBy = function(val) {
    counter += val;
  }

  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    value: function () {
      return counter;
    }
  }
}



const obj = {
  sayHello: function  () {
    return 'hello'
  }
}


// ES5
function Person (n, a) {
  this.n = n;
  this.a = a;
}

Person.prototype.getN = function () {
  return this.getN
}

Person.prototype.setN = function (newName) {
  this.n = newName;
}

function Student (n, a, g) {
  Person.call(this, n, a);
  this.g = g;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.getG = function () {
  return this.g;
}


//ES6
class Person {
  constructor(n, a) {
    this.n = n;
    this.a = a;
  }

   getN() {
     return this.n;
   }

   setN(newName) {
     this.n = newName;
   }
}

class Student extends Person {
  constructor(n, a, g) {
    super(n, a);
    this.g = g;
  }


}


function makeAdder(x) {
  return function(y) {
    return x + y;
  }
}

const add5 = makeAdder(5);
add5(2); // returns 7
