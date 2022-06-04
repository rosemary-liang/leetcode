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


