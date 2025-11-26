// CRUD

const products = [
    { id: 1, fruct: 'olma' },
    { id: 2, fruct: 'nok' },
    { id: 3, fruct: "gilos" }
];


// Create
// function createFruct(fruct) {
//     const newFruct = { id: products.at(-1)?.id + 1, fruct};
//     products.push(newFruct);
//     console.log(products);
// }

// createFruct('apelsin');
// createFruct('ananas');


// Read / find all
// function readProduct(){
//     console.log(products);
// }
// readProduct();


// Read / find one
// function readProductById(id){
//     const fruct = products.find( fruct => fruct?.id === id);
//     if (!fruct){
//         console.log('Fruct not found');
//     }else {
//         console.log(fruct);
//     }
// }
// readProductById(1);


// Update
// function updateProduct(id, fruct) {
//     const index = products.findIndex(fruct => fruct?.id === id);
//     if (index === -1) {
//         console.log('fruct not found')
//     } else {
//         products[index] = { id, fruct};
//         console.log(products[index])
//     }
// }
// updateProduct(1, 'o');


// Delete
// function deleteProduct(id) {
//     const index = products.findIndex(fruct => fruct?.id === id);
//     if (index === -1) {
//         console.log('fruct not found')
//     } else {
//         products.splice(index, 1);
//         console.log(products)
//     }
// }
// deleteProduct(2);
