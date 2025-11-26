// const student = {
//   name: "Ali",
//   age: 20,
//   group: "JS-1"
// };


// let {name,age,group} = student

// console.log(name,age,group);

// const colors = ["red", "green", "blue"];

// let [first, second, third] = colors

// console.log(first,second,third);

// const date = new Date()

// console.log(date.getDate(), date.getMonth(), date.getFullYear() )

// const date = new Date(2000, 0, 1).getTime()
// const date2 = new Date(2025, 0, 1).getTime()

// console.log(Math.floor((date2 - date) / 1000 / 60 / 60 /24 ));


// const car = {
//   brand: "Tesla",
//   model: "Model S",
//   year: 2022
// };

// let a = JSON.stringify(car)
// console.log(typeof a);


// const jsonStr = '{"title":"Book","author":"Ali","year":2020}';

// let a = JSON.parse(jsonStr)

// console.log(typeof a);

// const students = [
//   { name: "Ali", score: 88 },
//   { name: "Vali", score: 95 },
//   { name: "Otabek", score: 76 }
// ];

// let [a,b,c] = students

// console.log(Math.max(a.score,b.score,c.score));


// const company = {
//   name: "IT Academy",
//   location: {
//     city: "Tashkent",
//     street: "Amir Temur 45"
//   },
//   employees: ["Ali", "Vali", "Sami"]
// };

// let {location,employees:[hello]} = company

// console.log(`city ${location.city} First employee: ${hello}` );


// const date = new Date()
// const birthday = new Date('2026-7-12')

// console.log(Math.ceil((birthday.getTime() - date.getTime()) / 1000 / 60 / 60 / 24))


const day = new Date('2023-8-12')

switch (day.getDay()) {
    case 0:
        console.log("Yakshanba");
        break;
    case 1:
        console.log("Dushanba");
        break;
    case 2:
        console.log("Seshanba");
        break;
    case 3:
        console.log("Chorshanba");
        break;
    case 4:
        console.log("Payshanba");
        break;
    case 5:
        console.log("Juma");
        break;
    case 6:
        console.log("shanba");
        break;

    default:
        break;
}