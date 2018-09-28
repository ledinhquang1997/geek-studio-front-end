import React, { Component } from 'react';

class Course extends Component {
    render() {
        
        return (
            <div className={this.props.isSliderCourse?"":"col-lg-4 col-md-6 mb-5 col-xl-3"}>
                <div className={this.props.isSliderCourse?"course course_slider":"course"}>
                    <div className="course_image_frame"><img className="course_image" src={require("../assets/images/"+this.props.image)} alt=""/></div>
                    <div className="course_body">
                        <h3 className="course_title"><a href="">{this.props.name}</a></h3>
                        <div className="course_teacher">Mr. John Taylor</div>
                        <div className="course_text">
                            <p>{this.props.description}</p>
                        </div>
                    </div>
                    <div className="course_footer">
                        <div className="course_footer_content d-flex flex-row align-items-center justify-content-start">
                            <div className="course_info">
                                <i className="fa fa-graduation-cap" aria-hidden="true" />
                                <span> {this.props.amountStudent} Student</span>
                            </div>
                            <div className="course_info">
                                <i className="fa fa-star" aria-hidden="true" />
                                <span> {this.props.rating} Ratings</span>
                            </div>
                            <div className="course_price ml-auto">${this.props.cost}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Course;