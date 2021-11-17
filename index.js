const path = require('path')
const fs = require('fs')
const LocationForecast = require('./handlers/location_forecast')
const Definitions = require('./handlers/definitions')

const outputFilePath = path.join(__dirname, 'forecast.txt')
fs.unlinkSync(outputFilePath)

const outputConsole = new console.Console(fs.createWriteStream(outputFilePath));
const locations = Definitions.getDefinitions('locations')

let forecastType = process.argv[2]
let places = Object.keys(locations)
if (process.argv.length > 3) {
    places = process.argv[3].split(',')
}

console.log(`Collecting ${forecastType} for location(s)`)
console.log(places)
console.log()

printForecastForLocations(places)

function printForecastForLocations(places, currentIndex = 0) {
    if (places.length < (currentIndex+1)) {
        console.log(`Forecast is available at: ${outputFilePath}`)
        return true
    }

    const placeName = places[currentIndex]
    const location = locations[placeName]

    const forecastTitle = `${placeName} (${location.latitude}, ${location.longitude}) - ${forecastType}`
    console.log(`Requesting data for ${forecastTitle}`)
    console.log(`...`)

    LocationForecast.getLocationForecast(location, forecastType).then((locationForecastData) => {
        console.log(`Received`)
        console.log(`...`)        
        console.log(`Parsing`)
        console.log(`...`)

        outputConsole.log(`${placeName} (${location.latitude}, ${location.longitude}) - ${forecastType}`)
        outputConsole.log(`    Forecast generation date: ${(new Date(locationForecastData.properties.generatedAt)).toLocaleString()}`)
        outputConsole.log(`    Forecast last updated on: ${(new Date(locationForecastData.properties.updated)).toLocaleString()}`)
        outputConsole.log(`    Grid office station elevation: ${locationForecastData.properties.elevation.value}${locationForecastData.properties.elevation.unitCode.replace('wmoUnit:', '')}`)
        outputConsole.log(`-------------------------------------------------------------`)
        
        locationForecastData.properties.periods.forEach((period) => {
            console.log(`Period #${period.number}`)

            const startTime = new Date(period.startTime)
            const endTime = new Date(period.endTime)
    
            if (period.name.length === 0) {
                period.name += startTime.toLocaleString('en-US', {
                    weekday: 'long'
                })
                if (!period.isDaytime) {
                    period.name += ' Night'
                }
            }
    
            let forecast = period.detailedForecast
            if (forecast.length === 0) {
                forecast = period.shortForecast
            }
    
            let temperatureTrend = ''
            if (period.temperatureTrend !== null && period.temperatureTrend.length > 0) {
                temperatureTrend = ` (${period.temperatureTrend})`
            }
    
            let windSpeed = null
            if (period.windSpeed.includes(' to ')) {
                windSpeed = `from ${period.windSpeed}`
            } else {
                windSpeed = `up to ${period.windSpeed}`
            }
    
            outputConsole.log(`${period.name} - From ${startTime.toLocaleString('en-US', {timeStyle: 'short'})} through ${endTime.toLocaleString('en-US', {timeStyle: 'short'})}`)
            outputConsole.log(`${period.shortForecast} - ${period.temperature}⁰${period.temperatureUnit}${temperatureTrend}`)
            outputConsole.log(`${period.windDirection} winds ${windSpeed}`)
            if (period.detailedForecast.length > 0) {
                outputConsole.log()
                outputConsole.log(`${period.detailedForecast}`)
            }
            outputConsole.log(`-------------------------------------------------------------`)
        })

        outputConsole.log()
        outputConsole.log()

        console.log(`DONE`)
        return printForecastForLocations(places, (currentIndex + 1))
    })
}