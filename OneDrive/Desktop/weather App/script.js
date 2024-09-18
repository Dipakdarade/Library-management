async function getWeather() {
    const apiKey = 'a374ba182af011d67303663a7b771343'; // Replace with your OpenWeatherMap API key
    const cityInput = document.getElementById('cityInput').value;

    if (!cityInput) {
        alert('Please enter a city name');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (response.ok) {
            displayWeather(data);
        } else {
            alert(`Error: ${data.message}`);
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('An error occurred while fetching weather data');
    }
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weatherInfo');

    const cityName = data.name;
    const temperature = data.main.temp;
    const description = data.weather[0].description;

    const content = `
        <h2>${cityName}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Description: ${description}</p>
    `;

    weatherInfo.innerHTML = content;
}
