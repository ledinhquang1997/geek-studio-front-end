import axios from 'axios';
import { VariableConstants } from '../constants';
import cookies from 'react-cookies';

function getBestSellerCourses() {
  return new Promise((resolve, reject) => {
    axios({
      url: VariableConstants.URL + `course/bestsellers`,
      method: "GET",
    }).then(r => { resolve(r.data) },
    r => { reject(r.response.data.message) });
  })
}

function getTopRatingCourses() {
  return new Promise((resolve, reject) => {
    axios({
      url: VariableConstants.URL + `course/toprating`,
      method: "GET",
    }).then(r => { resolve(r.data) },
    r => { reject(r.response.data.message) });
  })
}

function getTop6CoursesByCategoryId(id) {
  return new Promise((resolve, reject) => {
    axios({
      url: VariableConstants.URL + "course/top-by-category/" + id,
      method: "GET",
    }).then(r => { resolve(r.data) },
    r => { reject(r.response.data.message) });
  })
}

function getCoursesByCategoryFilterPage(category, filter, page) {
  return new Promise((resolve, reject) => {
    axios({
      url: VariableConstants.URL + `course/by-category-filter-page/${category}/${filter}/${page}`,
      method: "GET",
    }).then(r => { resolve(r.data) },
    r => { reject(r.response.data.message) });
  })
}

function getCourseDetail(courseId) {
  return new Promise((resolve, reject) => {
    axios({
      url: VariableConstants.URL + `course/${courseId}`,
      method: "GET",
    }).then(r => { resolve(r.data) },
    r => { reject(r.response.data.message) });
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
    r => { reject(r.response.data.message) });
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
    r => { reject(r.response.data.message) });
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
    r => { reject(r.response.data.message) });
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
    r => { reject(r.response.data.message) });
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
    r => { reject(r.response.data.message) });
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
    r => { reject(r.response.data.message) });
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
    r => { reject(r.response.data.message) });
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
    r => { reject(r.response.data.message) });
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
    r => { reject(r.response.data.message) });
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
    r => { reject(r.response.data.message) });
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
    r => { reject(r.response.data.message) });
  })
}

function updateLesson(lesson) {
  return new Promise((resolve, reject) => {
    axios({
      url: VariableConstants.URL + `management/lesson/`,
      method: "PUT",
      headers: {
        'Content-type': 'application/json',
        'Authorization': cookies.load(VariableConstants.TOKEN)
      },
      data:lesson
    }).then(r => { resolve(r.data) },
    r => { reject(r.response.data.message) });
  })
}

function getSectionUpdate(sectionId) {
  return new Promise((resolve, reject) => {
    axios({
      url: VariableConstants.URL + `management/section/${sectionId}`,
      method: "GET",
      headers: {
        'Content-type': 'application/json',
        'Authorization': cookies.load(VariableConstants.TOKEN)
      }
    }).then(r => { resolve(r.data) },
    r => { reject(r.response.data.message) });
  })
}

function updateSection(section) {
  return new Promise((resolve, reject) => {
    axios({
      url: VariableConstants.URL + `management/section/update`,
      method: "PUT",
      headers: {
        'Content-type': 'application/json',
        'Authorization': cookies.load(VariableConstants.TOKEN)
      },
      data:section
    }).then(r => { resolve(r.data) },
    r => { reject(r.response.data.message) });
  })
}

function createLesson(newLesson) {
  return new Promise((resolve, reject) => {
    axios({
      url: VariableConstants.URL + `management/lesson/`,
      method: "POST",
      headers: {
        'Content-type': 'application/json',
        'Authorization': cookies.load(VariableConstants.TOKEN)
      },
      data:newLesson
    }).then(r => { resolve(r.data) },
    r => { reject(r.response.data.message) });
  })
}

function createSection(newSection) {
  return new Promise((resolve, reject) => {
    axios({
      url: VariableConstants.URL + `management/section/`,
      method: "POST",
      headers: {
        'Content-type': 'application/json',
        'Authorization': cookies.load(VariableConstants.TOKEN)
      },
      data:newSection
    }).then(r => { resolve(r.data) },
    r => { reject(r.response.data.message) });
  })
}

function updateCourse(course) {
  return new Promise((resolve, reject) => {
    axios({
      url: VariableConstants.URL + `management/course/update`,
      method: "PUT",
      headers: {
        'Content-type': 'application/json',
        'Authorization': cookies.load(VariableConstants.TOKEN)
      },
      data:course
    }).then(r => { resolve(r.data) },
    r => { reject(r.response.data.message) });
  })
}

function search(name) {
  return new Promise((resolve, reject) => {
    axios({
      url: VariableConstants.URL + `course/search/${name}`,
      method: "GET",
      headers: {
        'Content-type': 'application/json',
      }
    }).then(r => { resolve(r.data) },
    r => { reject(r.response.data.message) });
  })
}


function deleteCourse(courseId) {
  return new Promise((resolve, reject) => {
    axios({
      url: VariableConstants.URL + `management/course/delete/${courseId}`,
      method: "DELETE",
      headers: {
        'Content-type': 'application/json',
        'Authorization': cookies.load(VariableConstants.TOKEN)

      }
    }).then(r => { resolve(r.data) },
      r => { reject(r.response.data.message) });
  })
}

function deleteLesson(lessonId) {
  return new Promise((resolve, reject) => {
    axios({
      url: VariableConstants.URL + `management/lesson/delete/${lessonId}`,
      method: "DELETE",
      headers: {
        'Content-type': 'application/json',
        'Authorization': cookies.load(VariableConstants.TOKEN)
      }
    }).then(r => { resolve(r.data) },
      r => { reject(r.response.data.message) });
  })
}

function deleteSection(sectionId) {
  return new Promise((resolve, reject) => {
    axios({
      url: VariableConstants.URL + `management/section/delete/${sectionId}`,
      method: "DELETE",
      headers: {
        'Content-type': 'application/json',
        'Authorization': cookies.load(VariableConstants.TOKEN)
      }
    }).then(r => { resolve(r.data) },
      r => { reject(r.response.data.message) });
  })
}

function addCourse(courseId) {
  return new Promise((resolve, reject) => {
    axios({
      url: VariableConstants.URL + `management/student/addCourse/${courseId}`,
      method: "GET",
      headers: {
        'Content-type': 'application/json',
        'Authorization': cookies.load(VariableConstants.TOKEN)
      }
    }).then(r => { resolve(r.data) },
    r => { reject(r.response.data.message) });
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
  getSectionListManagement,
  updateLesson,
  getSectionUpdate,
  updateSection,
  createLesson,
  createSection,
  updateCourse,
  search,
  deleteCourse,
  deleteLesson,
  deleteSection,
  addCourse
}