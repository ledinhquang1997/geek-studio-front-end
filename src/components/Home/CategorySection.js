import React, { Component } from 'react';
import Course from '../Course';
import Category from '../Category';
class BestSellerSection extends Component {
    render() {
        return (

            <div className="courses">
                <div className="jumbotron jumbotron-fluid jumbotron jumbotron_middle">
                    <div className="container">
                        <h1 className="display-4">Explore courses</h1>
                        <p className="lead">Learning never be easier with <img src={require('../../images/logo-geek.png')} alt="" style={{ width: "40px" }} /></p>
                        <hr className="my-2" />
                    </div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <Category />
                            <Category/>
                            <Category/>
                            <Category/>
                        </div>
                    </div>
                </div>
                <div className="section_background parallax-window" data-parallax="scroll" data-image-src={require("../../images/courses_background.jpg")} data-speed="0.8" />
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="section_title_container text-center">
                                <h2 className="section_title">Programming courses</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row courses_row d-flex justify-content-center">
                        {/* <Course isSliderCourse={false} />
                        <Course isSliderCourse={false} />
                        <Course isSliderCourse={false} />
                        <Course isSliderCourse={false} />
                        <Course isSliderCourse={false} />
                        <Course isSliderCourse={false} /> */}
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="courses_button trans_200"><a href="">view all courses</a></div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default BestSellerSection;