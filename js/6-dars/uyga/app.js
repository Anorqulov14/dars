const myForm = document.querySelector(".add")
    nameInput = myForm.querySelector('[type="text"]')
    emailInput = myForm.querySelector('[type="email"]')
    passwordInput = myForm.querySelector('[type="password"]')
    button = myForm.querySelector('[type="submit"]');



myForm.addEventListener('submit',event =>{
    event.preventDefault()
    let myName = nameInput.value
    let myEmail = emailInput.value
    let myPassword = passwordInput.value
    if (myName == "Eldor" && myEmail == "vest@gmail.com" && myPassword == "123") {
        alert("Parol topildi")
    }else{
        alert("xato")
    }
    myForm.reset()
})

