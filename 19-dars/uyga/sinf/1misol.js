function umumiyNarx(savat, narxlar) {
  let narxmap = new Map(narxlar);
  let hisob = {};

  savat.forEach(mahsulot => {
    let narx = narxmap.get(mahsulot);
    if (!hisob[mahsulot]) {
      hisob[mahsulot] = 0;
    }
    hisob[mahsulot] += narx;
  });

  return hisob;
}

console.log(umumiyNarx(['non', 'sut', 'non', 'tuxum', 'tuxum', 'tuxum', 'sut'],[['non', 5000], ['sut', 8000], ['tuxum', 1000]]));

