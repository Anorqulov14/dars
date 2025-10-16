const books = [
    { id: 101, title: "Alisher Navoiy She'rlari", author: "Alisher Navoiy", year: 1483 },
    { id: 102, title: "O'tgan Kunlar", author: "Abdulla Qodiriy", year: 1925 },
    { id: 103, title: "Shaytanat", author: "Tohir Malik", year: 1994 }
];

function addBook(title, author, year){
    let newTitle = {}
    if(books.length == 0){
        newTitle = { id : 101, title,author,year};
        books.push(newTitle)
    }else{
        newTitle = { id: books.at(-1)?.id + 1, title,author,year};
        books.push(newTitle)
    }
    return books
}


// console.log(addBook("asssas","dssddsds",1990));


function readAllBooks(){
    return books
}

console.log(readAllBooks());


// function readBookById(id){
//     const book = books.find( book => book?.id === id);
//     if (!book){
//         return 'kitob yoq'
//     }else {
//         return book
//     }
// }

// console.log(readBookById(102));


// function updateBookYear(id, newYear){
//     const book = books.find( book => book?.id === id,);
//     if (!book){
//         return 'Yangilash uchun kitob topilmadi!'
//     }else {
//         book.year = newYear
//     }

//     return books
// }

// console.log(updateBookYear(101,2005));


function deleteBook(id){
    const book = books.find( book => book?.id === id);
    if (!book){
        return 'Ochirish uchun kitob topilmadi!'
    }else {
        books.splice(book,1)
    }
    return books
}

console.log(deleteBook(102));
