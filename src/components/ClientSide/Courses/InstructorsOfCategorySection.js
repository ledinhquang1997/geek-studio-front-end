import React, { Component } from 'react';
import InstructorCard from '../../Common/InstructorCard';
import Slider from "react-slick";
import { connect } from 'react-redux';
import { InstructorActions } from '../../../actions'

class InstructorsOfCategorySection extends Component {

    next = () => {
        this.slider.slickNext();
    }
    previous = () => {
        this.slider.slickPrev();
    }
    /////////////////////////////////s
    ////////////////////////////////
    ////RENDER SECTION
    renderInstructorCards = () => {
        if (this.props.data)
            return this.props.data.instructors.map((value, index) => {
                return (
                    <InstructorCard key={index} name={value.name} quote={value.quote} image={value.image} categories={value.categories} company={value.company} />
                )
            })
    }
    render() {

        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow:  this.props.data?this.props.data.instructors.length >= 3 ? 3 : this.props.data.instructors.length:0,
            slidesToScroll: 1,
        };
        var responsiveSetting = [{
            breakpoint: 10000,
            settings: { slidesToShow:  this.props.data?this.props.data.instructors.length >= 4 ? 3 : this.props.data.instructors.length:0 }
        }
            , {
            breakpoint: 1400,
            settings: { slidesToShow:  this.props.data?this.props.data.instructors.length >= 3 ? 3 : this.props.data.instructors.length:0 }
        },
        {
            breakpoint: 800,
            settings: { slidesToShow:  this.props.data?this.props.data.instructors.length >= 3 ? 2 : this.props.data.instructors.length:0 }
        },
        {
            breakpoint: 530,
            settings: { slidesToShow:  this.props.data?this.props.data.instructors.length >= 3 ? 1 : this.props.data.instructors.length:0 }
        }]
        return (
            <div className="jumbotron jumbotron-fluid instructorSection--category__background">
                <div className="team">
                    <div className="team_background parallax-window"/>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col">
                                <div className="section_title_container text-center">
                                    <h2 className="section_title">All {this.props.data ? this.props.data.name.toLowerCase() : ""} instructors</h2>
                                    <div className="section_subtitle"><p>Click to see these amazing instructors</p></div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="container col-1 d-flex align-items-center justify-content-center slider-btn-arrow">
                                <button className="btn btn-circle mr-3 d-flex justify-content-center align-items-center high__zindex" onClick={this.previous}><i className="material-icons">skip_previous</i></button>
                            </div>
                            <div className="col-lg-10 col-md-12 col-sm-12 m-auto">
                                <Slider responsive={responsiveSetting} ref={c => (this.slider = c)} arrows={false} {...settings}>
                                    {this.renderInstructorCards()}
                                </Slider>
                            </div>
                            <div className="container col-1 d-flex align-items-center justify-content-center slider-btn-arrow">
                                <button className="btn btn-circle mr-3 d-flex justify-content-center align-items-center high__zindex" onClick={this.next}><i className="material-icons">skip_next</i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.currentCategoryWithTopics.data,
        currentCoursesByCategory: state.currentCoursesByCategory,
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getAllInstructors: () => {
            dispatch(InstructorActions.fetchAllInstructor())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(InstructorsOfCategorySection)