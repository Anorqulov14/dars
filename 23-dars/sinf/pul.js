class Payment {
    constructor(name, balance){
        this.name = name;
        this._balance = balance;
    }
    
    isEnough = 0;
    
    get balance(){
        return `${this.name}ning balansi: ${this._balance}$`;
    }
    
    set transfer(amount){
        if (this._balance - amount < 0){
            this.isEnough += 1;
            console.log(`Mablag' yetarli emas`);
        }else {
            this._balance = this._balance - amount;
        }
    }
        
    set repl(amount){
        this._balance = this._balance + amount;
    }

}

const dilshod = new Payment('Dilshod', 1000);
const eldor = new Payment('Eldor', 5000);

console.log(dilshod.balance);
console.log(eldor.balance);
eldor.transfer = 6000;
console.log(eldor.balance);
dilshod.repl = 6000;
console.log(dilshod.balance);



