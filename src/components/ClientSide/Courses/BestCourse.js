import React, { Component } from 'react';

class BestCourse extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid best-course__jumbotron">
                    <div className="container">
                        <h2 className="text-white ">Programming</h2>
                        <p className="lead text-white mb-4">Popular now</p>
                        <hr className="my-2 bg-light" />
                        <div className="best-course container">
                            <div className="row">
                                <div className="col-lg-5 col-md-6 col-sm-6">
                                    <img className="rounded best-course__image" src={require("../../../assets/images/electonic.jpg")} />
                                </div>
                                <div className="col-lg-7 col-lg-6 col-sm-6">
                                    <div className="best-course__content">
                                        <h2>Conquer javascript in 3 days</h2>
                                        <h4 className="mt-1">Instructors: Hellen & Nancy</h4>
                                        <div>
                                            <div className="course_info mt-3">
                                                <i className="fa fa-graduation-cap" aria-hidden="true" />
                                                <span> 1200 Student</span>
                                            </div>
                                            <div className="course_info">
                                                <i className="fa fa-star" aria-hidden="true" />
                                                <span> 4.5 Ratings</span>
                                            </div>
                                        </div>

                                        <p className="mt-2">Aug 14 Shu Uesugi thanks for writing this. Sara’s theme is real nice. BTW a shameless plug here, I am the author of a theme called 🦄 Shades of Purple </p>
                                        <button className="btn btn-primary">Explore course</button>

                                        <div className="course_info float-right mr-4">
                                            <span className="lead font-weight-bold text-success"> 120$</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BestCourse;