let pulBerish = false

let vada = new Promise((resolve,reject) =>{{
    setTimeout(() => {
        if (pulBerish) {
            resolve(`hello world`)
        }else{
            reject(`Bye world`)
        }
    }, 5000);
}})


vada.then(
    (data)=>{console.log(elbek.textContent = data)},
    (err)=>{console.log(elbek.textContent = err)},
)

