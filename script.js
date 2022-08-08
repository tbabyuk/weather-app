console.log('hi')

const form = document.querySelector("form");
const inputCity = document.querySelector(".input-city");
const showCity = document.querySelector(".city-name");
const weatherCondition = document.querySelector(".weather-condition");
const temperature = document.querySelector(".temperature");
const cardImage = document.querySelector(".card img");
const weatherIcon = document.querySelector(".card-body img");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const city = inputCity.value;
    getData(city);
    form.reset();
})




const key = 'qIEtKyhg3BTxFWuMAel4G3JgzqnGLmRw';


const getCity = async (city) => {
    const base ='http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;
    let url = `${base}${query}`;

    const res = await fetch(url);

    const data = await res.json();

    const cityInfo = await data[0];

    return cityInfo;

}


const getWeather = async(id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);

    const data = await response.json();

    return data[0];
}


const getData = async (city) => {
    const cityInfo = await getCity(city);
    // const weather = await getWeather(55488);
    console.log('from getData', cityInfo)
    const weather = await getWeather(cityInfo.Key)
    console.log(weather)
    // console.log('from getData', weather[0])
    
    updateUI(cityInfo, weather)
}


const updateUI = (cityInfo, weather) => {
    showCity.innerText = `${cityInfo.EnglishName}, ${cityInfo.Country.EnglishName}`;
    // console.log('from update UI', weather.Temperature.Metric.Value)
    weatherCondition.innerText = weather.WeatherText;
    temperature.innerHTML = `${weather.Temperature.Metric.Value}&deg;C`;

    // set day or night image
    let time = weather.IsDayTime ? './img/day.svg' : './img/night.svg';
    cardImage.setAttribute('src', time);

    weatherIcon.setAttribute('src', `./img/icons/${weather.WeatherIcon}.svg`)
}