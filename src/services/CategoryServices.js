import axios from 'axios';

function getAllCategories() {
    return new Promise((resolve, reject) => {
      axios({
        url: `http://localhost:8080/category/`,
        method: "GET",
      }).then(r => { resolve(r.data) },
        r => { reject(r.message) });
    })
  }

  export const CategoryServices = {
    getAllCategories
  }