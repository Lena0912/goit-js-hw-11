import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '39330071-dcdd350e74b7fd54b7a09736b';

export async function fetchGallery(name, totalNumberOfPges, currentPage = 1) {
  const response = await axios.get(`${BASE_URL}`, {
    params: {
      key: API_KEY,
      q: name,
      per_page: totalNumberOfPges,
      page: currentPage,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
  return response;
}
