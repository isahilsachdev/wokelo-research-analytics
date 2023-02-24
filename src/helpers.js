import axios from 'axios';

const baseURL = 'https://wokelo-dev.eastus.cloudapp.azure.com/api/'
const axiosInstance = axios.create({
  baseURL
});

// util to make axios api calls
function axiosApiCall(enpoint,method,data){
  const token = localStorage.getItem('token') || '';  
  const URL = `${baseURL}${enpoint}/`

  if (token) {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
  console.log(`Api call success on url ${URL}.`);
  return axiosInstance[method.toLowerCase()](URL, data);
}

export default axiosApiCall;