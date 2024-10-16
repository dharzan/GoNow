import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { location } = req.query;

  const priceData: Record<string, number> = {
    'New York': 200,
    'Los Angeles': 180,
    'Chicago': 150,
  };

  const price = priceData[location as string] || 100;
  res.status(200).json({ price });
}
