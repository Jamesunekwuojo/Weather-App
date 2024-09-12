const apiKey =  "25d62c037f8fcd60584112704a9e6820"

const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric";


async function checkWeather() {
    const response = await fetch(apiURL + `&appid=${apiKey}`); // fetching data using API

    var data = await response.json();
    
    console.log(data)

    // Updating city name, and weather using real data collected by API 
    document.querySelector('.city').innerHTML = data.name

    document.querySelector('.temp') = data.main.temp + "℃";

    document.querySelector('.wind').innerHTML = data.wind.speed;

    document.querySelector('.humidity').innerHTML = data.main.humidity;

}

checkWeather()