import React, { Component } from 'react';
import UserCourse from '../../Common/UserCourse';
import { CourseActions } from "../../../actions";
import { connect } from "react-redux";
import { forwardToNewPathname } from '../../Common/utilities';
import cookies from "react-cookies";
import { VariableConstants } from '../../../constants';

class UserProfilePage extends Component {

    componentWillMount() {
        if (this.props.coursesOfStudent.err) forwardToNewPathname("/404.html");
        if (this.props.coursesOfStudent.data.length === 0) {
            this.props.getCoursesOfStudent(cookies.load(VariableConstants.LOGIN_INFO).username);
        }
    }

    renderUserCourses=()=>{
        return this.props.coursesOfStudent.data.map((course)=>
            <UserCourse key={course.id} id={course.id} isSliderCourse={true}
            name={course.name} description={course.description}
            cost={course.cost} image={course.image}
            amountStudent={course.amountStudent} rating={course.rating} instructors={course.instructors} />
        )
    }

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
                    {this.renderUserCourses()}

                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        coursesOfStudent: state.coursesOfStudent
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getCoursesOfStudent: (username) => {
            dispatch(CourseActions.getCoursesOfStudent(username))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserProfilePage)