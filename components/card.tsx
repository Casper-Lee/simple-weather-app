import { WeatherData } from '@/pages/now';
import { ForecastData } from '@/pages/forecast';
import React from 'react';

type CardDataProps =
  | {
      cardType: 'weather';
      data: WeatherData;
    }
  | {
      cardType: 'forecast';
      data: ForecastData;
    };

type CardProps = {
  additionalClassNames?: string;
  testId: string;
} & CardDataProps;

const Card: React.FC<CardProps> = ({
  testId,
  cardType,
  data,
  additionalClassNames,
}) => {
  const title = cardType === 'forecast' ? data.date : data.area;
  const subtitle = cardType === 'forecast' ? data.prediction : data.forecast;

  return (
    <div
      data-testid={testId}
      className={`opacity-80 bg-gray-300 max-w-sm rounded-lg shadow-md overflow-hidden ${additionalClassNames}`}
    >
      <div className="p-4">
        <h2 className="text-gray-700 text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700">{subtitle}</p>
      </div>
    </div>
  );
};

export default Card;
