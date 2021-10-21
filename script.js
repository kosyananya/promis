

const input = document.querySelector("#input");
const city = document.querySelector("#city");

const cityName = document.querySelector("#cityName");
const Temp = document.querySelector("#temp");
const main = document.querySelector("#main");
const discription = document.querySelector("#discription");
const image = document.querySelector("#image");

input.onsubmit = (e) => {
  e.preventDefault();
  weatherUpdate(city.value);
  city.value = "";
};

async function weatherUpdate(city) {
    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6b92bb6ed4521385daf8e3cfbc4caf20`)
    let data = await res.json()
    cityName.innerHTML = data.name;
    Temp.innerHTML = `${Math.round(data.main.temp - 273.15)}°C`;
    main.innerHTML = data.weather[0].main;
    discription.innerHTML = data.weather[0].description;
    image.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  };

weatherUpdate("patna");


