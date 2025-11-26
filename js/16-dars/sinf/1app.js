const students = {
    ism : "Elyor",
    yosh : 17,
    fakultet: "IT",
    kurs: "Web praktikum",
    baholar: {
        matematika: 5,
        english: 3,
        fizika: 3
    },
    budget(str){
        if(str == 'grand'){
            return true
        }else{
            return false
        }
    },
    highscore(){
        let a = students.baholar.matematika
        for(let i in students.baholar){
            if(a < students.baholar[i]){
                a = students.baholar[i]
            }
        }
        return a
    },
    averageRating(){
        let a = 0
        let b = 0
        for(let i in students.baholar){
            a += students.baholar[i]
            b +=1
        }

        a  = a / b
        return a.toFixed(2)
    }
}



// console.log(students.budget("grand"));
// console.log(students.highscore());
console.log(students.averageRating());

