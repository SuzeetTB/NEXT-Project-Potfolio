import { achievements, experiences } from '@configs/data';
import { IAchievement, IExperience } from '@configs/data-type';
import type { NextApiRequest, NextApiResponse } from 'next';

// Define what the response body looks like
type Data = {
  achievements?: IAchievement[];
  experiences?: IExperience[];
  error?: string;
}

export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse<Data> // Pass the Data type here
) {
  try {
    // Logic: Usually you'd fetch this from a DB, 
    // but here we are returning the data from your data.ts
    
    // IMPORTANT: If your 'services' in data.ts contains React Icons, 
    // you might need to strip them out or treat them as strings here.
    
    res.status(200).json({ 
      achievements: achievements,
      experiences: experiences 
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}