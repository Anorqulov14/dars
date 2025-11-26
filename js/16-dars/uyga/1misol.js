const user = {
    name: "Ali", 
    age: 20, 
    isStudent: true,
    getInfo(){
        return `${user.name}  ${user.age} yoshda. Talaba : ${user.isStudent}`
    }
}

console.log(user.getInfo());