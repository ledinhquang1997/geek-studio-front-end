import { ManagementConstants } from '../constants';

function changeManagementSection(managementType, managementAction) {
    return { type: ManagementConstants.CHANGE_MANAGEMENT_SECTION, payload: { managementType: managementType, managementAction: managementAction } };
}

export const ManagementActions = {
    changeManagementSection
}
