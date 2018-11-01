import React, { Component } from 'react';
import UserCourse from '../../Common/UserCourse';

class UserProfilePage extends Component {
    render() {
        return (
            <div>
                <div className="sidenav">
                    <a href="" className="lead sidenav-active mt-3"><i class="fas fa-chalkboard-teacher"></i> Courses</a>
                    <a href="" className="lead"><i class="fas fa-th"></i> Account </a>
                    {/* <a href="" className="lead"><i class="fas fa-book-reader"></i> Course</a>
                    <a href="" className="lead"><i class="fas fa-book-open"></i> Lesson</a> */}
                </div>
                <div className="management pt-3">
                    <UserCourse/>
                    
                </div>
                <div style={{height:"500px"}}></div>
            </div>
        );
    }
}

export default UserProfilePage;