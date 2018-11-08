import axios from 'axios';
import cookies from 'react-cookies';
import { VariableConstants } from '../constants';

function login(username, password) {

  return new Promise((resolve, reject) => {
    var formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    axios({
      url:  VariableConstants.URL+`login`,
      method: "POST",
      config: { headers: { 'Content-Type': 'multipart/form-data' } }
      ,
      data: formData
    }).then(r => { resolve({token:r.headers.authorization, userinfo:r.data}) },
      r => { reject(r.message) });
  })
}


function getCurrentUser(username) {
  return new Promise((resolve, reject) => {
    axios({
      url: `http://localhost:8080/user/${username}`,
      method: "GET",
      headers: {
        'Content-type': 'application/json',
        'Authorization': cookies.load(VariableConstants.TOKEN)
      }
    }).then(r => { resolve({token:r.headers.authorization, userinfo:r.data}) },
      r => { reject(r.message) });
  })
}


export const LoginServices = {
  login, getCurrentUser
}