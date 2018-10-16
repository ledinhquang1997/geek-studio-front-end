import React, { Component } from 'react';
import Course from "../../Common/Course";
import { CourseActions } from '../../../actions';
import { connect } from 'react-redux';
import { VariableConstants } from '../../../constants';
class CoursesSection extends Component {
    componentDidMount() {
        if (this.props.courses.length === 0) {
            console.log("dispatch action get current courses by category filter page");
            this.props.getCurrentCoursesByCategory(this.props.categoryName, VariableConstants.POPULAR, 0);
        }
    }
    renderCourses = () => {
        return this.props.courses.map((course, index) => {
            return <Course key={course.id} isSliderCourse={false}
                name={course.name} description={course.description}
                cost={course.cost} image={course.image}
                amountStudent={course.amountStudent} rating={course.rating} instructors={course.instructors} />
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row courses_row d-flex justify-content-center">

                    {this.renderCourses()}
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getCurrentCoursesByCategory: (category, filter, page) => {
            dispatch(CourseActions.getCurrentCoursesByCategory(category, filter, page))
        }
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        courses: state.currentCoursesByCategory.courses
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CoursesSection)