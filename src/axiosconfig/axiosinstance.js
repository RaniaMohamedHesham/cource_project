import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",

  params:{
  api_key:"dd5e182103ffad888951f6213be02e4f"
  }
});
export default axiosInstance;
