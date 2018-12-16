import React, { Component } from 'react';
import AdminHeader from '../Common/AdminHeader';
import ManagementLessonEdit from './ManagementLessonEdit';
import ManagementLearner from './ManagementLearner';
import ManagementCourse from './ManagementCourse';
import ManagementCourseCreate from './ManagementCourseCreate';
import AlertInfo from '../Common/AlertInfo';
import LoadingSpin from '../Common/LoadingSpin';
import { connect } from 'react-redux';
import ManagementLesson from './ManagementLesson';
import ManagementSectionEdit from './ManagementSectionEdit';
import cookies from 'react-cookies';
import { VariableConstants } from '../../constants';
import ManagementLessonCreate from './ManagementLessonCreate';
import ManagementCourseEdit from './ManagementCourseEdit';
import Dashboard from './Dashboard';
import { PrivateRoute } from '../Common/private-route';
class Management extends Component {
    render() {
        const roles = cookies.load(VariableConstants.ROLES);
        return (
            <div>
                <AlertInfo />
                {this.props.loading.status && <LoadingSpin />}
                <AdminHeader />
                <div style={{ marginTop: 72 }}>
                    <PrivateRoute exact path="/management/dashboard" component={Dashboard} requiredRoles={[VariableConstants.ROLE_ADMIN]} />
                    <PrivateRoute exact path="/management/section/edit/:sectionId" requiredRoles={[VariableConstants.ROLE_ADMIN,VariableConstants.ROLE_INSTRUCTOR]} component={ManagementSectionEdit} />
                    <PrivateRoute exact path="/management/lesson/edit/:lessonId"  requiredRoles={[VariableConstants.ROLE_ADMIN,VariableConstants.ROLE_INSTRUCTOR]} component={ManagementLessonEdit} />
                    <PrivateRoute exact path="/management/lesson/all/:courseId"  requiredRoles={[VariableConstants.ROLE_ADMIN,VariableConstants.ROLE_INSTRUCTOR]} component={ManagementLesson} />
                    <PrivateRoute exact path="/management/lesson/create"  requiredRoles={[VariableConstants.ROLE_ADMIN,VariableConstants.ROLE_INSTRUCTOR]} component={ManagementLessonCreate} />
                    <PrivateRoute exact path="/management/user"  requiredRoles={[VariableConstants.ROLE_ADMIN]} component={ManagementLearner} />
                    <PrivateRoute exact path="/management/course/create"  requiredRoles={[VariableConstants.ROLE_ADMIN,VariableConstants.ROLE_INSTRUCTOR]} component={ManagementCourseCreate} />
                    <PrivateRoute exact path="/management/course/edit/:courseId"  requiredRoles={[VariableConstants.ROLE_ADMIN,VariableConstants.ROLE_INSTRUCTOR]} component={ManagementCourseEdit} />
                    <PrivateRoute exact path="/management/course"  requiredRoles={[VariableConstants.ROLE_ADMIN,VariableConstants.ROLE_INSTRUCTOR]} component={ManagementCourse} />
                    {roles.includes("ROLE_ADMIN") ? <PrivateRoute  requiredRoles={[VariableConstants.ROLE_ADMIN]} exact path="/management" component={Dashboard} />
                        : <PrivateRoute exact path="/management"  requiredRoles={[VariableConstants.ROLE_ADMIN,VariableConstants.ROLE_INSTRUCTOR]} component={ManagementCourse} />
                    }
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        loading: state.loading
    }
}
export default connect(mapStateToProps)(Management)