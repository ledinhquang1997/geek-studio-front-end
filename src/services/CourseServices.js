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

  export const CourseServices = {
    getBestSellerCourses
  }