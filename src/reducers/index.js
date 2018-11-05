import {combineReducers} from 'redux';

import {listInstructors, instructorDetail} from './InstructorReducers';
import {highlightCourses ,top6CoursesByCategory, currentCoursesByCategory, courseDetail,currentCoursesByInstructor, CoursesOfStudent} from './CourseReducers';
import {listCategories, categorytToDisplay, currentCategoryWithTopics} from './CategoryReducer'
import {filter} from './SystemReducer';
import {login} from './LoginReducer';

const rootReducer = combineReducers({
    instructors:listInstructors,
    highlightCourses:highlightCourses,
    categories:listCategories,
    top6CoursesByCategory:top6CoursesByCategory,
    categoryToDisplay:categorytToDisplay,
    filter:filter,
    login:login,
    currentCategoryWithTopics:currentCategoryWithTopics,
    currentCoursesByCategory:currentCoursesByCategory,
    courseDetail:courseDetail,
    instructorDetail:instructorDetail,
    currentCoursesByInstructor:currentCoursesByInstructor,
    coursesOfStudent:CoursesOfStudent
})

export default rootReducer;
