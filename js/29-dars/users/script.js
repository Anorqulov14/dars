async function getUsers() {
    try {
        const response = await fetch('https://68f8b39edeff18f212b72a12.mockapi.io/users');
        const data = await response.json();
        const usersList = document.getElementById('users');
        data.forEach(el => {
            const userCard = document.createElement('div');
            userCard.classList.add('userCard');
            userCard.innerHTML = `
            <img src="${el.image}">
            <div>
                <p><b>ID:</b> ${el.id}</p>
                <p><b>Full name:</b> ${el.fullName} </p>
                <p><b>Address:</b> ${el.address} </p>
                <p><b>Email:</b> ${el.email} </p>
                <p><b>Phone number:</b> ${el.phoneNumber} </p>
            </div>
            `;
            usersList.appendChild(userCard);
        });
    } catch (error) {
        console.log('Danggg', error);
        const errorMessage = document.createElement('h1');
        errorMessage.textContent = `Ma'lumotlarni olib kelishda xatolik`;
        errorMessage.classList.add('error');
        document.body.append(errorMessage);
    }
}

getUsers()

const btn = document.getElementById('theme');
const body = document.body;

let savedMode = localStorage.getItem('mode');

if (savedMode === 'dark') {
    body.classList.add('dark');
    btn.textContent = '☀️';
} else {
    btn.textContent = '🌙';
}

btn.addEventListener('click', () => {
    body.classList.toggle('dark');

    const isDark = body.classList.contains('dark');
    const theme = isDark ? 'dark' : 'light';
    const icon = isDark ? '☀️' : '🌙';

    localStorage.setItem('mode', theme);
    btn.textContent = icon;
});
