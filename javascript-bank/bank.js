/* exported Bank */
class Bank {
  constructor() {
    this.nextAccountNumber = this.nextAccountNumber;
    this.accounts = [];
  }

  openAccount(holder, balance) {
    if (Number.isInteger(balance) && balance > 0) {
      const newAccount = new Account(this.nextAccountNumber, holder);
      newAccount.deposit(balance);
      this.accounts.push(newAccount);
      this.nextAccountNumber++;
      return newAccount.number;
    }
  }

  getAccount(number) {
    if (Number.isInteger(number)) {
    for (let i = 0; i < this.accounts.length; i++) {
      if (this.accounts[i].number === number) {
        return this.accounts[i];
        }
      }
    }
    return null
  }

  getTotalAssets() {
    let totalAssets = 0;
    for (let accounts of this.accounts) {
      const balance = accounts.getBalance();
      totalAssets += balance;
    }
    return totalAssets;
  }
}
