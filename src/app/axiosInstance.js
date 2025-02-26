<<<<<<< HEAD
import axios from "axios";

// export const getUsers = () => {
//     return axios.get("https://jsonplaceholder.typicode.com/users");

// }

 const axiosInstance = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
  });

=======
import axios from "axios";

// export const getUsers = () => {
//     return axios.get("https://jsonplaceholder.typicode.com/users");

// }

 const axiosInstance = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
  });

>>>>>>> localui
  export default  axiosInstance