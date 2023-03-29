import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true;
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

export const axiosReq = axios.create();
export const axiosRes = axios.create();

