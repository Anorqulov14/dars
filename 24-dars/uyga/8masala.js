class User {
    constructor(name, age, email) {
        this.name = name;
        this.setAge(age); 
        this.setEmail(email); 
    }

    setAge(age) {
        if (age < 0) {
            throw new Error("Invalid age");
        }
        this.age = age;
    }

    setEmail(email) {
        if (!email.includes("@")) {
            throw new Error("Invalid email");
        }
        this.email = email;
    }
}

try {
    let user1 = new User("Eldor", -5, "aaa@gmail.com");
    console.log(user1);
} catch (error) {
    console.log(error.message); 
}
