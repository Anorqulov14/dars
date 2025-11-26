const season = (month) =>{
    switch (month) {
        case 12:
        case 1:
        case 2:
            return "Qish"
        case 3:
        case 4:
        case 5:
            return "Bahor"
        case 6:
        case 7:
        case 8:
            return "Yoz"
        case 9:
        case 10:
        case 11:
            return "Kuz"
        default:
            return "Bunday oy yo'q"
    }
}

console.log(season(12));
