import {combineReducers} from 'redux';

import {listInstructors} from './InstructorReducers';
import {highlightCourses ,top6CoursesByCategory, currentCoursesByCategory} from './CourseReducers';
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
    currentCoursesByCategory:currentCoursesByCategory
})

export default rootReducer;
