import axios from 'axios';

function getAllInstructors() {
    return new Promise((resolve, reject) => {
      axios({
        url: `http://localhost:8080/instructors/`,
        method: "GET",
      }).then(r => { resolve(r.data) },
        r => { reject(r.message) });
    })
  }

  export const InstructorServices = {
    getAllInstructors
  }