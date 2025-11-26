const usersWindow = document.querySelector(".users");

async function getUsers() {
  try {
    const users = await fetch(
      "https://68fa0279ef8b2e621e7e6ec6.mockapi.io/users"
    );
    const userList = await users.json();
    userList.forEach((el) => {
      const userDiv = document.createElement("div");
      userDiv.classList.add("user");
      userDiv.innerHTML = `
            <img src="${el.avatar}" alt="img">
            <div class = "user_chiq">
            <h3>ID: ${el.id}</h3>
            <h3>Fullname: ${el.name}</h3>
            <h3>Email: ${el.email}</h3>
            <h3>Address: ${el.address}</h3>
            <h3>Phone: ${el.number}</h3>
            </div>
            `;
      usersWindow.append(userDiv);
    });
  } catch (err) {
    // console.log("Xato", err);
    const errorMessage = document.createElement("h1");
    errorMessage.textContent = "Malumot olishda xatolik";
    errorMessage.style.color = "red";
    usersWindow.style.display = "none";
    document.body.append(errorMessage);
  }
}

getUsers();
