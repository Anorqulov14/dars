
let talabaJSON = `
{
  "guruhNomi": "N3",
  "talabalarSoni": 2,
  "talabalar": [
    {
      "ismi": "Elbek",
      "yoshi": 20,
      "bahosi": 92
    },
    {
      "ismi": "Mirsaid",
      "yoshi": 23,
      "bahosi": 90
    }
  ]
}
`;

let talabalarObj = JSON.parse(talabaJSON);

function guruhInfo(obj) {
  return {
    guruhNomi: obj.guruhNomi,
    talabalarSoni: obj.talabalarSoni
  };
}

function barchaIsmlar(obj) {
  return obj.talabalar.map(t => t.ismi);
}

function engYuqoriBaho(obj) {
  let engYuqori = obj.talabalar.reduce((max, t) => t.bahosi > max.bahosi ? t : max);
  return engYuqori.ismi;
}

console.log(guruhInfo(talabalarObj)); 
console.log(barchaIsmlar(talabalarObj)); 
console.log(engYuqoriBaho(talabalarObj)); 
