// let arr = [1, 2, 3, 2, 4, 1, 5]

// let set = new Set(arr)

// console.log(set);


// let matn = "hello"

// let set = new Set(matn)

// console.log(set.size);


// let a = new Map([
//     ["apple", 1000],
//     ["banana", 2000],
//     ["orange", 1500],
// ]);

// console.log(a.get("banana"));

// const text = "hello world hello js world world";

// const words = text.split(" ");

// const wordCount = new Map();

// for (let word of words) {
//   if (wordCount.has(word)) {
//     wordCount.set(word, wordCount.get(word) + 1);
//   } else {
//     wordCount.set(word, 1);
//   }
// }

// for (let [word, count] of wordCount) {
//   console.log(word, "->", count);
// }


// let matn = "I love JavaScript and I love coding"
// let matnlar = matn.split(" ")
// let set = new Set(matnlar)

// console.log(set);


// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [3, 4, 5, 6, 7];

// let set1 = new Set(arr1);
// let set2 = new Set(arr2);

// let intersection = [...set1].filter(item => set2.has(item));

// console.log(intersection); 


// function anagram(a,b){
//     let set1 = new Set(a);
//     let set2 = new Set(b);
//     if (set1.size == set2.size) {
//         return "Anagram"
//     }else{
//         return "emas"
//     }
// }

// console.log(anagram("listen","silent"));


function maps(){
    let map = new Map([["ali",90]])
    return map
}

console.log(maps());






