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

## 3. Cach tao project tu dau trong VS Code

Neu ban tu lam lai project nay, day la quy trinh co ban:

### Buoc 1: Tao thu muc project

```bash
mkdir weather-app
cd weather-app
```

### Buoc 2: Khoi tao Node.js

```bash
npm init -y
```

Lenh nay tao file `package.json`.

### Buoc 3: Cai thu vien can thiet

```bash
npm install express axios cors dotenv
npm install -D nodemon
```

### Buoc 4: Tao dung cau truc thu muc

```text
frontend/
backend/
backend/routes/
```

### Buoc 5: Dang ky API key OpenWeather

1. Truy cap: https://openweathermap.org/api
2. Tao tai khoan hoac dang nhap
3. Lay API key
4. Mo file `backend/.env` va dien gia tri that:

```env
PORT=3000
OPENWEATHER_API_KEY=your_real_api_key_here
MOCK_WEATHER=false
```

Neu ban chua co API key, project nay van chay duoc voi du lieu mau:

```env
PORT=3000
OPENWEATHER_API_KEY=your_openweather_api_key_here
MOCK_WEATHER=true
```

Trong mock mode, ban co the test nhanh voi cac thanh pho:

- Hanoi
- Da Nang
- Ho Chi Minh City
- London

## 4. Cach chay project

### Chay backend

Mo Terminal trong VS Code tai thu muc goc project, sau do chay:

```bash
npm run dev
```

Hoac:

```bash
npm start
```

Neu thanh cong, ban se thay:

```bash
Server is running at http://localhost:3000
```

### Mo frontend

Ban co 2 cach:

#### Cach 1: Mo truc tiep file HTML

Mo file `frontend/index.html` bang trinh duyet.

#### Cach 2: Mo bang VS Code Live Server

1. Cai extension `Live Server`
2. Chuot phai vao `frontend/index.html`
3. Chon `Open with Live Server`

Khuyen nghi dung Live Server de trai nghiem on dinh hon khi hoc frontend.

## 5. Giai thich tung file

### `backend/server.js`

- Khoi tao Express server
- Doc bien moi truong bang `dotenv`
- Bat `cors()` de frontend goi duoc backend
- Gan route `/api/weather`

### `backend/routes/weather.js`

- Nhan `city` tu query string
- Kiem tra co API key hay khong
- Goi Geocoding API de lay toa do
- Goi Current Weather API de lay du lieu hien tai
- Tra du lieu gon gon cho frontend
- Xu ly loi khi khong tim thay thanh pho hoac API loi

### `frontend/index.html`

- Tao giao dien co input, button, khu vuc hien thi ket qua
- Them nut goi y thanh pho de nguoi dung bam nhanh

### `frontend/style.css`

- Tao giao dien don gian, hien dai
- Co responsive cho mobile
- Card layout, mau nen gradient, nut bam ro rang

### `frontend/app.js`

- Lang nghe su kien submit form
- Goi backend bang `fetch`
- Hien loading
- Hien ket qua hoac thong bao loi

## 6. API endpoint backend

Frontend goi:

```http
GET http://localhost:3000/api/weather?city=Hanoi
```

Vi du response:

```json
{
  "success": true,
  "data": {
    "city": "Hanoi, VN",
    "temperature": 31.2,
    "humidity": 70,
    "weather": "may rai rac",
    "icon": "https://openweathermap.org/img/wn/03d@2x.png"
  }
}
```

## 7. Tinh nang da co trong project

- Tim thoi tiet theo ten thanh pho
- Goi backend roi moi goi OpenWeather
- Hien thi ten thanh pho
- Hien thi nhiet do
- Hien thi do am
- Hien thi mo ta thoi tiet
- Hien thi icon thoi tiet
- Co loading khi dang goi API
- Co xu ly loi khi bo trong input
- Co xu ly loi khi khong tim thay thanh pho
- Co nut goi y thanh pho
- Co responsive co ban tren dien thoai

## 8. Luong du lieu trong project

```text
Frontend -> Backend Express -> OpenWeather API -> Backend -> Frontend
```

## 9. Luu y bao mat

- Khong hardcode API key trong `app.js` hoac `weather.js`
- API key phai dat trong `backend/.env`
- Them `backend/.env` vao `.gitignore` de tranh day key len GitHub

## 10. Huong mo rong de hoc them

Sau khi hoan thanh project co ban, ban co the nang cap:

- Them forecast 3 ngay hoac 5 ngay
- Them auto-detect vi tri hien tai
- Them dark mode
- Chuyen frontend sang React
- Deploy backend len Render hoac Railway
- Deploy frontend len Vercel hoac Netlify

## 11. Cach kiem tra nhanh

1. Chay backend bang `npm run dev`
2. Mo `frontend/index.html`
3. Nhap `Hanoi`
4. Bam `Tim kiem`
5. Neu co API key hop le, ket qua se hien ra

Neu dang dung mock mode, hay nhap mot trong cac thanh pho mau o tren.

## 12. Loi thuong gap

### Loi `Missing OPENWEATHER_API_KEY`

Ban chua tao file `.env` dung cho backend, hoac chua dien API key.

Neu chua co API key, bat `MOCK_WEATHER=true` de chay du lieu mau.

### Loi `City not found`

Ban nhap sai ten thanh pho, hoac nhap ten qua mo ho.

### Khong fetch duoc backend

Kiem tra:

- Backend da chay chua
- Backend co dang o cong `3000` khong
- `frontend/app.js` co dang goi dung `http://localhost:3000` khong

## 13. Ket luan

Day la mot project fullstack nho, rat phu hop de luyen:

- ket noi frontend va backend
- doc environment variables
- goi API ben ngoai
- xu ly du lieu JSON
- xu ly loading va errors

Neu ban muon, ban co the dung project nay lam bai nop mon, bai demo tren lop, hoac nen tang de hoc React o buoc tiep theo.
