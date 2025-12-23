const weatherApiData = {
  apiKey: "4eb3703790b356562054106543b748b2",
  basePath: "https://api.openweathermap.org/data/2.5/weather",
};

// Image mapping for different weather conditions
const weatherUrl = {
  clear:
    "https://img.freepik.com/free-photo/environment-mountain-scenery-outdoor-travel_1232-4527.jpg?semt=ais_hybrid&w=740&q=80",
  clouds:
    "https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?cs=srgb&dl=pexels-pixabay-209831.jpg&fm=jpg",
  rain: "https://media.assettype.com/thenewsminute%2F2025-09-27%2Fpatqvqda%2Frain-thunder.jpg?w=480&auto=format%2Ccompress&fit=max",
  drizzle:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBqBxaW01864_CH5pG_sAl0t5zb4iKe1hQCw&s",
  thunderstorm:
    "https://cdn.britannica.com/62/158162-050-9FDE49B4/thunderstorm-and-lightning.jpg",
  snow: "https://thumbs.dreamstime.com/b/random-falling-snowflakes-backdrop-winter-dust-frozen-shapes-snowfall-weather-white-blue-wallpaper-scattered-snowflakes-christmas-352171898.jpg",
  haze: "https://images.unsplash.com/photo-1536244636800-a3f74db0f3cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  mist: "https://images.unsplash.com/photo-1536244636800-a3f74db0f3cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  default:
    "https://img.freepik.com/free-vector/blank-blue-halftone-background_53876-114466.jpg",
};

function initApp() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        // Build URL for coordinates
        const url = `${weatherApiData.basePath}?lat=${lat}&lon=${lon}&units=metric&appid=${weatherApiData.apiKey}`;
        fetchWeatherData(url);
      },
      (error) => {
        console.error("Location access denied. Defaulting to Hyderabad.");
        // Fallback if user denies location
        fetchByCity("Hyderabad");
      }
    );
  } else {
    alert("Geolocation is not supported by your browser.");
  }
}

function fetchByCity(cityName) {
  const url = `${weatherApiData.basePath}?q=${cityName}&units=metric&appid=${weatherApiData.apiKey}`;
  fetchWeatherData(url);
}

function fetchWeatherData(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => updateUI(data));
}

function updateUI(data) {
  const { name, sys, main, weather, wind } = data;

  // Prevent duplicate widgets by removing existing one
  const existingWidget = document.querySelector(".widget-container");
  if (existingWidget) existingWidget.remove();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const date = new Date();
  const icoSrc = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  // Determine background image
  const weatherCondition = weather[0].main.toLowerCase();
  const bgImage = weatherUrl[weatherCondition] || weatherUrl.default;

  const html = `<div class="widget-container">
      <div class="left-panel" style="background: url('${bgImage}') center/cover no-repeat;">
        <div class="date-container">
          <h2>${days[date.getDay()]}</h2>
          <div class="full-date">${
            months[date.getMonth()]
          }, ${date.getDate()} ${date.getFullYear()}</div>
          <div class="location">
            <i class="fa-solid fa-location-dot"></i>
            <span>${name}, ${sys.country}</span>
          </div>
        </div>

        <div class="weather-summary">
          <img src=${icoSrc} alt=${weather[0].main}>
          <div class="temp">${Math.round(main.temp)}°C</div>
          <div class="condition">${weather[0].main}</div>
        </div>
      </div>

      <div class="right-panel">
        <div class="detail-info">
          <div class="detail-row">
            <span>Feels Like</span>
            <span>${Math.round(main.feels_like)}°C</span>
          </div>
          <div class="detail-row">
            <span>HUMIDITY</span>
            <span>${main.humidity}%</span>
          </div>
          <div class="detail-row">
            <span>WIND</span>
            <span>${wind.speed} km/h</span>
          </div>
        </div>
        ${updateForcast()}
        <button class="btn-location" id="change-loc-btn">
          <i class="fa-solid fa-location-dot"></i>
          Change Location
        </button>
      </div>
    </div>`;

  document.body.insertAdjacentHTML("beforeend", html);

  // Re-attach event listener to the new button
  document.getElementById("change-loc-btn").addEventListener("click", () => {
    const city = prompt("Enter city name:");
    if (city) fetchByCity(city);
  });
}

function updateForcast() {
  const html = ` <!-- tecast Section -->
        <ul class="forecast-list">
          <!-- Item 1: Active -->
          <li class="forecast-item active">
            <i class="fa-solid fa-cloud"></i>
            <span class="day">Wed</span>
            <span class="temp">08 °C</span>
          </li>

          <!-- Item 2 -->
          <li class="forecast-item">
            <i class="fa-solid fa-cloud-sun"></i>
            <span class="day">Thu</span>
            <span class="temp">07 °C</span>
          </li>

          <!-- Item 3 -->
          <li class="forecast-item">
            <i class="fa-solid fa-cloud"></i>
            <span class="day">Fri</span>
            <span class="temp">08 °C</span>
          </li>

          <!-- Item 4 -->
          <li class="forecast-item">
            <i class="fa-solid fa-cloud"></i>
            <span class="day">Sat</span>
            <span class="temp">06 °C</span>
          </li>
        </ul>`;
}

// Start the app
initApp();
