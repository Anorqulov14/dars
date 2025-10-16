class Order{
    constructor() {
        this.zakaz = [];
        this.narx = 0;
    }
    addItem(name, price){
        price = Number(price)
        if (name == "" || price < 0) {
            throw new Error("Invalid item")
        }else{
            this.zakaz.push(name)
            this.narx += price
        }   
    }

    getTotal(){
        return this.narx
    }

    getChek(){
        return this.zakaz
    }
}


try {
    let user = new Order()
    user.addItem("osh",25)
    user.addItem("osh",'25')
    // user.addItem("yog",-5)
    console.log(user.getTotal());
    console.log(user.getChek());
    
} catch (error) {
    console.log(error.message);
}