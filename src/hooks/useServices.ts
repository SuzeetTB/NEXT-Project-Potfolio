import { useQuery } from "react-query";

import { IExperience } from "@configs/data-type";
import { experiences } from "@configs/data";

// We "mock" the async behavior
const fetchServicesLocal = async (): Promise<IExperience[]> => {
  return new Promise((resolve) => {
    // Simulate a tiny delay so you can see your loading spinners
    setTimeout(() => resolve(experiences), 500); 
  });
};

export const useServices = () => {
  return useQuery<IExperience[]>("services", fetchServicesLocal, {
    staleTime: Infinity,
  });
};


// THIS IS JUST A MOCK SETUP