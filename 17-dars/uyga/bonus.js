const arr = [1, 2, 3, 2, 4, 1, 5, 3];

for (let i = 0; i < arr.length; i++) {

  for (let j = i + 1; j < arr.length; j++) {

    if (arr[i] === arr[j]) {
      arr.splice(j, 1);
      j--;
    }

  }
}

console.log(arr); 
