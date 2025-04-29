import "./style.css";
import { getWeatherData } from "./apiProcess";

//initialising on page load
function initialise() {

  //selecting the elements
  const locationInput = document.querySelector("#location-input");
  const loader = document.querySelector(".loader");
  const getWeatherButton = document.querySelector("#get-weather-button");
  const weatherInfo = document.querySelector(".weatherCard");

  locationInput.focus()// // Set focus to the input field

  loader.style.display = 'block'; // Hide the loader initially


  if (locationInput.value.trim() == "") {
    getWeatherButton.disabled = true; // Enable the button if input is not empty
  }

  // Event listener for the input field
  locationInput.addEventListener("input", () => {
    locationInput.setCustomValidity("") // Reset custom validity message

    if (locationInput.value.trim() !== "") {
      getWeatherButton.disabled = false; // Enable the button if input is not empty
    } else {
      getWeatherButton.disabled = true; // Disable the button if input is empty
    }
  });
  // Event listener for the button click
  getWeatherButton.addEventListener("click", () => {
    loader.style.display = 'block';
    weatherInfo.style.display = 'none';
    weatherInfo.classList.remove("weatherload")
    const city = locationInput.value.trim();
    if (city) {
      getWeatherData(city, weatherInfo); // Fetch weather data for the entered city
    }
    locationInput.value = ""; // Clear the input field after submission
    locationInput.focus(); // Set focus back to the input field
  });
  getWeatherData("london", weatherInfo)
}

window.addEventListener("load", initialise); // Call the function when the window loads