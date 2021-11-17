# SignalPath - National Weather Service Forecast Retriever
## JavaScript + Node.js Version

Sample project to provide with forecasts (`periodic`/`hourly`) to given locations based on `Latitude` and `Longitude`. written following the [Chain-of-responsibility pattern](https://en.wikipedia.org/wiki/Chain-of-responsibility_pattern).

## Table of Content

- [What's included](#whats-included)
- [Quick Start](#quick-start)
  - [Prerequisites](#prerequisites)
  - [Build and run](#build-and-run)
    - [Cloning and getting repository ready](#cloning-and-getting-repository-ready)
    - [Getting forecast data](#getting-forecast-data)
- [Available yarn scripts](#available-yarn-scripts)
- [File structure](#file-structure)
- [License](#license)


## What's included

- Uses [National Weather Service public API](https://www.weather.gov/documentation/services-web-api) to retrieve forecast data.
  - Sample JSON object of `Location` in [definitions](/definitions) folder.
  - Sample [Handlers](/handlers).
- Provides with `text file` output containing requested locations forecast information.
- Written as close as possible to [Chain-of-responsibility pattern](https://en.wikipedia.org/wiki/Chain-of-responsibility_pattern).
- Uses [`eslint`](https://eslint.org/) with recommended rules to enforce consistent code style.
- Uses [`yarn`](https://yarnpkg.com/en/) scripts for common operations.

## Quick Start

Getting started with this project is easy, a few steps and you should be able to start requesting forecast data to locations.

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

#### Getting forecast data
- Start the features execution:
```bash
yarn start:[forecastType+] [locations* (separated by comma)]
```
> Valid `forecastType`: `daily`, `hourly`

##### Forecast data will output as a `text file` called `forecast.txt` in the project's root directory.

## Available yarn scripts

- `install` - install all project dependencies only.
- `start:daily` - collect daily forecast data for specified location(s).
- `start:hourly` - collect hourly forecast data for specified location(s).
- `lint` - check for code violations.

## File structure
```sh
signalpath-weather
├── handlers/                                # Contains all the handlers to assist on the data collection
│   └── *.js                                 # Sample handlers for the execution of the procedures
├── .eslintignore                            # Everything that must be excluded from coding styles
├── .eslintrc                                # Defines javascript coding styles
├── .gitignore                               # Everything that must be excluded from the git repo
├── package.json                             # Our javascript and node dependencies
├── LICENSE                                  # License file
├── yarn.lock                                # Auto-generated yarn lock file
└── README.md                                # This file!
```

## License

Licensed under the [Unlicense](LICENSE) license.