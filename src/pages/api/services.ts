import { NextApiRequest, NextApiResponse } from "next";
import {experiences} from "../../configs/data"

//getServices =
export default (req:NextApiRequest, res:NextApiResponse) => {
     res.status(200).json({services: experiences})
}