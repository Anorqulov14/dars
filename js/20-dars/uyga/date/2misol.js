function qolganKunSoat(kun, soat) {
  const hozir = new Date();
  const kelajak = new Date();
  kelajak.setDate(kelajak.getDate() + kun);
  kelajak.setHours(kelajak.getHours() + soat);

  let farq = Math.abs(kelajak - hozir); 
  let qolganKun = Math.floor(farq / (1000 * 60 * 60 * 24));
  let qolganSoat = Math.floor((farq / (1000 * 60 * 60)) % 24);

  return `${qolganKun} kun ${qolganSoat} soat`;
}

console.log(qolganKunSoat(2, 5));

