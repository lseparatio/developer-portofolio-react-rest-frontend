import axios from "axios";

axios.defaults.baseURL = 'https://api.ionutzapototchi.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true;