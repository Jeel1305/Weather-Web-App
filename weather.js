// const apikey = "90e034934b294b3bc5181258a1117f1d";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// async function checkweather(city) {
//     const response = await fetch(apiUrl + city +`&appid=${apikey}`);
//     var data = await response.json();

//     console.log(data);

//     document.querySelector(".city").innerHTML = data.name;
//     document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
//     document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
//     document.querySelector(".wind").innerHTML = data.wind.speed + " KM/H";
// }
// checkweather();


const apikey = "90e034934b294b3bc5181258a1117f1d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkweather(city) {
    try {
        const response = await fetch(apiUrl + city + `&appid=${apikey}`);

        // Convert response to JSON
        const data = await response.json();
        console.log(data);

        // Error handling for invalid city names
        if (data.cod !== 200) {
            document.querySelector(".city").innerHTML = "City not found!";
            document.querySelector(".temp").innerHTML = "--°C";
            document.querySelector(".humidity").innerHTML = "--%";
            document.querySelector(".wind").innerHTML = "-- KM/H";
            return;
        }// Update HTML with weather data
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    } catch (error) {
        console.error("Fetch error:", error);
        document.querySelector(".city").innerHTML = "Error fetching data!";
    }
    if (data.weather && data.weather.length > 0) {
        const weatherCondition = data.weather[0].main;
    
        if (weatherCondition === "Clouds") {
            // weatherIcon.src = "images/clouds.png";
            weatherIcon.src = "images/clouds.png";
        } else if (weatherCondition === "Clear") {
            weatherIcon.src = "images/clear.png";
        } else if (weatherCondition === "Rain") {
            weatherIcon.src = "images/rain.png";
        } else if (weatherCondition === "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        } else if (weatherCondition === "Mist") {
            weatherIcon.src = "images/mist.png";
        } else {
            weatherIcon.src = "images/default.png"; // Fallback image
        }
    }
    document.querySelector(".weather").style.display =  "block";
}

searchbtn.addEventListener("click",()=> {
    checkweather(searchbox.value);
})

// Call function with a valid city name
checkweather("Ahmedabad");


