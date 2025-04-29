import { displayInfo } from "./weatherDom";

function processWeatherData(data) {
    // Process the weather data to extract relevant information and return as object
    const weatherData = {
        city: data.resolvedAddress,
        date: new Date(data.days[0].datetime).toDateString(),
        temperature: data.currentConditions.temp,
        humidity: data.currentConditions.humidity,
        windSpeed: data.currentConditions.windspeed,
        description: data.description,
        condition: data.currentConditions.conditions,
        icon: data.currentConditions.icon,
        //extracting the forecast data of days 1 to 5
        forecast: data.days.slice(1, 6).map(day => ({
            date: day.datetime,
            minTemp: day.tempmin,
            maxTemp: day.tempmax,
            description: day.description,
            icon: day.icon
        }))
    };
    console.log(weatherData);
    // Convert temperature to Celsius from Fahrenheit
    // weatherData.temperature = Math.round((weatherData.temperature - 32) * 5 / 9);

    return weatherData;
}


//function to fetch weather data from API
export async function getWeatherData(city, weatherInfo) {
    // const weatherInfo = document.querySelector(".weatherCard");
    const loader = document.querySelector(".loader");

    const apiKey = "UBX7SSN5JWK9WUF2YSHTSRRDH"
    const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${apiKey}&lang=en`

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error("Network response was not ok: " + response.statusText);
        }
        //Showing loading icon
        loader.style.display = 'block';
        weatherInfo.innerHTML = ''
        const data = await response.json();
        console.log(data);

        // Process the weather data
        const weatherData = processWeatherData(data);

        //display the weather information
        displayInfo(weatherData, weatherInfo);

        //Initial temperature set in Celsius
        const tempID = document.querySelector("#tempID")
        tempID.innerHTML = "Weather Information in Celsius"

        weatherInfo.style.display = 'block';
    }
    catch (error) {
        const locationInput = document.querySelector("#location-input");
        locationInput.setCustomValidity("Please enter a valid city name")
        locationInput.reportValidity()
        weatherInfo.style.display = 'block';
        //hide loading icon
        loader.style.display = 'none';
    }
}