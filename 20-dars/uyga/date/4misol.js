function kabisaTekshir(yil) {
  function kabisa(y) {
    return (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0);
  }

  if (kabisa(yil)) {
    return `${yil} yil kabisa yili `;
  } else {
    let i = yil + 1;
    while (!kabisa(i)) {
      i++;
    }
    return `${yil} yil kabisa yili emas, ${i - yil} yildan keyin (${i}) kabisa yili bo'ladi`;
  }
}

console.log(kabisaTekshir(2025));
