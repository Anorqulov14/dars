class BankAccount{
    #balance;

    constructor(owern,balance){
        this.owern = owern
        this.#balance = balance
    }

    get balance() {
        return `${this.owern}ning balansi: ${this.#balance}$`;
    }

    set rebalance(value) {
        return value >= 0?this.#balance = value:"xato"
    }

    deposit(amount){
        return this.#balance += amount
    }

    withdraw(amount){
        return this.#balance > amount?this.#balance -= amount:"Yetarli mablag' yo'q"
    }

    getBalance(){
        return this.#balance
    }
}

let user1 = new BankAccount("Eldor",500)


// console.log(user1.deposit(500));
// console.log(user1.withdraw(300));
// console.log(user1.getBalance());
// console.log(user1.getBalance());

console.log(user1.balance);
user1.rebalance = 300
console.log(user1.balance);





