import axios from 'axios';
import { VariableConstants } from '../constants';
import cookies from 'react-cookies';

function getBestSellerCourses() {
  return new Promise((resolve, reject) => {
    axios({
      url: VariableConstants.URL + `course/bestsellers`,
      method: "GET",
    }).then(r => { resolve(r.data) },
      r => { reject(r.message) });
  })
}

function getTopRatingCourses() {
  return new Promise((resolve, reject) => {
    axios({
      url: VariableConstants.URL + `course/toprating`,
      method: "GET",
    }).then(r => { resolve(r.data) },
      r => { reject(r.message) });
  })
}

function getTop6CoursesByCategoryId(id) {
  return new Promise((resolve, reject) => {
    axios({
      url: VariableConstants.URL + "course/top-by-category/" + id,
      method: "GET",
    }).then(r => { resolve(r.data) },
      r => { reject(r.message) });
  })
}

function getCoursesByCategoryFilterPage(category, filter, page) {
  return new Promise((resolve, reject) => {
    axios({
      url: VariableConstants.URL + `course/by-category-filter-page/${category}/${filter}/${page}`,
      method: "GET",
    }).then(r => { resolve(r.data) },
      r => { reject(r.message) });
  })
}

function getCourseDetail(courseId) {
  return new Promise((resolve, reject) => {
    axios({
      url: VariableConstants.URL + `course/${courseId}`,
      method: "GET",
    }).then(r => { resolve(r.data) },
      r => { reject(r.message) });
  })
}

///////////////////////////////////////
///////////////////////////////////////
function getCoursesByInstructor(username, page) {
  return new Promise((resolve, reject) => {
    axios({
      url: VariableConstants.URL + `instructors/${username}/${page}`,
      method: "GET",
    }).then(r => { resolve(r.data) },
      r => { reject(r.message) });
  })
}
//////////////Require Aurhentication///////////////
/////////////////////////////////////////////////// 
function getCoursesOfStudent(username) {
  return new Promise((resolve, reject) => {
    axios({
      url: VariableConstants.URL + `user/courses/${username}`,
      method: "GET",
      headers: {
        'Content-type': 'application/json',
        'Authorization': cookies.load(VariableConstants.TOKEN)
      }
    }).then(r => { resolve(r.data) },
      r => { reject(r.message) });
  })
}

function getUserCourseLessons(courseId) {
  return new Promise((resolve, reject) => {
    axios({
      url: VariableConstants.URL + `user/course-lessons/${courseId}`,
      method: "GET",
      headers: {
        'Content-type': 'application/json',
        'Authorization': cookies.load(VariableConstants.TOKEN)
      }
    }).then(r => { resolve(r.data) },
      r => { reject(r.message) });
  })
}

function getUserCourseSectionListByLesson(lessonId) {
  return new Promise((resolve, reject) => {
    axios({
      url: VariableConstants.URL + `user/lesson-sections/${lessonId}`,
      method: "GET",
      headers: {
        'Content-type': 'application/json',
        'Authorization': cookies.load(VariableConstants.TOKEN)
      }
    }).then(r => { resolve(r.data) },
      r => { reject(r.message) });
  })
}

function getSectionDetail(sectionId) {
  return new Promise((resolve, reject) => {
    axios({
      url: VariableConstants.URL + `user/section/${sectionId}`,
      method: "GET",
      headers: {
        'Content-type': 'application/json',
        'Authorization': cookies.load(VariableConstants.TOKEN)
      }
    }).then(r => { resolve(r.data) },
      r => { reject(r.message) });
  })
}

function changeCourseProgress(progress) {
  return new Promise((resolve, reject) => {
    axios({
      url: VariableConstants.URL + `user/progress`,
      method: "PATCH",
      data: progress,
      headers: {
        'Content-type': 'application/json',
        'Authorization': cookies.load(VariableConstants.TOKEN)
      }
    }).then(r => { resolve(r.data) },
      r => { reject(r.message) });
  })
}


function getCourseListManagement() {
  return new Promise((resolve, reject) => {
    axios({
      url: VariableConstants.URL + `management/course/all`,
      method: "GET",
      headers: {
        'Content-type': 'application/json',
        'Authorization': cookies.load(VariableConstants.TOKEN)
      }
    }).then(r => { resolve(r.data) },
      r => { reject(r.message) });
  })
}

function getLessonListManagement(courseId) {
  return new Promise((resolve, reject) => {
    axios({
      url: VariableConstants.URL + `management/lesson/all/${courseId}`,
      method: "GET",
      headers: {
        'Content-type': 'application/json',
        'Authorization': cookies.load(VariableConstants.TOKEN)
      }
    }).then(r => { resolve(r.data) },
      r => { reject(r.message) });
  })
}

function getSectionListManagement(lessonId) {
  return new Promise((resolve, reject) => {
    axios({
      url: VariableConstants.URL + `management/section/all/${lessonId}`,
      method: "GET",
      headers: {
        'Content-type': 'application/json',
        'Authorization': cookies.load(VariableConstants.TOKEN)
      }
    }).then(r => { resolve(r.data) },
      r => { reject(r.message) });
  })
}


function getLessonManagement(courseId) {
  return new Promise((resolve, reject) => {
    axios({
      url: VariableConstants.URL + `management/lesson/${courseId}`,
      method: "GET",
      headers: {
        'Content-type': 'application/json',
        'Authorization': cookies.load(VariableConstants.TOKEN)
      }
    }).then(r => { resolve(r.data) },
      r => { reject(r.message) });
  })
}

function createCourse(newCourse) {
  return new Promise((resolve, reject) => {
    axios({
      url: VariableConstants.URL + `management/course/create`,
      method: "POST",
      headers: {
        'Content-type': 'application/json',
        'Authorization': cookies.load(VariableConstants.TOKEN)
      },
      data:newCourse
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
  getCoursesOfStudent,
  getUserCourseLessons,
  getUserCourseSectionListByLesson,
  getSectionDetail,
  changeCourseProgress,
  getCourseListManagement,
  getLessonListManagement,
  createCourse,
  getLessonManagement,
  getSectionListManagement
}