import React, { Component } from 'react';
import UserCourse from '../../Common/UserCourse';
import { CourseActions } from "../../../actions";
import { connect } from "react-redux";
import { forwardToNewPathname } from '../../Common/utilities';
import cookies from "react-cookies";
import { VariableConstants } from '../../../constants';

class UserProfilePage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    componentWillMount() {
        if (this.props.coursesOfStudent.err) forwardToNewPathname("/404.html");
        if (this.props.coursesOfStudent.data.length === 0) {
            this.props.getCoursesOfStudent(cookies.load(VariableConstants.USERNAME));
        }
    }

    renderUserCourses=()=>{
        return this.props.coursesOfStudent.data.map((course)=>
            <UserCourse key={course.id} id={course.id} isSliderCourse={true}
            name={course.name} description={course.description}
            cost={course.cost} image={course.image}
            amountStudent={course.amountStudent} rating={course.rating} instructors={course.instructors}
            totalSection={course.totalSection}  sectionProgress={course.sectionProgress}/>
        )
    }

    render() {
        return (
            <div style={{minHeight:"100vh"}}>
                <div className="sidenav">
                    <a href="" className="lead sidenav-active mt-3"><i class="fas fa-chalkboard-teacher"></i> Courses</a>
                    <a href="" className="lead"><i class="fas fa-th"></i> Account </a>
                    {/* <a href="" className="lead"><i class="fas fa-book-reader"></i> Course</a>
                    <a href="" className="lead"><i class="fas fa-book-open"></i> Lesson</a> */}
                </div>
                <div className="management pt-3">
                    {this.props.coursesOfStudent.isLoading?<div className="d-flex justify-content-center"><img src={require("../../../assets/images-system/bar.svg")} alt={"spinner"}/></div>:this.renderUserCourses()}

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