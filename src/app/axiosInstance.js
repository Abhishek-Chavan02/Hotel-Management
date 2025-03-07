
import axios from "axios";
import { includes } from "lodash";
import { useNavigate } from "react-router-dom";

// export const getUsers = () => {
//     return axios.get("https://jsonplaceholder.typicode.com/users");

// }

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/api/',
  timeout: 6000,
  // headers: {'X-Custom-Header': 'foobar'}


});

export const get = (url, config, dispatch) => {
  const navigate = useNavigate();

  return new Promise((resolve, reject) => {
    axiosInstance
      .get(url, config)
      .then((result) => {
        if (result.status === 200) {
          resolve(result.data);
        } else {
          reject(result.data);
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {

          navigate("/");
        }
        reject(error);
      });
  });
};

const successStatuses = [200, 201];
const isSuccessful = (responseStatus) =>
  includes(successStatuses, responseStatus);

export const post = (url, data) => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .post(url, data)
      .then((result) => {


        if (isSuccessful(result.status)) {

          resolve(result.data);

        }
      })
      .catch((error) => {
        console.log('error: ', error);

        reject(error.response);
      });
  });
};


export default axiosInstance

