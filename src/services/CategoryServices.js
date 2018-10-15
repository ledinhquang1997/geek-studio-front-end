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

  function getcurrentCategoryWithTopics(categoryId) {
    return new Promise((resolve, reject) => {
      axios({
        url: `http://localhost:8080/category/with-topics/`+categoryId,
        method: "GET",
      }).then(r => { resolve(r.data) },
        r => { reject(r.message) });
    })
  }

  export const CategoryServices = {
    getAllCategories,getcurrentCategoryWithTopics
  }