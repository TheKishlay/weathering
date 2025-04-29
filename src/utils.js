import { displayInfo } from "./weatherDom";


//function to update the background gradient based on weather conditions
export function updateGradient(weatherData) {
    // Define colors based on weather conditions
    let primaryColor, secondaryColor;


    // Check the weather condition and set colors accordingly
    if (weatherData.condition.toLowerCase().includes('sunny')) {
        primaryColor = '#ffd700';  // Gold
        secondaryColor = '#ffb300'; // Yellow
    }

    else if (weatherData.condition.toLowerCase().includes('cloudy')) {
        primaryColor = '#808080'; // Gray
        secondaryColor = '#d3d3d3'; // Light Gray
    }
    else if (weatherData.condition.toLowerCase().includes('rainy')) {
        primaryColor = '#000080'; // Blue
        secondaryColor = '#0000bf'; // Dark Blue
    }
    else {
        primaryColor = '#ffffff'; // White
        secondaryColor = "rgb(146 208 241)"; // Light Gray
    }

    // Set the background gradient using the selected colors
    document.body.style.background = `linear-gradient(to right, ${primaryColor}, ${secondaryColor})`;
}


// Function to convert temperature to Celsius
export function convertToCelsius(weatherData, weatherInfo) {
    const tempID = document.querySelector("#tempID")
    tempID.innerHTML = "Weather Information in Celsius"
    weatherData.temperature = Math.round((weatherData.temperature - 32) * 5 / 9); // Convert to Celsius
    weatherData.forecast.forEach(day => {                                         //Changing temperature
        day.minTemp = Math.round((day.minTemp - 32) * 5 / 9);                     //of all days
        day.maxTemp = Math.round((day.maxTemp - 32) * 5 / 9);                     //shown in forecast table
    })

    //Calling displayInfo to display changed values
    displayInfo(weatherData, weatherInfo);
    const unitCent = document.querySelector("#unit-toggle-C");
    const unitFaren = document.querySelector("#unit-toggle-F");
    unitCent.disabled = true;                                                    // Enable the Celsius button
    unitFaren.disabled = false;                                                  // Disable the Fahrenheit button
}

//function to convert temperature to Fahrenheit
export function convertToFahrenheit(weatherData, weatherInfo) {
    const tempID = document.querySelector("#tempID")
    tempID.innerHTML = "Weather Information in Fahrenheit"
    weatherData.temperature = Math.round((weatherData.temperature * 9 / 5) + 32); // Convert to Fahrenheit
    weatherData.forecast.forEach(day => {
        day.minTemp = Math.round((day.minTemp * 9 / 5) + 32); // Convert to Fahrenheit
        day.maxTemp = Math.round((day.maxTemp * 9 / 5) + 32); // Convert to Fahrenheit
    })
    displayInfo(weatherData, weatherInfo);
    const unitCent = document.querySelector("#unit-toggle-C");
    const unitFaren = document.querySelector("#unit-toggle-F");
    unitCent.disabled = false; // Disable the Celsius button
    unitFaren.disabled = true; // Enable the Fahrenheit button
}