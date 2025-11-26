class BankAccount{
    #balance = 0

    deposit(amount){
        if (amount < 0) {
            throw new Error("Invalid deposit")
        }else{
            this.#balance += amount
        }
    }

    withdraw(amount){
        if (amount > this.#balance) {
            throw new Error("Insufficient funds")
        }else{
            this.#balance -= amount
        }
    }
}

try {
    let user = new BankAccount()
    user.deposit(10)
    // user.deposit(-10)
    // user.withdraw(11)
    user.withdraw(9)

} catch (error) {
    console.log(error.message);
}