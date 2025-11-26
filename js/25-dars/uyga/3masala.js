async function getWeather(city) {
  return new Promise((resolve) => {
    const delay = Math.floor(Math.random() * 3000) + 1000; 
    setTimeout(() => {
      resolve(`${city} - 25C`);
    }, delay);
  });
}

async function showWeather() {
  const cities = ["Tashkent", "Samarkand", "Bukhara"];

  const results = await Promise.all(cities.map(city => getWeather(city)));

  console.log("Ob-havo:");
  results.forEach(res => console.log(res));
}

showWeather();
