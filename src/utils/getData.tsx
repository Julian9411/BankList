import axios from 'axios';

export const getData = (api: string) => {
  return axios.get(api).then(res => res.data);
};
