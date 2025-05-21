// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract WeatherLogger {
    struct WeatherData {
        string city;
        string description;
        int256 temperature;
        uint256 timestamp;
    }

    WeatherData[] public logs;

    function logWeather(string memory city, string memory description, int256 temperature) public {
        logs.push(WeatherData(city, description, temperature, block.timestamp));
    }

    function totalLogs() public view returns (uint256) {
        return logs.length;
    }

    function getWeather(uint index) public view returns (string memory, string memory, int256, uint256) {
        WeatherData memory data = logs[index];
        return (data.city, data.description, data.temperature, data.timestamp);
    }
}
