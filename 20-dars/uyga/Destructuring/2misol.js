const savat = [
  { nom: 'Olma', narx: 8000, miqdor: 2, kategoriya: 'meva' },
  { nom: 'Non', narx: 3000, miqdor: 3, kategoriya: "g'alla" },
  { nom: 'Sut', narx: 12000, miqdor: 1, kategoriya: 'sut' },
  { nom: 'Banan', narx: 15000, miqdor: 1, kategoriya: 'meva' },
  { nom: 'Tuxum', narx: 20000, miqdor: 1, kategoriya: 'oqsil' },
  { nom: 'Pishloq', narx: 45000, miqdor: 1, kategoriya: 'sut' }
];

let umumiySumma = savat.reduce((sum, { narx, miqdor }) => sum + narx * miqdor, 0);

let engArzon = savat.reduce((a, b) => (a.narx < b.narx ? a : b));
let engQimmat = savat.reduce((a, b) => (a.narx > b.narx ? a : b));

let kategoriyalar = {};

for (let { nom, narx, miqdor, kategoriya } of savat) {
  let summa = narx * miqdor;
  if (!kategoriyalar[kategoriya]) {
    kategoriyalar[kategoriya] = { jami: 0, mahsulotlar: [] };
  }
  kategoriyalar[kategoriya].jami += summa;
  kategoriyalar[kategoriya].mahsulotlar.push({ nom, narx, miqdor, summa });
}

console.log("SAVAT TAHLILI:\n");

console.log(`Umumiy summa: ${umumiySumma.toLocaleString()} so'm`);
console.log(`Eng arzon: ${engArzon.nom} – ${engArzon.narx.toLocaleString()} so'm`);
console.log(`Eng qimmat: ${engQimmat.nom} – ${engQimmat.narx.toLocaleString()} so'm`);

console.log("\nKATEGORIYALAR:\n");

for (let [kategoriya, { jami, mahsulotlar }] of Object.entries(kategoriyalar)) {
  console.log(`${kategoriya.toUpperCase()}: ${jami.toLocaleString()} so'm`);
  mahsulotlar.forEach(({ nom, narx, miqdor, summa }) => {
    console.log(`  ${nom}: ${narx.toLocaleString()} × ${miqdor} = ${summa.toLocaleString()} so'm`);
  });
  console.log("");
}
