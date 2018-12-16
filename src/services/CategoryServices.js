import axios from 'axios';
import { VariableConstants } from '../constants';
import cookies from 'react-cookies';

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

  function getCategoryStatistics() {
    return new Promise((resolve, reject) => {
      axios({
        url: VariableConstants.URL+`category/statistic`,
        method: "GET",
        headers: {
          'Content-type': 'application/json',
          'Authorization': cookies.load(VariableConstants.TOKEN)
        }
      }).then(r => { resolve(r.data) },
        r => { reject(r.response.massage) });
    })
  }


  export const CategoryServices = {
    getAllCategories,getcurrentCategoryWithTopics,getCategoryStatistics
  }