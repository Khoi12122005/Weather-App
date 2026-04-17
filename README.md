# Weather App Fullstack

Project nay duoc thiet ke cho sinh vien nam 3 moi hoc fullstack. Ung dung gom:

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js + Express
- API: OpenWeather API
- HTTP Client: Axios
- Environment variables: dotenv

## 1. Cau truc project

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
`-- README.md
```

## 2. Project hoat dong nhu the nao

1. Nguoi dung nhap ten thanh pho tren frontend.
2. Frontend gui request den backend qua endpoint `/api/weather`.
3. Backend doc API key tu file `.env`.
4. Backend goi Geocoding API de tim `lat/lon`.
5. Backend goi Current Weather API de lay thoi tiet hien tai.
6. Backend tra JSON ve frontend.
7. Frontend hien thi nhiet do, do am, mo ta thoi tiet, ten thanh pho va icon.