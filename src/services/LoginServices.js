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
      url: VariableConstants.URL+`user/${username}`,
      method: "GET",
      headers: {
        'Content-type': 'application/json',
        'Authorization': cookies.load(VariableConstants.TOKEN)
      }
    }).then(r => { resolve({token:r.headers.authorization, userinfo:r.data}) },
      r => { reject(r.message) });
  })
}


function registerNewStudentAccount(newAccount) {
  return new Promise((resolve, reject) => {
    axios({
      url: VariableConstants.URL+`management/student/add`,
      method: "POST",
      headers: {
        'Content-type': 'application/json',
      },
      data:newAccount
    }).then(r => { resolve(r.data) },
      r => { reject(r.response) });
  })
}



export const LoginServices = {
  login, getCurrentUser,registerNewStudentAccount
}