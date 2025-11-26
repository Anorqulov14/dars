class Player {
    constructor(name, health) {
        this.name = name;
        this.health = health;
    }

    takeDamage(amount) {
        this.health -= amount; 
        if (this.health <= 0) {
            throw new Error("Game Over");
        }
    }
}

try {
    const player1 = new Player("Eldor", 50);

    player1.takeDamage(20); 
    player1.takeDamage(15);
    player1.takeDamage(20); 
} catch (error) {
    console.log("");
}
