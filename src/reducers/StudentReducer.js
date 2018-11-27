import { StudentConstants } from "../constants";

const listStudentsInitialState = { data: [], err: false, isLoading: false }
export const listStudents = (state = listStudentsInitialState, action) => {
    switch (action.type) {
        case StudentConstants.GET_LIST_STUDENTS:
            return { ...state, isLoading: true }
        case StudentConstants.GET_LIST_STUDENTS_SUCCESS:
            return { ...state, data: action.payload.data, isLoading: true }
        case StudentConstants.GET_LIST_STUDENTS_FAIL:
            return { ...state, data: [], err: true }
        default:
            return state
    }
}