function kategoriyalargaAjrat(sumka) {
  const [kitob, ruchka, daftar, kompyuter, telefon, suv, ovqat] = sumka;

  const kategoriyalar = {
    kitoblar: [kitob, daftar],
    kanselyariya: [ruchka],
    texnika: [kompyuter, telefon],
    ovqat: [suv, ovqat]
  };

  return kategoriyalar;
}

const sumka = ['kitob', 'ruchka', 'daftar', 'kompyuter', 'telefon', 'suv', 'ovqat'];

console.log(kategoriyalargaAjrat(sumka));

