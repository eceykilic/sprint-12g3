import axios from 'axios';

const token = 'your_actual_jwt_token'; 

// Create an Axios instance with a base URL and default headers
const api = axios.create({
    baseURL: 'https://fakestoreapi.com',
    headers: {
      'Content-Type': 'products',
      'Authorization': `Bearer ${token}`,
    },
  });

  export default api;