function yosh(arr){
    let {age} = arr
    return 18 <= age ? "underage" : "adult"

}


let user = { name: "Ali", age: 18, hobby: "football" };
console.log(yosh(user));

