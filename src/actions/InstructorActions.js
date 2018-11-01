import { InstructorConstants } from '../constants';

function fetchAllInstructor() {
    return { type: InstructorConstants.GET_ALL_INSTRUCTORS };
}

function fetchAllInstructorSuccess(payload) {
    return { type: InstructorConstants.GET_ALL_INSTRUCTORS_SUCCESS, payload };
}

function fetchAllInstructorsFailed() {
    return {type:InstructorConstants.GET_ALL_INSTRUCTORS_FAILED}
}
function getInstructorDetail(username){
    return {type:InstructorConstants.GET_INSTRUCTOR_DETAIL, payload:{username:username}}
}
function getInstructorDetailSuccess(data){
    return {type:InstructorConstants.GET_INSTRUCTOR_DETAIL_SUCCESS, payload:{data:data}}
}
function getInstructorDetailFailed(){
    return {type:InstructorConstants.GET_INSTRUCTOR_DETAIL_FAIL}
}
export const InstructorActions= {
    fetchAllInstructor,fetchAllInstructorSuccess,fetchAllInstructorsFailed,getInstructorDetail,getInstructorDetailSuccess,getInstructorDetailFailed
}
