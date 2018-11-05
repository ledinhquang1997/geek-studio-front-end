import axios from 'axios';
import { VariableConstants } from '../constants';

function getBestSellerCourses() {
    return new Promise((resolve, reject) => {
      axios({
        url:  VariableConstants.URL+`courses/bestsellers`,
        method: "GET",
      }).then(r => { resolve(r.data) },
        r => { reject(r.message) });
    })
  }

  function getTopRatingCourses() {
    return new Promise((resolve, reject) => {
      axios({
        url:  VariableConstants.URL+`courses/toprating`,
        method: "GET",
      }).then(r => { resolve(r.data) },
        r => { reject(r.message) });
    })
  }

  function getTop6CoursesByCategoryId(id) {
    return new Promise((resolve, reject) => {
      axios({
        url:  VariableConstants.URL+"courses/"+id,
        method: "GET",
      }).then(r => { resolve(r.data) },
        r => { reject(r.message) });
    })
  }

  function getCoursesByCategoryFilterPage(category,filter,page) {
    return new Promise((resolve, reject) => {
      axios({
        url:  VariableConstants.URL+`courses/by-category/${category}/${filter}/${page}`,
        method: "GET",
      }).then(r => { resolve(r.data) },
        r => { reject(r.message) });
    })
  }

  function getCourseDetail(courseId){
    return new Promise((resolve, reject) => {
      axios({
        url:  VariableConstants.URL+`course/${courseId}`,
        method: "GET",
      }).then(r => { resolve(r.data) },
        r => { reject(r.message) });
    })
  }
  function getCoursesByInstructor(username,page){
    return new Promise((resolve, reject) => {
      axios({
        url:  VariableConstants.URL+`instructors/${username}/${page}`,
        method: "GET",
      }).then(r => { resolve(r.data) },
        r => { reject(r.message) });
    })
  }

  function getCoursesOfStudent(username){
    return new Promise((resolve, reject) => {
      axios({
        url:  VariableConstants.URL+`user/courses/${username}`,
        method: "GET",
      }).then(r => { resolve(r.data) },
        r => { reject(r.message) });
    })
  }

  

  export const CourseServices = {
    getBestSellerCourses,
    getTop6CoursesByCategoryId,
    getTopRatingCourses,
    getCoursesByCategoryFilterPage,
    getCourseDetail,
    getCoursesByInstructor,
    getCoursesOfStudent
  }