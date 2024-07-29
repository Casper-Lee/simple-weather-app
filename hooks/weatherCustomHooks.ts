import { useQuery } from '@tanstack/react-query';

const getWeatherForecast = async () => {
  const response = await fetch('/api/forecast');
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
