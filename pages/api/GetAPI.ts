import { GetServerSideProps } from "next";
import { useQuery } from "react-query";
import { Iservices } from "../../configs/data-type";
import { useToast } from "../../context/toast/toast";
import Axios from "../../utils/Axios";

export const getServerSideProps = async (context:GetServerSideProps)=>{
    const resData = await (await Axios.get(`/api/services`).then(res=>res.data));
    return {
        props:{
            services:resData.services
        }
    }
}

const GetServices = async ()=>{
    return Axios.get(`/api/services`).then(res=>res.data.services);
};

export const useServices = () => {
    const {showErrorMessage} = useToast();
    return useQuery<Array<Iservices>>("/api/services", GetServices, {
      onError: (err: any) => {
        showErrorMessage(err.message || "Failed to fetch service data");
      },
      staleTime: Infinity,
      cacheTime: Infinity,
    });
  };
