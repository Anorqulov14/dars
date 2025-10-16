let soat = new Date().getHours();
let minut = new Date().getMinutes();

if (soat >= 12 && soat < 13 && minut >= 30 || soat === 13 && minut < 30) {
    console.log("Hozir obet");
} else if (soat >= 9 && soat < 20) {
    console.log("Do'kon ochiq");
} else {
    console.log("Do'kon yopiq");
}






