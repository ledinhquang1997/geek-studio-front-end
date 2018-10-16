import React, { Component } from 'react';
import {connect} from 'react-redux';
import { CourseActions } from '../../../actions';
import { VariableConstants } from '../../../constants';

class FilterTab extends Component {
    getPopularCourses=(e)=>{
        e.preventDefault();
        if(this.props.currentCoursesByCategory.filter!==VariableConstants.POPULAR){
            console.log("dispatch get current POPULAR courses by category from FilterTab");
            this.props.getCurrentCoursesByCategory(this.props.categoryName,VariableConstants.POPULAR,0);
        }
    }

    getRatingCourses=(e)=>{
        e.preventDefault();
        if(this.props.currentCoursesByCategory.filter!==VariableConstants.RATING){
            console.log("dispatch get current RATING courses by category from FilterTab");
            this.props.getCurrentCoursesByCategory(this.props.categoryName,VariableConstants.RATING,0);
        }
    }
    render() {
        return (
            <div className="container">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className={this.props.currentCoursesByCategory.filter===VariableConstants.POPULAR?"nav-link active":"nav-link"} onClick={this.getPopularCourses} href="">Popular</a>
                    </li>
                    <li className="nav-item">
                        <a className={this.props.currentCoursesByCategory.filter===VariableConstants.RATING?"nav-link active":"nav-link"} onClick={this.getRatingCourses} href="">Rating</a>
                    </li>
                </ul>
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
        currentCoursesByCategory: state.currentCoursesByCategory
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FilterTab)