import axios from "axios";

// export const getUsers = () => {
//     return axios.get("https://jsonplaceholder.typicode.com/users");

// }

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/api/',
  timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});

export default axiosInstance