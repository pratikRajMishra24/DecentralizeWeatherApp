async function main() {
    const WeatherLogger = await ethers.getContractFactory("WeatherLogger");
    const weatherLogger = await WeatherLogger.deploy();
    await weatherLogger.deployed();
  
    console.log(`WeatherLogger deployed to: ${weatherLogger.address}`);
  }
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  