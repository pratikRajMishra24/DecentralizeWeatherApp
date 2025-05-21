const express = require('express');
require('dotenv').config();
const weatherRoutes = require('./routes/weather');

const app = express();
app.use(express.json());
app.use('/api/weather', weatherRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
