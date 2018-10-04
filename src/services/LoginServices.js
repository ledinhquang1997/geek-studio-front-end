import axios from 'axios';

function login(username,password) {
    
    return new Promise((resolve, reject) => {
        var formData = new FormData();
        formData.append('username',username);
        formData.append('password',password);
       
      axios({
        url: `http://localhost:8080/login`,
        method: "POST",
        config: { headers: {'Content-Type': 'multipart/form-data' }}
        ,
        data:formData
      }).then(r => { resolve(r.headers)},
        r => { reject(r.message) });
    })
  }

  export const LoginServices = {
    login
  }