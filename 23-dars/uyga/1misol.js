class Students{
    constructor(name,age,grade){
        this.name = name
        this.age = age
        this.grade = grade
    }

    getInfo(){
        return `Ismi: ${this.name}  Yoshi: ${this.age}  Baxosi: ${this.grade}`
    }

}


let student = new Students("Eldor",20,75)

console.log(student.getInfo());
