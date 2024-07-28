import { useQuery } from '@tanstack/react-query';

const getWeatherForecast = async () => {
  const response = await fetch('/api/forecast');
  return response.json();
};

export const useGetWeatherForecast = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['forecast'],
    queryFn: getWeatherForecast,
  });

  return { data, isLoading };
};
