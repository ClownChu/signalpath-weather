const axios = require('axios');

class NationalWeatherServiceApi {
    constructor(pointsApiUrl = 'https://api.weather.gov/points') {
        this.pointsApiUrl = pointsApiUrl
    }

    async getForecastGridUrl(latitude, longitude) {
        const response = await axios.get(`${this.pointsApiUrl}/${latitude},${longitude}`)
        return response.data.properties.forecastGridData
    }

    async getGridForecastData(forecastGridDataUrl, forecastType) {
        const response = await axios.get(`${forecastGridDataUrl}/${forecastType}`)
        return response.data
    }
}

module.exports = new NationalWeatherServiceApi()