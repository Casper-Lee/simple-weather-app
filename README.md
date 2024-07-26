# Simple Weather App

A simple weather app using NextJS.

## Setup

1. Fork this repository to your own account, clone it, then run the following commands:

- `npm install`
- `npm run dev`

2. Visit the localhost domain displayed in the console e.g. `http://localhost:3000` and you should see this:

<img width="1512" alt="Screenshot of index" src="https://github.com/yapyuyou/simple-weather-app/assets/31716292/1fb2cbe0-9c63-4d95-91a2-e09efcc60230">

---

3. Currently only the "Now" page has been implemented, it calls a backend function to fetch weather data from 4 areas in Singapore and displays it like so:

<img width="1512" alt="Screenshot of now" src="https://github.com/yapyuyou/simple-weather-app/assets/31716292/e5fbb868-41cb-4913-ad68-73add0c2a33c">

## Tasks

1. Something is wrong with the "Now" page and there have been user reports that the weather information does not appear. Investigate and rectify the problem.

2. Implement the "Forecast" page to display the next 4 days of weather information similar to the "Now" page. You can also improve it as you see fit.

Note: The forecast data can be found at <https://birdsofaweather.netlify.app/api/weather/forecast>

## Additional Info

Implement your tasks as you would in a real project and make traceable commits with meaningful and consistent commit messages.

You are encouraged to modify, add, and/or remove components as needed. Also feel free to make any changes you would in a large-scale production project e.g. adding tests, linters, and so on.

There is a challenge for devops specific tasks (optional) under the .github/workflows

## Docs

This section details the requests and responses for each API in use.

### /now

HTTP Method - GET

URL - <https://birdsofaweather.netlify.app/api/weather/now>

Response format - `{ items: WeatherData[] }`

Example response:

```
{
  "items": [
    {
      "area": "Boon Lay",
      "forecast": "Partly Cloudy (Day)"
    },
    {
      "area": "Punggol",
      "forecast": "Partly Cloudy (Day)"
    },
    {
      "area": "Sentosa",
      "forecast": "Partly Cloudy (Day)"
    },
    {
      "area": "Tampines",
      "forecast": "Partly Cloudy (Day)"
    }
  ]
}
```
