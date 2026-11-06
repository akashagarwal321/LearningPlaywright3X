// //Simple class look like below

// class BankAccount {
//     constructor(accountHolder, balance) {
//         this.accountHolder = accountHolder;
//         this.balance = balance;
//     }

//     deposit(amount) {
//         this.balance += amount;
//     }
// }



// const account = new BankAccount("Akash", 50000);

// account.deposit(5000);

// console.log(account.balance); // 55000

// //Now,
// account.balance = -1000000 /// here if you try to update the balance property... it allows --- which is wrong
// console.log(account.balance)  

// the above is happening because balance is publically available

//Making a property private -- using #



class BankAccount {

    #balance;
    constructor(accountHolder, balance) {
        this.accountHolder = accountHolder;
        this.#balance = balance;
    }

    deposit(amount) {
        this.#balance += amount;
    }

    getBalance(){
        return this.#balance;
    }
}


const account = new BankAccount("Akash",500000)

account.deposit(200)

console.log(account.getBalance()) //500200

//console.log(account.#balance); //will not work - as #balance is not accessible

//also
account.balance = 100000000;   /// this creates a separate public property called balance
console.log(account.balance)        /// this will give the public balance not #balance
console.log(account.getBalance())       // will give previous value which was update throught .deposit... 


//we can even make methods private


class BankAccount1 {

    #balance = 50000;

    #validateAmount(amount) { // this is private method... cannot be called directly outside class
        return amount > 0;
    }

    deposit(amount) {
        if (this.#validateAmount(amount)) {
            this.#balance += amount;
        }
    }

    getBalance() {
        return this.#balance;
    }
}

const account1 = new BankAccount1();

//console.log(account1.#validateAmount(100))  // cannot call this

account1.deposit(5000);

console.log(account1.getBalance()); // 55000


