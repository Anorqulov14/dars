function fibonachi(n) {
  if (n < 2) {
    return n;
  }
  return fibonachi(n - 1) + fibonachi(n - 2);
}

console.log(fibonachi(7));
