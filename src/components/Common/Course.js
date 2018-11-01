import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
class Course extends Component {
    constructor(props) {
        super(props);
        this.state={
            isRedirect:false
        }
    }
    
    redirect=()=>{
        this.setState({
            isRedirect:true
        });
    }
    //////////////////////////////////
    ////////////////////////////////////
    ////////RENDER SECTION/////////////
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
            <React.Fragment>
                {this.state.isRedirect ? <Redirect to={"/course/" + this.props.id} /> : ""}
                <div className={this.props.isSliderCourse ? "" : "mb-5 mt-3 col-md-6 col-lg-4 col-xl-3"} onClick={this.redirect}>
                    <div className={this.props.isSliderCourse ? "course course_slider" : "course"}>
                        <div className="course_image_frame" ><img className="course_image" src={this.props.image} alt="" /></div>
                        <div className="course_body">
                            <div className="course_title"><a>{this.props.name}</a></div>
                            <div className="course_teacher">{this.renderInstructorNames()}</div>
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
            </React.Fragment>
        );
    }
}
export default Course;