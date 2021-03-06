# SignalPath - National Weather Service Forecast Retriever
## JavaScript + Node.js Version

Sample project to provide weather forecasts (`daily`/`hourly`) to given locations based on `latitude` and `longitude`. written following the [Chain-of-responsibility pattern](https://en.wikipedia.org/wiki/Chain-of-responsibility_pattern).

## Table of Content

- [What's included](#whats-included)
- [Quick Start](#quick-start)
  - [Prerequisites](#prerequisites)
  - [Build and run](#build-and-run)
    - [Cloning and getting repository ready](#cloning-and-getting-repository-ready)
    - [Getting weather forecast data](#getting-weather-forecast-data)
- [Available yarn scripts](#available-yarn-scripts)
- [File structure](#file-structure)
- [Output example](#output-example)
- [License](#license)


## What's included

- Uses [National Weather Service public API](https://www.weather.gov/documentation/services-web-api) to retrieve weather forecast data.
  - Sample JSON object of `Location` in [definitions](/definitions) folder.
  - Sample [Handlers](/handlers).
- Provides text file output containing requested locations weather forecast information.
- Written as close as possible to [Chain-of-responsibility pattern](https://en.wikipedia.org/wiki/Chain-of-responsibility_pattern).
- Uses [`eslint`](https://eslint.org/) with recommended rules to enforce consistent code style.
- Uses [`yarn`](https://yarnpkg.com/en/) scripts for common operations.

## Quick Start

Getting started with this project is easy, a few steps and you should be able to start requesting weather forecast data to locations.

### Prerequisites

You'll need the following tools:

- [Git](https://git-scm.com/downloads)
- [NodeJS](https://nodejs.org/en/download/), x64, version `>=10.15`
- [Yarn](https://yarnpkg.com/lang/en/docs/install/), version `>=1.17`

### Build and run in Windows

First you will need to clone the project's repository using `Git`, then simply install the `Node.js` packages using `yarn`, and after that, execute the procedures using `yarn`.

#### Cloning and getting repository ready
- Clone the repository locally:
```bash
git clone https://github.com/clownchu/signalpath-weather ./signalpath-weather
cd signalpath-weather
```
- Install all the `Node.js` dependencies using `yarn`:
```bash
yarn install
```

#### Getting weather forecast data
- Start the features execution:
```bash
yarn start:[forecastType+] [locations* (separated by comma)]
```
> Valid `forecastType`: `daily`, `hourly`

##### Weather forecast data will output in a file called `forecast.txt` in the project's root directory.

## Available yarn scripts

- `install` - install all project dependencies only.
- `start:daily` - collect daily weather forecast data for specified location(s).
- `start:hourly` - collect hourly weather forecast data for specified location(s).
- `lint` - check for code violations.

## File structure
```sh
signalpath-weather
????????? handlers/                                # Contains all the handlers to assist on the data collection
???   ????????? *.js                                 # Sample handlers for the execution of the procedures
????????? .eslintignore                            # Everything that must be excluded from coding styles
????????? .eslintrc                                # Defines javascript coding styles
????????? .gitignore                               # Everything that must be excluded from the git repo
????????? package.json                             # Our javascript and node dependencies
????????? LICENSE                                  # License file
????????? yarn.lock                                # Auto-generated yarn lock file
????????? README.md                                # This file!
```

## Output example
Command: `yarn start:hourly "Place 1"`

```txt
Place 1 (36.0265, -82.0465) - forecast/hourly
    Forecast generation date: 11/17/2021, 3:17:59 PM
    Forecast last updated on: 11/17/2021, 2:47:28 PM
    Grid office station elevation: 1081.1256m
-------------------------------------------------------------
Wednesday - From 3:00 PM through 4:00 PM
Sunny - 62???F
S winds up to 7 mph
-------------------------------------------------------------
Wednesday - From 4:00 PM through 5:00 PM
Sunny - 61???F
S winds up to 7 mph
-------------------------------------------------------------
Wednesday - From 5:00 PM through 6:00 PM
Sunny - 58???F
S winds up to 6 mph
-------------------------------------------------------------
Wednesday Night - From 6:00 PM through 7:00 PM
Clear - 55???F
S winds up to 6 mph
-------------------------------------------------------------
Wednesday Night - From 7:00 PM through 8:00 PM
Clear - 51???F
S winds up to 5 mph
-------------------------------------------------------------
Wednesday Night - From 8:00 PM through 9:00 PM
Clear - 49???F
SSW winds up to 5 mph
-------------------------------------------------------------
Wednesday Night - From 9:00 PM through 10:00 PM
Clear - 48???F
SSW winds up to 3 mph
-------------------------------------------------------------
Wednesday Night - From 10:00 PM through 11:00 PM
Clear - 47???F
SSW winds up to 3 mph
-------------------------------------------------------------
Wednesday Night - From 11:00 PM through 12:00 AM
Clear - 46???F
SW winds up to 3 mph
-------------------------------------------------------------
Thursday Night - From 12:00 AM through 1:00 AM
Mostly Clear - 46???F
SW winds up to 5 mph
-------------------------------------------------------------
Thursday Night - From 1:00 AM through 2:00 AM
Mostly Clear - 45???F
WSW winds up to 5 mph
-------------------------------------------------------------
Thursday Night - From 2:00 AM through 3:00 AM
Mostly Clear - 45???F
WSW winds up to 5 mph
-------------------------------------------------------------
Thursday Night - From 3:00 AM through 4:00 AM
Mostly Clear - 44???F
WSW winds up to 5 mph
-------------------------------------------------------------
Thursday Night - From 4:00 AM through 5:00 AM
Mostly Clear - 44???F
WSW winds up to 5 mph
-------------------------------------------------------------
Thursday Night - From 5:00 AM through 6:00 AM
Mostly Clear - 44???F
WSW winds up to 5 mph
-------------------------------------------------------------
Thursday - From 6:00 AM through 7:00 AM
Sunny - 44???F
WSW winds up to 5 mph
-------------------------------------------------------------
Thursday - From 7:00 AM through 8:00 AM
Sunny - 44???F
WSW winds up to 5 mph
-------------------------------------------------------------
Thursday - From 8:00 AM through 9:00 AM
Sunny - 46???F
WSW winds up to 5 mph
-------------------------------------------------------------
Thursday - From 9:00 AM through 10:00 AM
Sunny - 49???F
WSW winds up to 5 mph
-------------------------------------------------------------
Thursday - From 10:00 AM through 11:00 AM
Sunny - 54???F
WSW winds up to 6 mph
-------------------------------------------------------------
Thursday - From 11:00 AM through 12:00 PM
Sunny - 56???F
WSW winds up to 7 mph
-------------------------------------------------------------
Thursday - From 12:00 PM through 1:00 PM
Mostly Sunny - 58???F
WSW winds up to 9 mph
-------------------------------------------------------------
Thursday - From 1:00 PM through 2:00 PM
Slight Chance Rain Showers - 60???F
WSW winds up to 10 mph
-------------------------------------------------------------
Thursday - From 2:00 PM through 3:00 PM
Chance Rain Showers - 60???F
WSW winds up to 9 mph
-------------------------------------------------------------
Thursday - From 3:00 PM through 4:00 PM
Chance Rain Showers - 59???F
WSW winds up to 9 mph
-------------------------------------------------------------
Thursday - From 4:00 PM through 5:00 PM
Chance Rain Showers - 57???F
WSW winds up to 8 mph
-------------------------------------------------------------
Thursday - From 5:00 PM through 6:00 PM
Chance Rain Showers - 53???F
W winds up to 9 mph
-------------------------------------------------------------
Thursday Night - From 6:00 PM through 7:00 PM
Chance Rain Showers - 50???F
WNW winds up to 9 mph
-------------------------------------------------------------
Thursday Night - From 7:00 PM through 8:00 PM
Chance Rain Showers - 47???F
NW winds up to 10 mph
-------------------------------------------------------------
Thursday Night - From 8:00 PM through 9:00 PM
Chance Rain Showers - 43???F
NW winds up to 12 mph
-------------------------------------------------------------
Thursday Night - From 9:00 PM through 10:00 PM
Slight Chance Rain Showers - 40???F
NW winds up to 14 mph
-------------------------------------------------------------
Thursday Night - From 10:00 PM through 11:00 PM
Slight Chance Rain Showers - 38???F
NW winds up to 14 mph
-------------------------------------------------------------
Thursday Night - From 11:00 PM through 12:00 AM
Partly Cloudy - 36???F
NW winds up to 15 mph
-------------------------------------------------------------
Friday Night - From 12:00 AM through 1:00 AM
Partly Cloudy - 34???F
NW winds up to 15 mph
-------------------------------------------------------------
Friday Night - From 1:00 AM through 2:00 AM
Partly Cloudy - 33???F
NW winds up to 16 mph
-------------------------------------------------------------
Friday Night - From 2:00 AM through 3:00 AM
Mostly Clear - 32???F
NW winds up to 16 mph
-------------------------------------------------------------
Friday Night - From 3:00 AM through 4:00 AM
Mostly Clear - 31???F
NW winds up to 16 mph
-------------------------------------------------------------
Friday Night - From 4:00 AM through 5:00 AM
Mostly Clear - 30???F
NW winds up to 16 mph
-------------------------------------------------------------
Friday Night - From 5:00 AM through 6:00 AM
Mostly Clear - 29???F
NW winds up to 15 mph
-------------------------------------------------------------
Friday - From 6:00 AM through 7:00 AM
Sunny - 29???F
NW winds up to 15 mph
-------------------------------------------------------------
Friday - From 7:00 AM through 8:00 AM
Sunny - 29???F
NW winds up to 14 mph
-------------------------------------------------------------
Friday - From 8:00 AM through 9:00 AM
Sunny - 30???F
NW winds up to 14 mph
-------------------------------------------------------------
Friday - From 9:00 AM through 10:00 AM
Sunny - 32???F
NW winds up to 14 mph
-------------------------------------------------------------
Friday - From 10:00 AM through 11:00 AM
Sunny - 35???F
NW winds up to 14 mph
-------------------------------------------------------------
Friday - From 11:00 AM through 12:00 PM
Sunny - 38???F
NW winds up to 14 mph
-------------------------------------------------------------
Friday - From 12:00 PM through 1:00 PM
Sunny - 41???F
NW winds up to 12 mph
-------------------------------------------------------------
Friday - From 1:00 PM through 2:00 PM
Sunny - 44???F
NW winds up to 10 mph
-------------------------------------------------------------
Friday - From 2:00 PM through 3:00 PM
Sunny - 44???F
NW winds up to 9 mph
-------------------------------------------------------------
Friday - From 3:00 PM through 4:00 PM
Sunny - 44???F
NW winds up to 8 mph
-------------------------------------------------------------
Friday - From 4:00 PM through 5:00 PM
Sunny - 42???F
NNW winds up to 7 mph
-------------------------------------------------------------
Friday - From 5:00 PM through 6:00 PM
Sunny - 39???F
NNW winds up to 5 mph
-------------------------------------------------------------
Friday Night - From 6:00 PM through 7:00 PM
Clear - 35???F
N winds up to 3 mph
-------------------------------------------------------------
Friday Night - From 7:00 PM through 8:00 PM
Clear - 34???F
N winds up to 2 mph
-------------------------------------------------------------
Friday Night - From 8:00 PM through 9:00 PM
Clear - 32???F
NNE winds up to 2 mph
-------------------------------------------------------------
Friday Night - From 9:00 PM through 10:00 PM
Clear - 32???F
NE winds up to 1 mph
-------------------------------------------------------------
Friday Night - From 10:00 PM through 11:00 PM
Mostly Clear - 31???F
ENE winds up to 1 mph
-------------------------------------------------------------
Friday Night - From 11:00 PM through 12:00 AM
Mostly Clear - 31???F
E winds up to 2 mph
-------------------------------------------------------------
Saturday Night - From 12:00 AM through 1:00 AM
Mostly Clear - 30???F
SE winds up to 2 mph
-------------------------------------------------------------
Saturday Night - From 1:00 AM through 2:00 AM
Mostly Clear - 29???F
SE winds up to 2 mph
-------------------------------------------------------------
Saturday Night - From 2:00 AM through 3:00 AM
Mostly Clear - 29???F
SE winds up to 2 mph
-------------------------------------------------------------
Saturday Night - From 3:00 AM through 4:00 AM
Mostly Clear - 28???F
SE winds up to 2 mph
-------------------------------------------------------------
Saturday Night - From 4:00 AM through 5:00 AM
Mostly Clear - 28???F
SE winds up to 2 mph
-------------------------------------------------------------
Saturday Night - From 5:00 AM through 6:00 AM
Mostly Clear - 27???F
SSE winds up to 2 mph
-------------------------------------------------------------
Saturday - From 6:00 AM through 7:00 AM
Sunny - 26???F
SSE winds up to 2 mph
-------------------------------------------------------------
Saturday - From 7:00 AM through 8:00 AM
Sunny - 26???F
SSE winds up to 3 mph
-------------------------------------------------------------
Saturday - From 8:00 AM through 9:00 AM
Mostly Sunny - 29???F
SSE winds up to 3 mph
-------------------------------------------------------------
Saturday - From 9:00 AM through 10:00 AM
Mostly Sunny - 32???F
SSE winds up to 5 mph
-------------------------------------------------------------
Saturday - From 10:00 AM through 11:00 AM
Mostly Sunny - 35???F
SSE winds up to 6 mph
-------------------------------------------------------------
Saturday - From 11:00 AM through 12:00 PM
Mostly Sunny - 37???F
SSE winds up to 6 mph
-------------------------------------------------------------
Saturday - From 12:00 PM through 1:00 PM
Mostly Sunny - 39???F
SSE winds up to 6 mph
-------------------------------------------------------------
Saturday - From 1:00 PM through 2:00 PM
Partly Sunny - 42???F
SSE winds up to 6 mph
-------------------------------------------------------------
Saturday - From 2:00 PM through 3:00 PM
Partly Sunny - 41???F
SSE winds up to 6 mph
-------------------------------------------------------------
Saturday - From 3:00 PM through 4:00 PM
Partly Sunny - 40???F
SSE winds up to 6 mph
-------------------------------------------------------------
Saturday - From 4:00 PM through 5:00 PM
Partly Sunny - 40???F
SSE winds up to 6 mph
-------------------------------------------------------------
Saturday - From 5:00 PM through 6:00 PM
Partly Sunny - 37???F
SSE winds up to 6 mph
-------------------------------------------------------------
Saturday Night - From 6:00 PM through 7:00 PM
Mostly Cloudy - 35???F
SSE winds up to 6 mph
-------------------------------------------------------------
Saturday Night - From 7:00 PM through 8:00 PM
Mostly Cloudy - 33???F
SSE winds up to 5 mph
-------------------------------------------------------------
Saturday Night - From 8:00 PM through 9:00 PM
Mostly Cloudy - 32???F
SSE winds up to 3 mph
-------------------------------------------------------------
Saturday Night - From 9:00 PM through 10:00 PM
Mostly Cloudy - 32???F
SSE winds up to 3 mph
-------------------------------------------------------------
Saturday Night - From 10:00 PM through 11:00 PM
Mostly Cloudy - 31???F
SSE winds up to 2 mph
-------------------------------------------------------------
Saturday Night - From 11:00 PM through 12:00 AM
Mostly Cloudy - 31???F
SSE winds up to 1 mph
-------------------------------------------------------------
Sunday Night - From 12:00 AM through 1:00 AM
Mostly Cloudy - 31???F
SSE winds up to 1 mph
-------------------------------------------------------------
Sunday Night - From 1:00 AM through 2:00 AM
Mostly Cloudy - 30???F
SSE winds up to 1 mph
-------------------------------------------------------------
Sunday Night - From 2:00 AM through 3:00 AM
Partly Cloudy - 31???F
SSE winds up to 1 mph
-------------------------------------------------------------
Sunday Night - From 3:00 AM through 4:00 AM
Partly Cloudy - 31???F
SSE winds up to 1 mph
-------------------------------------------------------------
Sunday Night - From 4:00 AM through 5:00 AM
Partly Cloudy - 32???F
SSE winds up to 1 mph
-------------------------------------------------------------
Sunday Night - From 5:00 AM through 6:00 AM
Partly Cloudy - 32???F
S winds up to 1 mph
-------------------------------------------------------------
Sunday - From 6:00 AM through 7:00 AM
Mostly Sunny - 32???F
S winds up to 1 mph
-------------------------------------------------------------
Sunday - From 7:00 AM through 8:00 AM
Mostly Sunny - 32???F
S winds up to 1 mph
-------------------------------------------------------------
Sunday - From 8:00 AM through 9:00 AM
Mostly Sunny - 36???F
S winds up to 1 mph
-------------------------------------------------------------
Sunday - From 9:00 AM through 10:00 AM
Mostly Sunny - 39???F
S winds up to 2 mph
-------------------------------------------------------------
Sunday - From 10:00 AM through 11:00 AM
Mostly Sunny - 42???F
S winds up to 2 mph
-------------------------------------------------------------
Sunday - From 11:00 AM through 12:00 PM
Mostly Sunny - 44???F
S winds up to 3 mph
-------------------------------------------------------------
Sunday - From 12:00 PM through 1:00 PM
Mostly Sunny - 46???F
S winds up to 3 mph
-------------------------------------------------------------
Sunday - From 1:00 PM through 2:00 PM
Partly Sunny - 49???F
S winds up to 3 mph
-------------------------------------------------------------
Sunday - From 2:00 PM through 3:00 PM
Partly Sunny - 48???F
S winds up to 3 mph
-------------------------------------------------------------
Sunday - From 3:00 PM through 4:00 PM
Partly Sunny - 48???F
S winds up to 3 mph
-------------------------------------------------------------
Sunday - From 4:00 PM through 5:00 PM
Partly Sunny - 47???F
S winds up to 2 mph
-------------------------------------------------------------
Sunday - From 5:00 PM through 6:00 PM
Partly Sunny - 45???F
S winds up to 2 mph
-------------------------------------------------------------
Sunday Night - From 6:00 PM through 7:00 PM
Slight Chance Rain Showers - 44???F
S winds up to 2 mph
-------------------------------------------------------------
Sunday Night - From 7:00 PM through 8:00 PM
Slight Chance Rain Showers - 42???F
S winds up to 2 mph
-------------------------------------------------------------
Sunday Night - From 8:00 PM through 9:00 PM
Slight Chance Rain Showers - 42???F
S winds up to 1 mph
-------------------------------------------------------------
Sunday Night - From 9:00 PM through 10:00 PM
Chance Rain Showers - 42???F
S winds up to 1 mph
-------------------------------------------------------------
Sunday Night - From 10:00 PM through 11:00 PM
Chance Rain Showers - 41???F
S winds up to 1 mph
-------------------------------------------------------------
Sunday Night - From 11:00 PM through 12:00 AM
Chance Rain Showers - 41???F
SSW winds up to 1 mph
-------------------------------------------------------------
Monday Night - From 12:00 AM through 1:00 AM
Chance Rain Showers - 41???F
SW winds up to 2 mph
-------------------------------------------------------------
Monday Night - From 1:00 AM through 2:00 AM
Chance Rain Showers - 41???F
SW winds up to 2 mph
-------------------------------------------------------------
Monday Night - From 2:00 AM through 3:00 AM
Chance Rain Showers - 41???F
WSW winds up to 3 mph
-------------------------------------------------------------
Monday Night - From 3:00 AM through 4:00 AM
Chance Rain Showers - 41???F
W winds up to 3 mph
-------------------------------------------------------------
Monday Night - From 4:00 AM through 5:00 AM
Chance Rain Showers - 41???F
W winds up to 3 mph
-------------------------------------------------------------
Monday Night - From 5:00 AM through 6:00 AM
Chance Rain Showers - 40???F
WNW winds up to 5 mph
-------------------------------------------------------------
Monday - From 6:00 AM through 7:00 AM
Chance Rain Showers - 40???F
WNW winds up to 5 mph
-------------------------------------------------------------
Monday - From 7:00 AM through 8:00 AM
Chance Rain Showers - 39???F
WNW winds up to 6 mph
-------------------------------------------------------------
Monday - From 8:00 AM through 9:00 AM
Chance Rain Showers - 39???F
WNW winds up to 7 mph
-------------------------------------------------------------
Monday - From 9:00 AM through 10:00 AM
Chance Rain Showers - 39???F
WNW winds up to 8 mph
-------------------------------------------------------------
Monday - From 10:00 AM through 11:00 AM
Chance Rain Showers - 39???F
WNW winds up to 9 mph
-------------------------------------------------------------
Monday - From 11:00 AM through 12:00 PM
Chance Rain Showers - 39???F
WNW winds up to 9 mph
-------------------------------------------------------------
Monday - From 12:00 PM through 1:00 PM
Chance Rain Showers - 39???F
WNW winds up to 10 mph
-------------------------------------------------------------
Monday - From 1:00 PM through 2:00 PM
Chance Rain Showers - 38???F
WNW winds up to 12 mph
-------------------------------------------------------------
Monday - From 2:00 PM through 3:00 PM
Slight Chance Rain Showers - 37???F
WNW winds up to 12 mph
-------------------------------------------------------------
Monday - From 3:00 PM through 4:00 PM
Slight Chance Rain And Snow Showers - 36???F
WNW winds up to 12 mph
-------------------------------------------------------------
Monday - From 4:00 PM through 5:00 PM
Slight Chance Rain And Snow Showers - 34???F
WNW winds up to 13 mph
-------------------------------------------------------------
Monday - From 5:00 PM through 6:00 PM
Slight Chance Snow Showers - 32???F
WNW winds up to 13 mph
-------------------------------------------------------------
Monday Night - From 6:00 PM through 7:00 PM
Slight Chance Snow Showers - 30???F
NW winds up to 12 mph
-------------------------------------------------------------
Monday Night - From 7:00 PM through 8:00 PM
Partly Cloudy - 28???F
NW winds up to 12 mph
-------------------------------------------------------------
Monday Night - From 8:00 PM through 9:00 PM
Partly Cloudy - 27???F
NW winds up to 12 mph
-------------------------------------------------------------
Monday Night - From 9:00 PM through 10:00 PM
Partly Cloudy - 26???F
NW winds up to 12 mph
-------------------------------------------------------------
Monday Night - From 10:00 PM through 11:00 PM
Partly Cloudy - 24???F
NW winds up to 12 mph
-------------------------------------------------------------
Monday Night - From 11:00 PM through 12:00 AM
Partly Cloudy - 24???F
NW winds up to 12 mph
-------------------------------------------------------------
Tuesday Night - From 12:00 AM through 1:00 AM
Partly Cloudy - 22???F
NW winds up to 13 mph
-------------------------------------------------------------
Tuesday Night - From 1:00 AM through 2:00 AM
Partly Cloudy - 22???F
NW winds up to 13 mph
-------------------------------------------------------------
Tuesday Night - From 2:00 AM through 3:00 AM
Partly Cloudy - 21???F
NW winds up to 13 mph
-------------------------------------------------------------
Tuesday Night - From 3:00 AM through 4:00 AM
Partly Cloudy - 20???F
NW winds up to 12 mph
-------------------------------------------------------------
Tuesday Night - From 4:00 AM through 5:00 AM
Partly Cloudy - 20???F
NW winds up to 12 mph
-------------------------------------------------------------
Tuesday Night - From 5:00 AM through 6:00 AM
Partly Cloudy - 19???F
NW winds up to 12 mph
-------------------------------------------------------------
Tuesday - From 6:00 AM through 7:00 AM
Mostly Sunny - 18???F
NW winds up to 10 mph
-------------------------------------------------------------
Tuesday - From 7:00 AM through 8:00 AM
Mostly Sunny - 18???F
NW winds up to 9 mph
-------------------------------------------------------------
Tuesday - From 8:00 AM through 9:00 AM
Mostly Sunny - 20???F
NW winds up to 10 mph
-------------------------------------------------------------
Tuesday - From 9:00 AM through 10:00 AM
Sunny - 22???F
NW winds up to 10 mph
-------------------------------------------------------------
Tuesday - From 10:00 AM through 11:00 AM
Sunny - 25???F
NW winds up to 10 mph
-------------------------------------------------------------
Tuesday - From 11:00 AM through 12:00 PM
Sunny - 26???F
NW winds up to 10 mph
-------------------------------------------------------------
Tuesday - From 12:00 PM through 1:00 PM
Sunny - 28???F
NW winds up to 10 mph
-------------------------------------------------------------
Tuesday - From 1:00 PM through 2:00 PM
Sunny - 30???F
NW winds up to 9 mph
-------------------------------------------------------------
Tuesday - From 2:00 PM through 3:00 PM
Sunny - 30???F
NW winds up to 9 mph
-------------------------------------------------------------
Tuesday - From 3:00 PM through 4:00 PM
Sunny - 29???F
NW winds up to 9 mph
-------------------------------------------------------------
Tuesday - From 4:00 PM through 5:00 PM
Sunny - 29???F
NW winds up to 9 mph
-------------------------------------------------------------
Tuesday - From 5:00 PM through 6:00 PM
Sunny - 28???F
NW winds up to 9 mph
-------------------------------------------------------------
Tuesday Night - From 6:00 PM through 7:00 PM
Mostly Clear - 26???F
NW winds up to 8 mph
-------------------------------------------------------------
Tuesday Night - From 7:00 PM through 8:00 PM
Mostly Clear - 25???F
NW winds up to 7 mph
-------------------------------------------------------------
Tuesday Night - From 8:00 PM through 9:00 PM
Mostly Clear - 25???F
NW winds up to 7 mph
-------------------------------------------------------------
Tuesday Night - From 9:00 PM through 10:00 PM
Mostly Clear - 24???F
NW winds up to 6 mph
-------------------------------------------------------------
Tuesday Night - From 10:00 PM through 11:00 PM
Mostly Clear - 24???F
NW winds up to 6 mph
-------------------------------------------------------------
Tuesday Night - From 11:00 PM through 12:00 AM
Mostly Clear - 24???F
NW winds up to 5 mph
-------------------------------------------------------------
Wednesday Night - From 12:00 AM through 1:00 AM
Mostly Clear - 24???F
WNW winds up to 5 mph
-------------------------------------------------------------
Wednesday Night - From 1:00 AM through 2:00 AM
Mostly Clear - 24???F
WNW winds up to 5 mph
-------------------------------------------------------------
Wednesday Night - From 2:00 AM through 3:00 AM
Mostly Clear - 24???F
WNW winds up to 5 mph
-------------------------------------------------------------
```

## License

Licensed under the [Unlicense](LICENSE) license.