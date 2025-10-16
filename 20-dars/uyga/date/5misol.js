function tugilganKunlarFarqi(kun1, kun2) {
  const d1 = new Date(kun1);
  const d2 = new Date(kun2);

  let farq = Math.abs(d1 - d2);
  let kunlar = farq / (1000 * 60 * 60 * 24);

  return `${kunlar} kun farq`;
}

console.log(tugilganKunlarFarqi("2000-05-10", "2000-07-01")); 
