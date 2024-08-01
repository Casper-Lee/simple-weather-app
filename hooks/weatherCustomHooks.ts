import { ForecastResponse, NowWeatherResponse } from '@/types/weather';
import { useQuery } from '@tanstack/react-query';

const getWeatherForecast = async (): Promise<ForecastResponse> => {
  const response = await fetch('/api/forecast');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};

const getNowWeather = async (): Promise<NowWeatherResponse> => {
  const response = await fetch('/api/now');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};

export const useGetWeatherForecast = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['forecast'],
    queryFn: getWeatherForecast,
  });

  return { data, isLoading, isError };
};

export const useGetNowWeather = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['now'],
    queryFn: getNowWeather,
    retry: 10,
  });

  return { data, isLoading, isError };
};
