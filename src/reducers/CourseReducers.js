import { CourseConstant } from '../constants';

const bestSellerInitialState = []
export const bestSellerReducer = (state = bestSellerInitialState, action) => {
    switch (action.type) {
        case CourseConstant.GET_BEST_SELLER_COURSE:
            return state
        case CourseConstant.GET_BEST_SELLER_COURSE_SUCCESS:
            return action.payload
        case CourseConstant.GET_BEST_SELLER_COURSE_FAILED:
            return state
        default:
            return state
    }
}