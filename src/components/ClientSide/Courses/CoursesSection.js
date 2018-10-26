import React, { Component } from 'react';
import Course from "../../Common/Course";
import { CourseActions } from '../../../actions';
import { connect } from 'react-redux';
import { VariableConstants } from '../../../constants';
import ReactDOM from 'react-dom';

class CoursesSection extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();

    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.currentCoursesByCategory.currentPage!==prevProps.currentCoursesByCategory.currentPage){
        const domNode = ReactDOM.findDOMNode(this.myRef.current)
            domNode.scrollIntoView({ behavior:"smooth",block: 'start' })}
    }

    componentDidMount() {
        if (this.props.currentCoursesByCategory.courses.length === 0) {
            console.log("dispatch action get current courses by category filter page");
            this.props.getCurrentCoursesByCategory(this.props.categoryName, VariableConstants.POPULAR, 0);
        }
    }
    renderCourses = () => {
        return this.props.currentCoursesByCategory.courses.map((course, index) => {
            return <Course key={course.id} id={course.id} isSliderCourse={false}
                name={course.name} description={course.description}
                cost={course.cost} image={course.image}
                amountStudent={course.amountStudent} rating={course.rating} instructors={course.instructors} />
        })
    }
    render() {
        return (
            <React.Fragment>
                <div className="container" ref={this.myRef}>
                    <div className="row courses_row d-flex justify-content-center">

                        {this.renderCourses()}
                    </div>
                </div>
            </React.Fragment>
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
        currentCoursesByCategory: state.currentCoursesByCategory
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CoursesSection)