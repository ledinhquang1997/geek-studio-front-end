import axios from 'axios';
import { VariableConstants } from '../constants';
import cookies from 'react-cookies';

function getListStudents() {
    return new Promise((resolve, reject) => {
      axios({
        url:  VariableConstants.URL+`management/student/all`,
        method: "GET",
        headers: {
            'Content-type': 'application/json',
            'Authorization': cookies.load(VariableConstants.TOKEN)
          }
      }).then(r => { resolve(r.data) },
        r => { reject(r.message) });
    })
  }

  
  export const StudentManagementService = {
    getListStudents
  }