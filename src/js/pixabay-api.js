import axios from 'axios';

export async function searchImages(query, page, perPage = 15) {
  if (!query) {
    throw new Error('Search query cannot be empty.');
  }

  const API_KEY = '47428145-66711742d009cc5b9838094e7';
  const URL = 'https://pixabay.com/api/';
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page,
    per_page: perPage,
  };

  const response = await axios.get(URL, { params });
  return response.data;
}