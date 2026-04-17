const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const weatherRoutes = require('./routes/weather');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Weather App backend is running.',
    endpoint: 'GET /api/weather?city=London'
  });
});

app.use('/api/weather', weatherRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
