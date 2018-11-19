import React, { Component } from 'react';
import AdminHeader from '../Common/AdminHeader';
import ManagementLessonEdit from './ManagementLessonEdit';
import ManagementLearner from './ManagementLearner';
import {Route} from 'react-router-dom';
import ManagementCourse from './ManagementCourse';
class Management extends Component {
    render() {
        return (
            <div>
                <AdminHeader/>
                <Route exact path="/management/lesson/:id" component={ManagementLessonEdit}/>
                <Route exact path="/management/user" component={ManagementLearner}/>
                <Route exact path="/management/course" component={ManagementCourse}/>
                <Route exact path="/management" component={ManagementLearner}/>
            </div>
        );
    }
}

export default Management;