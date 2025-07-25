const ApiKey = '97eb7b502f31d0165c1b96a0127e8d57';
const ApiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric';

const getWeather = async (city) => {
    const response = await fetch(`${ApiUrl}&q=${city}&appid=${ApiKey}`);

    if (!response.ok) {
        document.querySelector('.error-message').style.display = 'block';
        document.querySelector('.search input').value = ''; // Clear the input field on error
        document.querySelector('.card').style.backgroundImage = 'none'; // Reset background image
        document.querySelector('.weather').style.display = 'none'; // Hide weather display
        document.querySelector('body').style.backgroundImage = 'linear-gradient(to right, #00c6ff, #0072ff)'; // Reset weather icon
        return;
    }
    
    
    var data = await response.json();
    
    console.log(data);
    
    
    document.querySelector('.city').innerHTML = `${data.name}`;
    document.querySelector('.temp').innerHTML = `${Math.round(data.main.temp)}°C`;
    document.querySelector('.humidity-level').innerHTML = `${data.main.humidity}%`;
    document.querySelector('.wind-speed').innerHTML = `${data.wind.speed} km/h`;

    // if(data.weather[0].main === 'Clouds') {
    //     document.querySelector('.weather-icon').src = 'images/clouds.png';
    //     document.querySelector('.card').style.backgroundImage = 'url(weather_animations/clouds.gif)';
    //     document.querySelector('body').style.backgroundImage = 'url(weather_animations/clouds.gif)';
    // }else if(data.weather[0].main === 'Clear') {
    //     document.querySelector('.weather-icon').src = 'images/clear.png';
    //     document.querySelector('.card').style.backgroundImage = 'url(weather_animations/clear.gif)';
    // }else if(data.weather[0].main === 'Rain') {
    //     document.querySelector('.weather-icon').src = 'images/rain.png';
    //     document.querySelector('.card').style.backgroundImage = 'url(weather_animations/rain.gif)';
    // }if(data.weather[0].main === 'Drizzle') {
    //     document.querySelector('.weather-icon').src = 'images/drizzle.png';
    //     document.querySelector('.card').style.backgroundImage = 'url(weather_animations/drizzle.gif)';
    // }if(data.weather[0].main === 'Mist') {
    //     document.querySelector('.weather-icon').src = 'images/mist.png';
    //     document.querySelector('.card').style.backgroundImage = 'url(weather_animations/mist.gif)';
    // }if(data.weather[0].main === 'Snow') {
    //     document.querySelector('.weather-icon').src = 'images/snow.png';
    //     document.querySelector('.card').style.backgroundImage = 'url(weather_animations/snow.gif)';
    // }if(data.weather[0].main === 'Thunderstorm') {
    //     document.querySelector('.weather-icon').src = 'images/rain.png';
    //     document.querySelector('.card').style.backgroundImage = 'url(weather_animations/thunderstorm.gif)';
    // }

    function getBackgroundImage(weather) {
        switch (weather) {
            case 'Clouds':
                return 'clouds';
            case 'Clear':
                return 'clear';
            case 'Rain':
                return 'rain';
            case 'Drizzle':
                return 'drizzle';
            case 'Mist':
                return 'mist';
            case 'Snow':
                return 'snow';
            case 'Thunderstorm':
                return 'thunderstorm';
            default:
                return '';
        }
    }
    document.querySelector('.weather-icon').src = `images/${data.weather[0].main}.png`;
    document.querySelector('.card').style.backgroundImage = `url(weather_animations/${getBackgroundImage(data.weather[0].main)}.gif)`;
    document.querySelector('body').style.backgroundImage = `url(weather_animations/${getBackgroundImage(data.weather[0].main)}.gif)`;
    
    document.querySelector('.weather').style.display = 'block';
    document.querySelector('.search input').value = ''; // Clear the input field after fetching weather
    document.querySelector('.error-message').style.display = 'none'; // Hide error message on valid input
    
}

function handleEvent(event){
    if(event.type === 'click' || (event.type === 'keypress' && event.key === 'Enter')) {
        const city = document.querySelector('.search input').value;
        
        getWeather(city);
    }
}

document.querySelector('.search button').addEventListener('click', handleEvent);
document.querySelector('.search input').addEventListener('keypress', handleEvent);

// document.querySelector('.search button').addEventListener(`click` , (event) => {
//     const city = document.querySelector('.search input').value;
//     getWeather(city);
    
// });
// document.querySelector('.search input').addEventListener('keypress', (event) => {
//     if (event.key === 'Enter') {
//         const city = document.querySelector('.search input').value;
//         getWeather(city);
//     }
// });

// getWeather('current location'); // Default city to show weather on load
// // document.querySelector('.search input').addEventListener('keypress', (event) => {
// //     if (event.key === 'Enter') {
// //         const city = document.querySelector('.search input').value;
// //         getWeather(city);
// //     }
// // }
