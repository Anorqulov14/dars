class Animal{
    constructor(name,sound){
        this.name = name
        this.sound = sound
    }

    makeSound(){
        return `${this.name} ning ovozi ${this.sound}`
    }
}

class Dogs extends Animal{
    constructor(name) {
        super(name, "Woof");
    }
}

class Cats extends Animal{
    constructor(name) {
        super(name, "meow");
    }
}


let dog1 = new Dogs("Rex");
let cat1 = new Cats("mushu");

console.log(dog1.makeSound());
console.log(cat1.makeSound());
