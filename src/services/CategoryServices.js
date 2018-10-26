import axios from 'axios';
import { VariableConstants } from '../constants';

function getAllCategories() {
    return new Promise((resolve, reject) => {
      axios({
        url: VariableConstants.URL+`category/`,
        method: "GET",
      }).then(r => { resolve(r.data) },
        r => { reject(r.message) });
    })
  }

  function getcurrentCategoryWithTopics(categoryId) {
    return new Promise((resolve, reject) => {
      axios({
        url: VariableConstants.URL+`category/with-topics/`+categoryId,
        method: "GET",
      }).then(r => { resolve(r.data) },
        r => { reject(r.message) });
    })
  }

  export const CategoryServices = {
    getAllCategories,getcurrentCategoryWithTopics
  }