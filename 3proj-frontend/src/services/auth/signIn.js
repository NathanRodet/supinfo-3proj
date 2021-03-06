import axios from 'axios';

const API_URL = process.env.REACT_APP_BASEURL;


export default async function postAuth(data) {
  return axios.post(API_URL + "/auth", data)
    .then(response => {
      // console.log(response)
      return response
    })
    .catch(error => {
      // console.log(error.response.data);
      return error
    });
}
