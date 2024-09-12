const apiKey =  "25d62c037f8fcd60584112704a9e6820";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

console.log("script connected successfully");

async function checkWeather(city) {
    try {
        const response = await fetch(apiURL + `&q=${city}&appid=${apiKey}`); // fetching data using API

        if (!response.ok) {
            if (response.status == 404) {
                document.querySelector(".error").style.display = "block"; 
                document.querySelector(".weather").style.display = "none"; 
            }
            throw new Error("Error connecting to server");
        }

        var data = await response.json();
        console.log(data);

        // Updating city name, temperature, wind speed, humidity
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = data.main.temp + "℃";
        document.querySelector('.wind').innerHTML = data.wind.speed + "km/hr";
        document.querySelector('.humidity').innerHTML = data.main.humidity + "%";

        // Set weather icon based on the weather condition
        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "./cloud.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "./rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "./drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "./mist.png";
        }

        // Display weather info and hide error
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    } catch (error) {
        console.error(error);
    }
}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
});
