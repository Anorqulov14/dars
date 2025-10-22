// GET
// fetch('https://68f0cbde0b966ad500343210.mockapi.io/users')
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.log('Error on get users',err))

// GET by id
// fetch('https://68f0cbde0b966ad500343210.mockapi.io/users/1')
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.log('Error on get users id',err))

// Create
// fetch('https://68f0cbde0b966ad500343210.mockapi.io/users',{
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'    
//     },
//     body:JSON.stringify({id : 15,name: 'eldor'})
// })
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.log('Error on create users',err))

// Update
// fetch('https://68f0cbde0b966ad500343210.mockapi.io/users/11',{
//     method: 'PUT',
//     headers: {
//         'Content-Type': 'application/json'    
//     },
//     body:JSON.stringify({name: 'elyor'})
// })
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.log('Error on update users',err))

// Delete
fetch('https://68f0cbde0b966ad500343210.mockapi.io/users/11',{
    method: 'DELETE',
    headers: {
        'Content-Type' : 'application/json'    
    },
    body:JSON.stringify({name: 'elyor'})
})
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log('Error on delete users',err))