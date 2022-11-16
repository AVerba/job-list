import {apiSettings} from './settings';
import {Notify} from 'notiflix';

const {BASE_URL, BEARER_TOKEN} = apiSettings;

const fetchSearchJobs = async () => {
  const response = await fetch(
    `${BASE_URL}`,{
      headers: {
        'Authorization': `Bearer ${BEARER_TOKEN}`,
      },
    }
  );

  if (response.ok) {
    return response.json();
  }
  return Notify.failure(`Sorry, but not found  any jobs proroses for you`);
};
const api = {
  fetchSearchJobs,
};

export default api;
