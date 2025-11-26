class Product {
    constructor(name, price) {
        if (price < 0) {
            throw new Error("Invalid price");
        }
        this.name = name;
        this.price = price;
    }
}

class Cart {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    getTotal() {
        let total = 0;
        for (let item of this.products) {
            total += item.price;
        }
        return total;
    }
}

try {
    const p1 = new Product("Apple", 5);
    const p2 = new Product("Banana", 3);

    const cart = new Cart();
    cart.addProduct(p1);
    cart.addProduct(p2);

    console.log("Jami narx:", cart.getTotal());
} catch (error) {
    console.log(error.message);
}
