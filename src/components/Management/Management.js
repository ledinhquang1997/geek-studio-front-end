import React, { Component } from 'react';
import AdminHeader from '../Common/AdminHeader';
import ManagementLearner from './ManagementLearner';
import ManagementLessonEdit from './ManagementLessonEdit';
class Management extends Component {
    render() {
        return (
            <div>
                <AdminHeader/>
                {/* <ManagementLearner/> */}
                <ManagementLessonEdit/>
            </div>
        );
    }
}

export default Management;