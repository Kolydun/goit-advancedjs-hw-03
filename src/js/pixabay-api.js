import axios from 'axios';

const API_KEY = '58245982-ec026596cf420c6452e114522';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  return axios
    .get('', {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data);
}
