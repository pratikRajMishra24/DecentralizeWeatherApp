const express = require('express');
const router = express.Router();
const { getWeatherAndLog } = require('../services/openWeatherService');

router.get('/:city', async (req, res) => {
  const city = req.params.city;
  try {
    const result = await getWeatherAndLog(city);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
