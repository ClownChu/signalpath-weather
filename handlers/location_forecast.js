
const NationalWeatherService = require('./national_weather_service')

class LocationForecast {
    async getLocationForecast(location, forecastType) {
        return new Promise(function (resolve) {
            NationalWeatherService.getForecastGridUrl(location.latitude, location.longitude).then((locationForecastGridUrl) => {
                NationalWeatherService.getGridForecastData(locationForecastGridUrl, forecastType).then((locationForecastData) => {
                    resolve(locationForecastData)
                })
            })
        });
    }
}

module.exports = new LocationForecast()