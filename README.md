# Simple Weather App

A simple weather app using NextJS.

Feel Free to visit the deploy site 
URL - <http://simple-weather-app-lb-241685495.ap-southeast-1.elb.amazonaws.com/>

## Task & Implementation

### 1. "Now" page Bug Task
### Now Page Implementation

- When calling the [Weather Now API](https://birdsofaweather.netlify.app/api/weather/now) API notice that sometimes it returns data.
- Change the status to return 500 instead of 200.
- Implement React Query to retry fetching data if API fails.
- Add an error message with a "Try Again" button for user to reload the web.

### 2. "Forecast" Page Task 
### Forecast Page Implementation

- Create API for calling the [Weather Forecast API](https://birdsofaweather.netlify.app/api/weather/forecast).
- Implement with React Query.
- Add an error message with a "Try Again" button for user to reload the web.

### 3. Github Workflow Task
### Git Workflow Implementation

- Increase Node version 14.x to 20.x to resolve the error `npm ERR! Cannot read property '@tanstack/react-query' of undefined`.
- Update GitHub Actions Runner Image name from  `ubuntu:latest` to `ubuntu-latest`.
- Include a workflow to run test before deploying to AWS.
- Set up workflow build a docker container and push it to ECR so that it can be deployed to ECS.
- Configure post-deployment to run Cypress end-to-end test.

### 4. Other Implementation
### Remove npm Packages
1. Remove package of `ts-process-promises` as package was giving critical severity vulnerability.
- Base on [ts-process-promises](https://www.npmjs.com/package/ts-process-promises) Github Repository is not found.

2. Remove package of Tar as package was giving moderate severity vulnerability.
- Despite package being actively maintained, I have noticed that this package is not being used in this project. I have remove it due to that reason instead of upgrading the package to the latest version.

### UI Enhancements
Improved the UI/UX for better usability.

1. Loading Spinner
- Implemented a loading spinner to indicate data fetching..

2. Try Again Button
- Add a "Try Again" button in Forecast and Now page to allow the user to reload the page if the API fails

3. Format Date
- Implemented a function to format dates, converting them to display day name, day, and month name.
- Reference from <https://www.weather.gov.sg/weather-forecast-4dayoutlook/>

### Linter, Prettier and Husky

1. Implement Linter & Prettier to ensure code quality and consistency.
2. Implement Husky to run lint on pre-commit

### Cypress Test

1. Wrote Cypress Test to cover workflow.

## Running Cypress Tests

1. To run Cypress the following commands:

- `npm install`
- `npm run dev`

2. Open Cypress test runner

- `npm run cypress:open`

### Test Coverage
1. To run the test to see the coverage
- `npm run test -- --coverage`

<attached image here>

## Improvements
Here are some improvements that could be made:

1. Make the website mobile responsive.
2. Handle the display of weather cards if there are more than four.
3. Add more negative scenarios for unit testing.
4. Deploy the application to an additional environment.
5. Use HTTPS instead of HTTP.
6. Implement Dependabot to check for vulnerabilities and automate dependency updates.

## Running Locally

### Using Docker

1. Run `docker-compose up --build` to build the container
2. Visit the localhost domain displayed in the console e.g. `http://localhost:80`

### OR

### Using npm

1. run the following commands:

- `npm install`
- `npm run dev`

2. Visit the localhost domain displayed in the console e.g. `http://localhost:3000`

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
