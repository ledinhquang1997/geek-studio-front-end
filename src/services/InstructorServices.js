import axios from 'axios';
import { VariableConstants } from '../constants';

function getAllInstructors() {
    return new Promise((resolve, reject) => {
      axios({
        url:  VariableConstants.URL+`instructors/`,
        method: "GET",
      }).then(r => { resolve(r.data) },
        r => { reject(r.message) });
    })
  }

  export const InstructorServices = {
    getAllInstructors
  }