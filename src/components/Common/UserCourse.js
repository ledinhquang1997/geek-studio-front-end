import React, { Component } from 'react';

class UserCourse extends Component {
    renderInstructorNames = () => {
        var instructors = "";
        this.props.instructors.forEach((value, index) => {
            if (index === this.props.instructors.length - 1)
                instructors += value.name;
            else if (index === this.props.instructors.length - 2)
                instructors += value.name + " & ";
            else
                instructors += value.name + ", ";
        });
        return instructors;
    }
    render() {
        return (
            <div className="user-course rounded container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6 d-flex justify-content-center">
                        <img className="rounded user-course__image" src={this.props.image} alt={"Popular course"} />
                    </div>
                    <div className="col-lg-8 col-lg-6 col-sm-6">
                        <div className="user-course__content">
                            <h3>{this.props.name}</h3>
                            <h5 className="mt-1">Instructors: {this.renderInstructorNames()}</h5>
                            <div>
                                <div className="course_info mt-3">
                                    <i className="fa fa-graduation-cap" aria-hidden="true" />
                                    <span> {this.props.amountStudent} Student</span>
                                </div>
                                <div className="course_info">
                                    <i className="fa fa-star" aria-hidden="true" />
                                    <span> {this.props.rating} Ratings</span>
                                </div>
                            </div>


                            <p className="mt-2">{this.props.description}</p>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: "10%" }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>

                            <div className="course_info float-left mr-4 mb-3 mt-3" >
                                <button className="btn btn-primary btn-lg">Continue</button>

                            </div>
                            <div className="course_info float-right mr-4 mb-3 mt-3" >

                                <span className="lead font-weight-bold text-success">30%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserCourse;