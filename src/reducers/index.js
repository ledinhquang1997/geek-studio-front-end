import { combineReducers } from 'redux';

import { listInstructors, instructorDetail } from './InstructorReducers';
import {
    highlightCourses, top6CoursesByCategory, currentCoursesByCategory,
    courseDetail, currentCoursesByInstructor, CoursesOfStudent, UserCourseLessons,
    studentCourseSectionList,sectionDetail,courseListManagement,lessonListManagement,
    lessonManagement, sectionListManagement
            } from './CourseReducers';
import {listStudents} from './StudentReducer';
import { listCategories, categorytToDisplay, currentCategoryWithTopics } from './CategoryReducer'
import { filter,alert,loading,cart} from './SystemReducer';
import { login,register } from './LoginReducer';
import {management} from './ManagementReducers';
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
    register:register,
    management:management,
    courseListManagement:courseListManagement,
    loading:loading,
    lessonListManagement:lessonListManagement,
    lessonManagement:lessonManagement,
    sectionListManagement:sectionListManagement,
    cart:cart
})

export default rootReducer;
