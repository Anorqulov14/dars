const div = document.querySelector(".users");
async function getUser() {
  try {
    const response = await fetch("https://68f8b39edeff18f212b72a12.mockapi.io/users");
    const data = await response.json();
    data.forEach((el) => {
      const userDiv = document.createElement("div");
      userDiv.classList.add("user");

      userDiv.innerHTML = `
        <img src="${el.image}" alt="img">
        <div class = "user_chiq">
        <h3>Fullname: ${el.fullName}</h3>
        <h3>Email: ${el.email}</h3>
        <h3>Address: ${el.address}</h3>
        <h3>Phone: ${el.phoneNumber}</h3>
        </div>
        `;
      div.append(userDiv);
    });
  } catch (error) {
    console.log("Danggg", error);
    const err = document.createElement("h1");
    err.textContent = "Malumot olishda xatolik";
    err.style.color = "red";
    div.style.display = "none";
    err.classList.add("error");
    document.body.append(err);
  }
}

getUser();
