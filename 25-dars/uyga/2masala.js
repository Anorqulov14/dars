function red(){
    return "Red"
}

function yellow(){
    return "Yellow"
}

function green(){
    return "Green"
}

const promise  = new Promise((res,rej)=>{
    setTimeout(() => res(red()) , 1000);
})


promise
    .then(res =>{
        console.log(res)
        return yellow()
    })
    .then(res =>{
        console.log(res)
        return green()
    })
    .then(res =>{
        console.log(res)
    })

