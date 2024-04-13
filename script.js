const weatherData = {
    temperature: '10°C',
    solarFlare: 'Low',
    geomagneticStorm: 'None'
};

// Function to display weather data
function displayWeatherData() {
    const weatherContainer = document.getElementById('weatherData');
    weatherContainer.innerHTML = `
        <p>Temperature: ${weatherData.temperature}</p>
        <p>Solar Flare: ${weatherData.solarFlare}</p>
        <p>Geomagnetic Storm: ${weatherData.geomagneticStorm}</p>
    `;
}

// Simulate loading weather data
setTimeout(() => {
    displayWeatherData();
}, 2000);