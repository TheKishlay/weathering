
import { convertToCelsius, convertToFahrenheit, updateGradient } from "./utils.js";


//function to display the weather information
export function displayInfo(weatherData, weatherInfo) {

    //using dynamic import to render weather icon from assets folder
    import(`./assets/${weatherData.icon}.svg`).then((module) => {
        const iconimage = document.querySelector("#iconimage");
        iconimage.src = module.default; // Use the default export from the module
    })

    //hide loading icon
    const loader = document.querySelector(".loader");
    loader.style.display = 'none';

    //displaying the weather information in the weather card
    weatherInfo.innerHTML = `
    <button id = "unit-toggle-C">°C</button>
    <button id = "unit-toggle-F">°F</button>
    <h2>Weather in ${weatherData.city}</h2>
      <img id= "iconimage" height="24px" alt="${weatherData.condition} icon">
      <p>Date: ${weatherData.date}</p>
      <p id = 'temp-unit'>Temperature: ${weatherData.temperature}°</p>
      <p>Humidity: ${weatherData.humidity}%</p>
      <p>Wind Speed: ${weatherData.windSpeed} km/h</p>
      <p>Description: ${weatherData.description}</p>
      <h3>5-Day Forecast:</h3>
      <table>${weatherData.forecast.map(day => `<tr><td>${day.date}:</td> <td>${day.minTemp}°</td> <td>-</td> <td>${day.maxTemp}°</td> <td>${day.description}</td></tr>`).join("")}</ul>
    `
    const unitCent = document.querySelector("#unit-toggle-C");
    unitCent.disabled = true; // Disable the Celsius button initially
    const unitFaren = document.querySelector("#unit-toggle-F");

    // unitCent.addEventListener("click", () => convertToCelsius(unitCent,unitFaren,weatherData, weatherInfo))
    unitCent.addEventListener("click", () => convertToCelsius(weatherData, weatherInfo))

    //   unitFaren.addEventListener("click", () => convertToFahrenheit(unitCent,unitFaren,weatherData, weatherInfo))
    unitFaren.addEventListener("click", () => convertToFahrenheit(weatherData, weatherInfo))

    // Update the background gradient based on weather conditions
    updateGradient(weatherData);
    weatherInfo.classList.add("weatherload")
}