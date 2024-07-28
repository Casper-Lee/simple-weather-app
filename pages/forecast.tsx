import Button from '@/components/button';
import Card from '@/components/card';
import { useGetWeatherForecast } from '@/hooks/reactQueryCustomHooks';
import { useRouter } from 'next/router';
export interface ForecastData {
  date: string;
  prediction: string;
}

export default function Forecast() {
  const router = useRouter();

  const { data, isLoading } = useGetWeatherForecast();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <main>
        <div className="bg-[url('./public/background.jpg')] h-screen bg-cover bg-center">
          <div className="absolute left-4 top-4">
            <Button title="back" onClick={() => router.push('/')}></Button>
          </div>
          <div className="min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-6xl text-center font-bold pb-24 text-gray-700">
              Weather Forecast
            </h1>
            <div className="w-[60%] flex flex-row gap-4">
              {data.items.map((data: ForecastData, index: number) => (
                <Card
                  cardType="forecast"
                  key={index}
                  data={data}
                  additionalClassNames="flex-1"
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
