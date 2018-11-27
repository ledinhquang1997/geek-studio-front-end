import { ManagementConstants } from "../constants";

const managementInitialState = { managementType: ManagementConstants.LEARNER, managementAction: ManagementConstants.LEARNER_MANAGEMENT }
export const management = (state = managementInitialState, action) => {
    switch (action.type) {
        case ManagementConstants.CHANGE_MANAGEMENT_SECTION:
            return { ...state, managementType: action.payload.managementType, managementAction: action.payload.managementAction }
        default:
            return state
    }
}