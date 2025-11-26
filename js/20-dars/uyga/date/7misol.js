function sportZal() {
  const hozir = new Date();
  let sanalar = [];

  for (let i = 1; i <= 10; i++) {
    const kelajak = new Date(hozir);
    kelajak.setDate(kelajak.getDate() + (i * 7) - 3);

    let dd = String(kelajak.getDate()).padStart(2, '0');
    let mm = String(kelajak.getMonth() + 1).padStart(2, '0');
    let yyyy = kelajak.getFullYear();

    sanalar.push(`${dd}/${mm}/${yyyy}`);
  }

  return sanalar;
}

console.log(sportZal());
