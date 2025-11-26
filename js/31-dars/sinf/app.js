const balans = document.querySelector(".balans")
const qoshish = document.querySelector(".qoshish")

qoshish.addEventListener("click",()=>{
    const input = document.querySelector(".number").value
    balans.innerHTML = `<h1>${input} $</h1>`
})

const somsa = document.querySelector(".somsa")
const palov = document.querySelector(".palov")
const sarimsoq = document.querySelector(".sarimsoq")