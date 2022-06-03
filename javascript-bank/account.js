/* exported Account */
// class Account {
//   constructor(number, holder) {
//     this.number = number;
//     this.holder = holder;
//     this.transactions = [];
//   }

//   deposit(amount) {
//     if (Number.isInteger(amount) && amount > 0) {
//       const deposit = new Transaction('deposit', amount)
//       this.transactions.push(deposit);
//       return true;
//     } else {
//       return false;
//     }
//   }

//   withdraw(amount) {
//     if (Number.isInteger(amount) && amount < 0) {
//       const withdrawal = new Transaction('withdrawal', amount);
//       this.transactions.push(withdrawal);
//       return true;
//     } else {
//       return false;
//     }
//   }

//   getBalance() {
//     if this.transactions.length < 1 return 0
//     if (this.transactions.length >= 1) {
//       const deposits = this.transactions.filter('deposit');

//     }
//   }
// }

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}


Account.prototype.deposit = function(amount) {
    if (Number.isInteger(amount) && amount > 0) {
      const deposit = new Transaction('deposit', amount);
      this.transactions.push(deposit);
      return true;
    } else {
      return false;
    }
  }

Account.prototype.withdraw = function(amount) {
    if (Number.isInteger(amount) && amount < 0) {
      const withdrawal = new Transaction('withdrawal', amount);
      this.transactions.push(withdrawal);
      return true;
    } else {
      return false;
    }
  }

Account.prototype.getBalance = function() {
    if this.transactions.length < 1 return 0
    if (this.transactions.length >= 1) {
      const deposits = this.transactions.filter('deposit');

    }
  }
