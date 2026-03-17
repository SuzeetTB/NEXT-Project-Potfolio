import Axios from "../utils/Axios";
import { useQuery } from "react-query";
import { Iservices } from "../configs/data-type";
import { useToast } from "../context/toast/toast";

const fetchServices = async () => {
  const { data } = await Axios.get(`/api/services`);
  return data.services;
};

export const useServices = () => {
  const { showErrorMessage } = useToast();
  return useQuery<Array<Iservices>>("services", fetchServices, {
    onError: (err: any) => {
      showErrorMessage(err.message || "Failed to fetch service data");
    },
    staleTime: Infinity,
  });
};