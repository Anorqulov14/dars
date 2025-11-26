class Calculator {
    divide(a, b) {
        try {
            if (typeof a !== "number" || typeof b !== "number") {
                throw new TypeError("Faqat son kiriting!");
            }

            if (b === 0) {
                throw new RangeError("0 ga bolish mumkin emas!");
            }

            return a / b;
        } 
        catch (error) {
            return `Xato: ${error.message}`;
        }
    }

    sqrt(n) {
        try {
            if (typeof n !== "number") {
                throw new TypeError("Faqat son kiriting!");
            }

            if (n < 0) {
                throw new RangeError("Manfiy sonning ildizini topib bolmaydi!");
            }

            return Math.sqrt(n);
        } 
        catch (error) {
            return `Xato: ${error.message}`;
        }
    }
}

let calc = new Calculator();

console.log(calc.divide(6, 0));   
console.log(calc.sqrt(-9));      
console.log(calc.sqrt(25));       
console.log(calc.sqrt("salom"));  



