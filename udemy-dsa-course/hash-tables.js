class HashTable {
  constructor(size = 7) {
    this.dataMap = new Array(size);
  }

  // O(1)
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }
    return hash;
  }

  // O(1)
  set(key, value) {
    let index = this._hash(key);
    if (!this.dataMap[index]) {
      this.dataMap[index] = [];
    }
    this.dataMap[index].push([key, value]);
    return this;
  }

  // O(1) if can find in one operation
  // (disregard because below) O(n) worst case if have to go through linked list at index
  // hash is efficient at hashing at diff indexes, so get is considered O(1)!!!
  get(key) {
    let index = this._hash(key);
    if (this.dataMap[index]) {
      for (let i = 0; i < this.dataMap[index].length; i++) {
        if (this.dataMap[index][i][0] === key) {
          return this.dataMap[index][i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    let allKeys = [];
    for (let i = 0; i < this.dataMap.length; i++) {
      if (this.dataMap[i]) {
        for (let j = 0; j < this.dataMap[i].length; j++) {
          allKeys.push(this.dataMap[i][j][0]);
        }
      }
    }
    return allKeys;
  }
}

//O(n)^2
function itemInCommon(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) return true;
    }
  }
  return false;
}

let array1 = [1, 3, 5];
let array2 = [2, 4, 5];

itemInCommon(array1, array2);

// O(n)
function itemInCommon(arr1, arr2) {
  let obj = {};
  for (let i = 0; i < arr1.length; i++) {
    obj[arr1[i]] = true; // set all items in arr1 as keys in object
  }
  for (let j = 0; j < arr2.length; j++) {
    if (obj[arr2[j]]) return true; // if item in arr2 is a key in object, return true
  }
  return false;
}

let array1 = [1, 3, 5];
let array2 = [2, 4, 5];

itemInCommon(array1, array2);
