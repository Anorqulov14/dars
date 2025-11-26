const books = {
    nomi : "O'tgan kunlar",
    muallif : "Abdulla Qodiriy",
    nashr_yili : 1920,
    holat : "o'qilmagan",
    onSale(){
        if(books.holat === "o'qilgan"){
            return "Sotish mumkin emas"
        }else{
            return "Sotish mumkin"
        }
    }
}

console.log(books.onSale());


