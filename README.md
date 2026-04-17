# Weather App

[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Frontend](https://img.shields.io/badge/Frontend-HTML%20%7C%20CSS%20%7C%20JavaScript-2563eb)](#tech-stack)
[![API](https://img.shields.io/badge/API-OpenWeather-f59e0b)](https://openweathermap.org/)
[![License](https://img.shields.io/badge/License-ISC-111827)](#license)

A beginner-friendly fullstack Weather App built with **HTML, CSS, JavaScript, Node.js, and Express**.
The application allows users to search for a city and view its current weather, including temperature, humidity, description, and weather icon.

This project is structured to demonstrate core fullstack concepts:

- Frontend and backend integration
- REST API consumption through a server layer
- Environment variable management with `dotenv`
- Error handling and loading states
- Clean project structure for small-to-medium student projects

## Demo Features

- Search weather by city name
- Frontend sends requests to a backend API
- Backend fetches weather data from OpenWeather
- Displays:
  - City name
  - Temperature
  - Humidity
  - Weather description
  - Weather icon
- Loading message while fetching data
- Friendly error messages when city is not found
- Quick suggestion buttons for common cities
- Responsive UI for desktop and mobile
- Mock mode for running the project without a real API key

## Tech Stack

**Frontend**

- HTML5
- CSS3
- Vanilla JavaScript

**Backend**

- Node.js
- Express.js
- Axios
- dotenv
- cors

**External API**

- OpenWeather Geocoding API
- OpenWeather Current Weather API

## Project Structure

```text
weather-app/
|-- frontend/
|   |-- index.html
|   |-- style.css
|   `-- app.js
|-- backend/
|   |-- server.js
|   |-- .env
|   |-- .env.example
|   `-- routes/
|       `-- weather.js
|-- .gitignore
|-- package.json
|-- package-lock.json
`-- README.md
```

## How It Works

1. The user enters a city name in the frontend.
2. The frontend sends a request to `GET /api/weather?city=...`.
3. The backend reads configuration from `.env`.
4. In live mode, the backend:
   - calls the OpenWeather Geocoding API to get coordinates
   - calls the Current Weather API using `lat` and `lon`
5. The backend returns a simplified JSON response.
6. The frontend renders the weather data on screen.

## API Response Example

```json
{
  "success": true,
  "data": {
    "city": "Hanoi, VN",
    "temperature": 31.2,
    "humidity": 70,
    "weather": "scattered clouds",
    "icon": "https://openweathermap.org/img/wn/03d@2x.png"
  }
}
```

## Running The Project

### 1. Clone the repository

```bash
git clone https://github.com/Khoi12122005/Weather-App.git
cd Weather-App
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create or update `backend/.env`:

```env
PORT=3000
OPENWEATHER_API_KEY=your_openweather_api_key_here
MOCK_WEATHER=true
```

## Available Modes

### Mock Mode

Use this when you do not have a real OpenWeather API key yet.

```env
MOCK_WEATHER=true
```

Supported demo cities:

- Hanoi
- Da Nang
- Ho Chi Minh City
- London

### Live API Mode

Use this when you have a real OpenWeather API key.

```env
OPENWEATHER_API_KEY=your_real_api_key_here
MOCK_WEATHER=false
```

## Start The Backend

```bash
npm run dev
```

Or:

```bash
npm start
```

Expected output:

```bash
Server is running at http://localhost:3000
```

## Open The Frontend

Open this file in a browser:

```text
frontend/index.html
```

Recommended options:

- Open directly in the browser
- Use the VS Code `Live Server` extension

## Development Notes

- The frontend calls the backend at `http://localhost:3000`
- API keys are stored in `backend/.env`
- `backend/.env` is ignored by Git for security
- The backend route is located in `backend/routes/weather.js`

## Why This Project Is Useful

This repository is a good example of a junior fullstack project because it shows:

- separation between frontend and backend responsibilities
- safe handling of API keys
- third-party API integration
- basic UX states such as loading and error handling
- practical fullstack communication using HTTP and JSON

## Possible Improvements

- 5-day weather forecast
- Search history
- Geolocation support
- Dark mode
- React frontend version
- Deploy frontend and backend online

## License

This project is licensed under the ISC License.
