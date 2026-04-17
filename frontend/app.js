const API_BASE_URL = 'http://localhost:3000';

const weatherForm = document.getElementById('weatherForm');
const cityInput = document.getElementById('cityInput');
const statusMessage = document.getElementById('statusMessage');
const weatherResult = document.getElementById('weatherResult');
const cityName = document.getElementById('cityName');
const weatherText = document.getElementById('weatherText');
const temperature = document.getElementById('temperature');
const humidity = document.getElementById('humidity');
const weatherIcon = document.getElementById('weatherIcon');
const suggestionButtons = document.querySelectorAll('.suggestion-btn');

function setStatus(message, type = '') {
  statusMessage.textContent = message;
  statusMessage.className = `status-message ${type}`.trim();
}

function renderWeather(weatherData) {
  // Update the UI with the data returned from the backend.
  cityName.textContent = weatherData.city;
  weatherText.textContent = weatherData.weather;
  temperature.textContent = `${Math.round(weatherData.temperature)}°C`;
  humidity.textContent = `${weatherData.humidity}%`;
  weatherIcon.src = weatherData.icon;
  weatherIcon.alt = weatherData.weather;

  weatherResult.classList.remove('hidden');
}

function hideWeather() {
  weatherResult.classList.add('hidden');
}

async function fetchWeather(city) {
  try {
    // Show loading text before sending the request.
    setStatus('Đang tải dữ liệu thời tiết...', 'success');
    hideWeather();

    const response = await fetch(`${API_BASE_URL}/api/weather?city=${encodeURIComponent(city)}`);
    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.message || 'Không thể lấy dữ liệu thời tiết.');
    }

    renderWeather(result.data);
    setStatus('Lấy dữ liệu thành công.', 'success');
  } catch (error) {
    // Show a readable error message when the API request fails.
    hideWeather();
    setStatus(error.message, 'error');
  }
}

weatherForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const city = cityInput.value.trim();

  if (!city) {
    setStatus('Vui lòng nhập tên thành phố.', 'error');
    hideWeather();
    return;
  }

  fetchWeather(city);
});

suggestionButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const city = button.dataset.city;
    cityInput.value = city;
    fetchWeather(city);
  });
});
