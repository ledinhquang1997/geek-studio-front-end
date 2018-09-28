import {fetchInstructorList} from './InstructorSagas';
import {fetchBestSellerCourses} from './CourseSagas';
import {takeEvery} from 'redux-saga/effects'
import { InstructorConstants } from '../constants';
import { CourseConstant } from '../constants';

export default function* rootSaga(){
    yield takeEvery(InstructorConstants.GET_ALL_INSTRUCTORS,fetchInstructorList)
    yield takeEvery(CourseConstant.GET_BEST_SELLER_COURSE,fetchBestSellerCourses)
}