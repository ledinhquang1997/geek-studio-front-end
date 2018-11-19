import { combineReducers } from 'redux';

import { listInstructors, instructorDetail } from './InstructorReducers';
import {
    highlightCourses, top6CoursesByCategory, currentCoursesByCategory,
    courseDetail, currentCoursesByInstructor, CoursesOfStudent, UserCourseLessons,
    studentCourseSectionList,sectionDetail,
            } from './CourseReducers';
import {listStudents} from './StudentManagementReducer';
import { listCategories, categorytToDisplay, currentCategoryWithTopics } from './CategoryReducer'
import { filter,alert } from './SystemReducer';
import { login,register } from './LoginReducer';

const rootReducer = combineReducers({
    instructors: listInstructors,
    highlightCourses: highlightCourses,
    categories: listCategories,
    top6CoursesByCategory: top6CoursesByCategory,
    categoryToDisplay: categorytToDisplay,
    filter: filter,
    login: login,
    currentCategoryWithTopics: currentCategoryWithTopics,
    currentCoursesByCategory: currentCoursesByCategory,
    courseDetail: courseDetail,
    instructorDetail: instructorDetail,
    currentCoursesByInstructor: currentCoursesByInstructor,
    coursesOfStudent: CoursesOfStudent,
    userCourseLessons: UserCourseLessons,
    studentCourseSectionList: studentCourseSectionList,
    sectionDetail:sectionDetail,
    listStudents:listStudents,
    alert:alert,
    register:register
})

export default rootReducer;
