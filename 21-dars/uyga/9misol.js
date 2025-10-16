function sahifa(obj){
    let a = 0
    let b = obj.books
    for(let i of b){
        a+=i.pages
    }

    return a
}

let library = {
    books: [
        { title: "JS Basics", pages: 200 },
        { title: "Advanced JS", pages: 350 },
        { title: "Node.js Guide", pages: 400 }
    ]
};

console.log(sahifa(library));
