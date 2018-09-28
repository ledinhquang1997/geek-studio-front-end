import { InstructorConstants } from '../constants';

const listInstructorsInitialState = []
export const listInstructors = (state = listInstructorsInitialState, action) => {
    switch (action.type) {
        case InstructorConstants.GET_ALL_INSTRUCTORS:
            return state
        case InstructorConstants.GET_ALL_INSTRUCTORS_SUCCESS:
            return action.payload
        default:
            return state
    }
}