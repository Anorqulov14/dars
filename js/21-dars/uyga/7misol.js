function son() {
    let n = 1
  let timer = setInterval(() => {
    console.log(n);
    n++;
    if (n > 5) clearInterval(timer);
  }, 1000);
}

son();
