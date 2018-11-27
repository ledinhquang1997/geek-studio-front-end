import { StudentConstants } from '../constants';

function getListStudents() {
    return { type: StudentConstants.GET_LIST_STUDENTS }
}

function getListStudentsSuccess(data) {
    return { type: StudentConstants.GET_LIST_STUDENTS_SUCCESS, payload:{data:data}}
}


function getListStudentsFail() {
    return { type: StudentConstants.GET_LIST_STUDENTS_FAIL}
}

export const StudentActions = {
    getListStudents,
    getListStudentsSuccess,
    getListStudentsFail
}