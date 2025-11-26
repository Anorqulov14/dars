// let plus = document.querySelector(".plus")
// let minus = document.querySelector(".minus")
// let h1 = document.querySelector("h1")

// let a = 0
// plus.addEventListener('click',()=>{
//     h1.textContent = a += 1
// })

// minus.addEventListener('click',()=>{
//     if(a <= 0){
//         alert("son 0 dan kichkina")
//         h1.textContent = 0
//     }else{
//         h1.textContent = a -= 1
//     }
    
// })

// let button = document.querySelector('.button')

// function getRandomRGB() {
//   const r = Math.floor(Math.random() * 256);
//   const g = Math.floor(Math.random() * 256);
//   const b = Math.floor(Math.random() * 256);
//   return `rgb(${r}, ${g}, ${b})`;
// }


// button.addEventListener('click',()=>{
//     document.body.style.backgroundColor = getRandomRGB()
// })


let input = document.querySelector("input")
let button = document.querySelector(".botton")
let ol = document.querySelector(".ol")

button.addEventListener('click',event=>{
    event.preventDefault()
    let value = input.value
    if(value === ""){
        input.value = ""
    }else{
        let li = document.createElement('li')
        li.textContent = value
        ol.append(li)
        input.value = ""
    }
    
})

