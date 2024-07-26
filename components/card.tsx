import { WeatherData } from '@/pages/now';
import React from 'react';

interface CardProps {
  weatherData: WeatherData;
  additionalClassNames?: string;
}

const Card: React.FC<CardProps> = ({ weatherData, additionalClassNames }) => {
  return (
    <div
      className={`opacity-80 bg-gray-300 max-w-sm rounded-lg shadow-md overflow-hidden ${additionalClassNames}`}
    >
      <div className="p-4">
        <h2 className="text-gray-700 text-xl font-semibold mb-2">
          {weatherData.area}
        </h2>
        <p className="text-gray-700">{weatherData.forecast}</p>
      </div>
    </div>
  );
};

export default Card;
