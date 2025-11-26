const url = "https://68fb589994ec96066025b891.mockapi.io/products";
const addProduct = document.querySelector(".addProduct");
const modal = document.querySelector(".modalArea");
const modalExit = document.querySelector(".modal_exit");
const addSubmit = document.querySelector(".addSubmit");
const products = document.querySelector(".products");
const modalForm = document.querySelector(".modal_form");
const searchBtn = document.querySelector(".searchBtn")
const search = document.querySelector(".searchInput")
//Get
async function getProducts() {
  try {
    products.innerHTML = `<div class="loading">Yuklanyapti ...</div>`
    const res = await fetch(url);
    const data = await res.json();
    products.innerHTML = ``
    data.forEach((el) => {
      const card = document.createElement("div");
      card.classList.add("cards");
      card.innerHTML = `
        <img src="${el.image}">
        <div style="display: flex; justify-content: space-between; font-size: 18px;">
            <h4><b>${el.name}</b></h4>
            <h3>${el.price}<span>$</span></h3>
        </div>
        <p style="width: 300px; margin-top: 8px;">${el.description}</p>
        <button class="rename">Rename</button>
        <button class="delete">Delete</button>
    `;
      products.append(card);
    });
  } catch (error) {
    console.log(error);
  }
}

getProducts();

// Cread
addProduct.addEventListener("click", () => {
  modal.style.display = "flex";
});

modalExit.addEventListener("click", () => {
  modal.style.display = "none";
});

addSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  const newName = document.querySelector("#name").value;
  const newPrice = document.querySelector("#price").value;
  const newImage = document.querySelector("#image").value;
  const newDescription = document.querySelector("#description").value;
  if (
    newName == "" ||
    newPrice == "" ||
    newImage == "" ||
    newDescription == ""
  ) {
    alert("malumotlarni toliq kiriting");
    return;
  }
  const card = document.createElement("div");
  card.classList.add("cards");
  card.innerHTML = `
    <img src="${newImage}" alt="img">
    <div style="display: flex; justify-content: space-between; font-size: 18px;">
        <h4><b>${newName}</b></h4>
        <h3>${newPrice}<span>$</span></h3>
    </div>
    <p style="width: 300px; margin-top: 8px;">${newDescription}</p>
    <button class="rename">Rename</button>
    <button class="delete">Delete</button>
`;
  products.append(card);
  modalForm.reset();
  modal.style.display = "none";
});

//delete
products.addEventListener("click", (el) => {
  if (el.target.classList.contains("delete")) {
    const card = el.target.closest(".cards");
    card.remove();
  }
});

//rename
products.addEventListener("click", async (e) => {
  if (e.target.classList.contains("rename")) {
    const card = e.target.closest(".cards");
    const id = card.dataset.id;

    const oldName = card.querySelector("h4").innerText;
    const oldPrice = card.querySelector("h3").innerText.replace("$", "");
    const oldImage = card.querySelector("img").src;
    const oldDescription = card.querySelector("p").innerText;


    document.querySelector("#name").value = oldName;
    document.querySelector("#price").value = oldPrice;
    document.querySelector("#image").value = oldImage;
    document.querySelector("#description").value = oldDescription;

    modal.style.display = "flex";
    editingId = id; 
  }
});

searchBtn.addEventListener("click",async ()=>{
    if(!search.value){
        return
    }
    products.innerHTML = `<div class="loading">Yuklanyapti ...</div>`
    const res = await fetch(url);
    const data = await res.json();
    
    products.innerHTML = ``
    let found = false;

    data.forEach(el => {
        if (el.name == search.value) {
            const card = document.createElement("div");
            card.classList.add("cards");        
            card.innerHTML = `
            <img src="${el.image}">
            <div style="display: flex; justify-content: space-between; font-size: 18px;">
                <h4><b>${el.name}</b></h4>
                <h3>${el.price}<span>$</span></h3>
            </div>
            <p style="width: 300px; margin-top: 8px;">${el.description}</p>
            <button class="rename">Rename</button>
            <button class="delete">Delete</button>
    `;
      products.append(card)
      found = true
    }
    
    });
    if(!found){
        products.innerHTML = `<div class="loading">Topilmadi</div>`
    }
})