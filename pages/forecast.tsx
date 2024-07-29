import Button from '@/components/button';
import Card from '@/components/card';
import Loading from '@/components/loading';
import { useGetWeatherForecast } from '@/hooks/weatherCustomHooks';
import { useRouter } from 'next/router';
export interface ForecastData {
  date: string;
  prediction: string;
}

export default function Forecast() {
  const router = useRouter();

  const { data, isLoading, isError } = useGetWeatherForecast();

  return (
    <div>
      <main>
        <div className="bg-[url('./public/background.jpg')] h-screen bg-cover bg-center">
          <div className="absolute left-4 top-4">
            <Button
              testId="back-button"
              title="back"
              onClick={() => router.push('/')}
            ></Button>
          </div>
          <div className="min-h-screen flex flex-col items-center justify-center">
            <h1
              data-testid="header"
              className="text-6xl text-center font-bold pb-24 text-gray-700"
            >
              Weather Forecast
            </h1>
            <div className="w-[60%] flex flex-row gap-4 justify-center">
              {isLoading ? (
                <Loading />
              ) : (
                data.items.map((data: ForecastData, index: number) => (
                  <Card
                    testId="forecast-card"
                    cardType="forecast"
                    key={index}
                    data={data}
                    additionalClassNames="flex-1"
                  />
                ))
              )}
              {isError && (
                <div className="flex flex-col justify-center">
                  <p className="text-xl	 mb-4">
                    Oops Something went wrong! Please try again.
                  </p>
                  <Button
                    testId="refresh-button"
                    title="Try Again"
                    onClick={() => router.reload()}
                  ></Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
