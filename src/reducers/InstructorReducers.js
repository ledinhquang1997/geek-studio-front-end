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

const instructorDetailInitialState = {data:{}, err:false}
export const instructorDetail = (state = instructorDetailInitialState, action) => {
    switch (action.type) {
        case InstructorConstants.GET_INSTRUCTOR_DETAIL:
            return state
        case InstructorConstants.GET_INSTRUCTOR_DETAIL_SUCCESS:
            return {...state,data:action.payload.data, err:false}
        case InstructorConstants.GET_INSTRUCTOR_DETAIL_FAIL:
            return  {data:{}, err:true}
        default:
            return state
    }
}