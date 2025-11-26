class ValidationError extends Error {
    constructor(message) {
        super(message); 
        this.name = "ValidationError"; 
    }
}

class User {
    constructor(name, age, email) {
        this.name = name;
        this.setAge(age);
        this.setEmail(email);
    }

    setAge(age) {
        if (age < 0) {
            throw new ValidationError("Invalid age");
        }
        this.age = age;
    }

    setEmail(email) {
        if (!email.includes("@")) {
            throw new ValidationError("Invalid email");
        }
        this.email = email;
    }
}

try {
    const user1 = new User("Eldor", -5, "eldor@gmail.com");
} catch (error) {
    if (error instanceof ValidationError) {
        console.log(error.message);
    } else {
        console.log(error.message);
    }
}
