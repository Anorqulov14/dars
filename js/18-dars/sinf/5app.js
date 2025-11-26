let books=[ 
        { nom: 'kitob', narx: 25000 }, 
        { nom: 'qalam', narx: 1000 }, 
        { nom: 'daftar', narx: 5000 }, 
        { nom: 'ochirgich', narx: 2000 } 
    ]

books.sort((a,b) => b.narx - a.narx)
console.log(books);

