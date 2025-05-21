const { ethers } = require('ethers');
const ABI = require('../abi/WeatherLoggerABI.json');
const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contract = new ethers.Contract(process.env.CONTRACT_ADDRESS, ABI, signer);

async function logWeather(city, description, temperature) {
  const tx = await contract.logWeather(city, description, Math.round(temperature));
  await tx.wait();
  return tx.hash;
}

module.exports = { logWeather };
