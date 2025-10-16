const calculator = {
    add(a = 1, b = 1) {
        if (!isNaN(a) && !isNaN(b)) {
            return a + b;
        } else {
            return "Bu harf yoki matn";
        }
    },
    sub(a = 1, b = 1) {
        if (!isNaN(a) && !isNaN(b)) {
            return a - b;
        } else {
            return "Bu harf yoki matn";
        }
    },
    mul(a = 1, b = 1) {
        if (!isNaN(a) && !isNaN(b)) {
            return a * b;
        } else {
            return "Bu harf yoki matn";
        }
    },
    div(a = 1, b = 1) {
        if (b == 0) {
            return "Sonni 0 ga bo‘lish mumkin emas";
        } else if (!isNaN(a) && !isNaN(b)) {
            return Math.round(a / b);
        } else {
            return "Bu harf yoki matn";
        }
    }
};

// console.log(calculator.div(7, "a")); 
// console.log(calculator.add(5, 3));   
// console.log(calculator.mul("4", 2)); 
console.log(calculator.div(10, 0));  

