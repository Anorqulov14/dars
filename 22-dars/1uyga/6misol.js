function chegirmaliMahsulotlar(products) {
  
    const discounted = products.map(p => ({
        name: p.name,
        discountedPrice: p.price * 0.9
    }));

    return discounted
}

const products = [
      { id: 1, name: 'Qalam', price: 1000 },
      { id: 2, name: 'Daftar', price: 5000 },
      { id: 3, name: 'Kitob', price: 15000 }
];

console.log(chegirmaliMahsulotlar(products));
