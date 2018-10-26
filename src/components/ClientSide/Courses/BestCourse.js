import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CategoryActions } from "../../../actions";
import lottie from "lottie-web";
import animation from "../../../assets/animations/empty_box.json";

class BestCourse extends Component {
    componentDidMount() {
        if (this._el) {
            lottie.loadAnimation({
                container: this._el, // the dom element that will contain the animation
                renderer: "svg",
                loop: true,
                autoplay: true,
                animationData: animation
            });
        }
    }

    renderInstructorNames = () => {
        const {popularCourse} = this.props.categoryWithTopics
        var instructors = "";
        popularCourse.instructors.forEach((value, index) => {
            if (index === this.props.instructors.length - 1)
                instructors += value.name;
            else if (index === this.props.instructors.length - 2)
                instructors += value.name + " & ";
            else
                instructors += value.name + ", ";
        });
        return instructors;
    }
    renderMostPopularCourse = () => {
        if (this.props.categoryWithTopics) {
            if (this.props.categoryWithTopics.popularCourse) {
                const {popularCourse} = this.props.categoryWithTopics
                return <div className="best-course rounded container">
                    <div className="row">
                        <div className="col-lg-5 col-md-6 col-sm-6">
                            <img className="rounded best-course__image" src={popularCourse.image} alt={"Popular course"} />
                        </div>
                        <div className="col-lg-7 col-lg-6 col-sm-6">
                            <div className="best-course__content">
                                <h2>{popularCourse.name}</h2>
                                <h4 className="mt-1">Instructors: Hellen & Nancy</h4>
                                <div>
                                    <div className="course_info mt-3">
                                        <i className="fa fa-graduation-cap" aria-hidden="true" />
                                        <span> {popularCourse.amountStudent} Student</span>
                                    </div>
                                    <div className="course_info">
                                        <i className="fa fa-star" aria-hidden="true" />
                                        <span> {popularCourse.rating} Ratings</span>
                                    </div>
                                </div>

                                <p className="mt-2">{popularCourse.description}</p>
                                <button className="btn btn-primary">Explore course</button>

                                <div className="course_info float-right mr-4">
                                    <span className="lead font-weight-bold text-success"> {popularCourse.cost}$</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }

        }
    }
    renderClassForAnimationWating=()=>{
        if (this.props.categoryWithTopics) {
            if (this.props.categoryWithTopics.popularCourse) {
                return "d-none";
            }
            return "d-block";
        }
        return "d-block";
    }
    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid best-course__jumbotron">
                    <div className="container">
                        <h2 className="text-white ">{this.props.categoryWithTopics?this.props.categoryWithTopics.name:""}</h2>
                        <p className="lead text-white mb-4">Popular now</p>
                        <hr className="my-2 bg-light" />
                        <div className={this.renderClassForAnimationWating()} style={{width:"300px",height:"150px",margin:"auto"}} ref={el => (this._el = el)}></div>
                        {this.renderMostPopularCourse()}
                    </div>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getCurrentCategoryWithTopics: (categoryName) => {
            dispatch(CategoryActions.getCurrentCategoryWithTopics(categoryName))
        }
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        categoryWithTopics: state.currentCategoryWithTopics.data
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BestCourse)