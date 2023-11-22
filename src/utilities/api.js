// utils/api.js

import axios from 'axios';

const BASE_URL = 'https://your-laravel-api-endpoint';

export async function fetchDataFromLaravelAPI() {
  try {
    const response = await axios.get(`${BASE_URL}/your-api-endpoint`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data from Laravel API:', error);
    throw error;
  }
}
