import React, { Component } from 'react';
import AdminHeader from '../Common/AdminHeader';
import ManagementLessonEdit from './ManagementLessonEdit';
import ManagementLearner from './ManagementLearner';
import { Route } from 'react-router-dom';
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
class Management extends Component {
    render() {
        const roles = cookies.load(VariableConstants.ROLES);
        return (
            <div>
                <AlertInfo />
                {this.props.loading.status && <LoadingSpin />}
                <AdminHeader />
                <div style={{ marginTop: 72 }}>
                    <Route exact path="/management/section/edit/:sectionId" component={ManagementSectionEdit} />
                    <Route exact path="/management/lesson/edit/:lessonId" component={ManagementLessonEdit} />
                    <Route exact path="/management/lesson/all/:courseId" component={ManagementLesson} />
                    <Route exact path="/management/lesson/create" component={ManagementLessonCreate} />
                    <Route exact path="/management/user" component={ManagementLearner} />
                    <Route exact path="/management/course/create" component={ManagementCourseCreate} />
                    <Route exact path="/management/course/edit/:courseId" component={ManagementCourseEdit} />
                    <Route exact path="/management/course" component={ManagementCourse} />
                    {roles.includes("ROLE_ADMIN") ? <Route exact path="/management" component={ManagementLearner} />
                        : <Route exact path="/management" component={ManagementCourse} />
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