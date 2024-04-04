class BankAccount {
    constructor(accountNumber, ownerName, balance) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log("Insufficient funds");
        }
    }

    getBalance() {
        return this.balance;
    }

    displayAccountInfo() {
        console.log("Account Number:", this.accountNumber);
        console.log("Owner Name:", this.ownerName);
        console.log("Balance:", "$" + this.balance);
    }
}

// Create two instances of the BankAccount class
let account1 = new BankAccount(1001, "Prosanjit Biswas", 1000);
let account2 = new BankAccount(1002, "awshan biswas", 5000);

// Demonstrate the functionality of the methods
console.log("Before transactions:");
account1.displayAccountInfo();
account2.displayAccountInfo();

console.log("\nDepositing to account 1:");
account1.deposit(200);
account1.displayAccountInfo();

console.log("\nWithdrawing from account 2:");
account2.withdraw(500);
account2.displayAccountInfo();

console.log("\nTrying to withdraw more than available balance from account 1:");
account1.withdraw(1000);

console.log("\nAfter transactions:");
account1.displayAccountInfo();
account2.displayAccountInfo();
