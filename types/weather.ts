export interface ForecastData {
  date: string;
  prediction: string;
}

export interface NowWeatherData {
  area: string;
  forecast: string;
}

export interface ForecastResponse {
  items: ForecastData[];
}

export interface NowWeatherResponse {
  items: NowWeatherData[];
}
