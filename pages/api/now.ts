import { NextApiRequest, NextApiResponse } from 'next';
import NodeCache from 'node-cache';

const cache = new NodeCache({ stdTTL: 30 * 1000 });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    const cacheKey = 'nowWeather';
    const cachedData = cache.get(cacheKey);

    if (cachedData) {
      return res.status(200).json(cachedData);
    }

    const fetchResponse = await fetch(
      'https://birdsofaweather.netlify.app/api/weather/now',
    );

    if (fetchResponse.ok) {
      const responseJson = await fetchResponse.json();
      cache.set(cacheKey, responseJson);
      res.status(200).json(responseJson);
    } else {
      if (cachedData) {
        res.status(200).json(cachedData);
      } else {
        res.status(204).json({
          error: 'Failed to fetch weather data and no cached data available',
        });
      }
    }
  } else {
    res.status(400).json({ error: 'This API only supports GET requests' });
  }
}
