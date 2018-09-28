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

export const InstructorActions= {
    fetchAllInstructor,fetchAllInstructorSuccess,fetchAllInstructorsFailed
}
