async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const output = document.getElementById("output");

  if (!city) {
    output.innerHTML = `<strong>Error</strong>`;
    return;
  }

  output.innerHTML = `<p>Fetching weather data...</p>`;

  try {
    const response = await fetch(`/api/weather/${encodeURIComponent(city)}`);

    if (!response.ok) {
      throw new Error();
    }

    const data = await response.json();

    output.innerHTML = `
      <h3>${data.city}</h3>
      <p>${data.description}</p>
      <p><strong>Temperature:</strong> ${data.temperature}°C</p>
      <p><strong>Blockchain Tx Hash:</strong> <a href="https://etherscan.io/tx/${data.txHash}" target="_blank">${data.txHash}</a></p>
    `;
  } catch (error) {
    output.innerHTML = `<strong>Error</strong>`;
  }
}
