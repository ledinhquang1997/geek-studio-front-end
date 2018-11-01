import React, { Component } from 'react';
import Course from "../../Common/Course";
import { CourseActions } from '../../../actions';
import { connect } from 'react-redux';
import { VariableConstants } from '../../../constants';
import { forwardToNewPathname } from '../../Common/utilities';

class CoursesOfInstructor extends Component {
    componentDidMount() {
        if (this.props.currentCoursesByInstructor.err === true) forwardToNewPathname("/404.html");
    }
    renderCourses = () => {
        return this.props.currentCoursesByInstructor.courses.map((course, index) => {
            return <Course key={course.id} id={course.id} isSliderCourse={false}
                name={course.name} description={course.description}
                cost={course.cost} image={course.image}
                amountStudent={course.amountStudent} rating={course.rating} instructors={course.instructors} />
        })
    }
    render() {
        return (
            <div className="instructor-courses-section">
                <div className="container">
                    <h3 className="text-center mt-4 text-secondary">Course taught by instructor</h3>
                    <div className="row courses_row d-flex justify-content-center">

                        {this.renderCourses()}
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getCoursesByInstructor: (username, page) => {
            dispatch(CourseActions.getCoursesByInstructor(username, page))
        }
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        currentCoursesByInstructor: state.currentCoursesByInstructor,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CoursesOfInstructor)