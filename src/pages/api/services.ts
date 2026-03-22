import { NextApiRequest, NextApiResponse } from "next";
import { experiences } from "@configs/data";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // We send the data, but be aware that React Icons in 'experiences' 
  // might still cause a runtime error if not handled.
  res.status(200).json({ experiences });
}