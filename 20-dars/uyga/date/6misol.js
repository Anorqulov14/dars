function vaqtMashina(kun) {
  const date = new Date();
  date.setDate(date.getDate() + kun);

  let dd = String(date.getDate()).padStart(2, '0');
  let mm = String(date.getMonth() + 1).padStart(2, '0');
  let yyyy = date.getFullYear();

  return `${dd}/${mm}/${yyyy}`;
}

console.log(vaqtMashina(10)); 
console.log(vaqtMashina(-5)); 
