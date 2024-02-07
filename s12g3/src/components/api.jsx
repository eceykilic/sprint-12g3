import axios from 'axios';


// Create an Axios instance with a base URL and default headers
const api = axios.create({
    baseURL: 'https://fakestoreapi.com',
    headers: {
      'Content-Type': 'products',
      'Authorization': "token",
    },
  });

  export default api;