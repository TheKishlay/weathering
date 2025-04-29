# 🌤️ WeatherWise - Real-Time Weather Dashboard

A responsive web application that provides real-time weather data for any city or country. Features dynamic background changes based on current conditions and a 5-day forecast.

![WeatherWise Demo Banner](https://via.placeholder.com/800x400?text=WeatherWise+Demo) <!-- Replace with actual screenshot -->

## 🚀 Features
- **🌡️ Live Temperature Toggle**  
  Switch between Celsius/Fahrenheit with one click.
  
- **🎨 Context-Aware Backgrounds**  
  Dynamic UI themes change with weather conditions (sunny, rainy, snowy).

- **📊 Comprehensive Weather Data**  
  - Current temperature
  - Humidity levels
  - Wind speed
  - Weather description
  - 5-day graphical forecast

- **🔍 Intelligent Search**  
  Autocomplete-powered location search with error handling.

## 🛠️ Tech Stack
| Technology | Usage |
|------------|-------|
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) | Core page structure |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) | Styling & animations |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) | Core functionality |
| ![Webpack](https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=webpack&logoColor=black) | Module bundling |
| ![VisualCrossing](https://img.shields.io/badge/Visual_Crossing-API-important) | Weather data source |

## ⚙️ Installation Guide
1. **Clone Repository**
   ```bash
   git clone https://github.com/yourusername/weatherwise.git
   cd weatherwise
   ```

2. **Install Dependencies**
    ```bash
    npm install
    ```

3. **API Setup**
    - Obtain a free API key from [Visual Crossing Weather API](https://www.visualcrossing.com/weather-api)
    - Use it in code with proper format to retrieve data
    ```
    const apikey = your_actual_key_here
    ```

4. **Build and Run**
    ```bash
    npm run build
    npm run dev
   ```

## 🌐 API Implementation

### Sample Weather Data Fetch Function

    ```javascript
    /**
     * Fetches weather data from Visual Crossing API
     * @param {string} location - City or country name to search
     * @returns {Promise<Object>} Weather data in JSON format
     * @throws {Error} When API request fails
     */
    async function fetchWeatherData(location) {
    try {
        const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${apikey}`
        );
        
        if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
    }
    ```

## ⚙️ Configuration Details

### Entry Point
- `src/index.js` — imports styles and application logic.

### HTML Template
- `src/template.html` — base HTML processed by `html-webpack-plugin` to inject script and style tags.

### Stylesheet
- `src/style.css` — global CSS, extracted into a separate file in production by `mini-css-extract-plugin`.

### Webpack Configurations

| Config File        | Mode         | Key Features                                                      |
|--------------------|--------------|--------------------------------------------------------------------|
| `webpack.dev.js`   | development  | `devtool: 'inline-source-map'`, `webpack-dev-server`, HMR          |
| `webpack.prod.js`  | production   | CSS extraction, JS/CSS minification, content hashing, tree shaking |


## 📦 NPM Scripts

| Script | Command         | Description                             |
|--------|-----------------|-----------------------------------------|
| start  | `npm run start`  | Run dev server with live reload & HMR   |
| build  | `npm run build`  | Create optimized production build in `dist/` |

---

## 📜 Dependencies & Plugins

### Core
- `webpack`
- `webpack-cli`
- `webpack-dev-server`

### HTML
- `html-webpack-plugin`

### CSS
- `css-loader`
- `style-loader`
- `mini-css-extract-plugin`

> See `package.json` for exact versions.

---

### Built with ❤️ by Kishlay Singh