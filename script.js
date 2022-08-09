const form = document.querySelector("form");
const card = document.querySelector(".card");
const inputCity = document.querySelector(".input-city");
const timeOfDayIcon = document.querySelector(".card img");
const weatherIcon = document.querySelector(".weather-icon img");
const cityName = document.querySelector(".city-name");
const weatherText = document.querySelector(".weather-text");
const temperature = document.querySelector(".temperature");


// city input
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const city = inputCity.value.trim();
    getData(city);
    form.reset();
});


// AccuWeather API key
const key = "pNzFTkUXR7bbRaZLnU45IcqAI16GAzP7";


// get city info based on user query
const getCity = async (city) => {
    const base ="https://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${key}&q=${city}`;
    let url = `${base}${query}`;
    const res = await fetch(url);
    const data = await res.json();
    const cityInfo = await data[0];
    return cityInfo;
}


// get weather info based on city code
const getWeather = async(cityKey) => {
    const base = "https://dataservice.accuweather.com/currentconditions/v1/";
    const query = `${cityKey}?apikey=${key}`;
    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];
}


// gather city and weather info and update UI accordinly
const getData = async (city) => {
    const cityInfo = await getCity(city);
    const weather = await getWeather(cityInfo.Key)
    updateUI(cityInfo, weather)
}


// update UI with all data
const updateUI = (cityInfo, weather) => {
    cityName.innerText = `${cityInfo.EnglishName}, ${cityInfo.Country.EnglishName}`;
    weatherText.innerText = weather.WeatherText;
    temperature.innerHTML = `${weather.Temperature.Metric.Value}&deg;C`;

    // set day or night image
    let time = weather.IsDayTime ? "./img/day.svg" : "./img/night.svg";
    timeOfDayIcon.setAttribute("src", time);
    weatherIcon.setAttribute("src", `./img/icons/${weather.WeatherIcon}.svg`);
    card.classList.remove("d-none");
}