import axios from 'axios';

function getBestSellerCourses() {
    return new Promise((resolve, reject) => {
      axios({
        url: `http://localhost:8080/courses/bestsellers`,
        method: "GET",
      }).then(r => { resolve(r.data) },
        r => { reject(r.message) });
    })
  }

  function getTopRatingCourses() {
    return new Promise((resolve, reject) => {
      axios({
        url: `http://localhost:8080/courses/toprating`,
        method: "GET",
      }).then(r => { resolve(r.data) },
        r => { reject(r.message) });
    })
  }

  function getTop6CoursesByCategoryId(id) {
    return new Promise((resolve, reject) => {
      axios({
        url: "http://localhost:8080/courses/"+id,
        method: "GET",
      }).then(r => { resolve(r.data) },
        r => { reject(r.message) });
    })
  }

  export const CourseServices = {
    getBestSellerCourses,getTop6CoursesByCategoryId,getTopRatingCourses
  }