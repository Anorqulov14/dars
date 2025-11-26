function haftaKuni(sana) {
  const date = new Date(sana);
  const kunlar = ['Yakshanba', 'Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba'];
  return kunlar[date.getDay()];
}

console.log(haftaKuni("2025-09-25")); 
