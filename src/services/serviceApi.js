import {apiSettings} from './settings';
import {Notify} from 'notiflix';
import axios from "axios";

const {BASE_URL, BEARER_TOKEN} = apiSettings;
axios.defaults.baseURL =
  "https://api.json-generator.com/templates/ZM1r0eic3XEy/data";

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
