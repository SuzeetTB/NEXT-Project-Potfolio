import axios from "axios";
import {domain} from "../configs/url";

axios.defaults.withCredentials = true;

const Axios = axios.create({
  baseURL: domain,
  withCredentials: true,
});

export default Axios;