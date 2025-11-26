function umumiyNarx(products) {
    const total = products.reduce((sum, p) => sum + p.price, 0);
    console.log(total);
}

const products = [
      { id: 1, name: 'Qalam', price: 1000 },
      { id: 2, name: 'Daftar', price: 5000 },
      { id: 3, name: 'Kitob', price: 15000 }
];

console.log(umumiyNarx(products));

