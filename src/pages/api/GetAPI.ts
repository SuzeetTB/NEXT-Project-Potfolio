import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Logic to fetch from database or data.ts
    const services = [/* your data here */]; 
    res.status(200).json({ services });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}