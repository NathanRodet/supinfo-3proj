import axios from 'axios';

const API_URL = process.env.REACT_APP_BASEURL;

export default async function postFile(storedToken, data) {
  const objectToken = JSON.parse(storedToken)
  const token = Object.values(objectToken)
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  };
  return axios.post(API_URL + "/drive", data, config)
    .then(response => {
      // console.log(response.data)
      return response
    })
    .catch(error => {
      // console.log(error.response.data);
      return error
    });
}
