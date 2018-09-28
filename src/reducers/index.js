import {combineReducers} from 'redux';

import {listInstructors} from './InstructorReducers';
import {bestSellerReducer} from './CourseReducers';

const rootReducer = combineReducers({
    instructors:listInstructors,
    bestSellerCourses:bestSellerReducer
})

export default rootReducer;
