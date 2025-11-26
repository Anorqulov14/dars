class Phone {
    constructor(battery = 50) {
        this.battery = battery;  
        this.isCharging = false;  
    }

    plugIn() {
        this.isCharging = true;
    }

    unplug() {
        this.isCharging = false;
    }

    charge(percent) {
        if (!this.isCharging) {
            throw new Error("Telefon zaryadga ulangan emas!");
        }

        this.battery += percent;

        if (this.battery > 100) {
            this.battery = 100;
            throw new Error("Batareya toliq zaryadlandi!");
        }
    }

    use(percent) {
        this.battery -= percent;

        if (this.battery <= 0) {
            this.battery = 0;
            throw new Error("Telefon ochdi!");
        }
    }
}

try {
    const myPhone = new Phone(90);
    myPhone.plugIn();
    myPhone.charge(15);
} catch (error) {
    console.log(error.message);
}

try {
    const phone2 = new Phone(10);
    phone2.unplug();
    phone2.use(5);
    phone2.use(10);  
} catch (error) {
    console.log(error.message);
}
