import React, { Component } from 'react';
import InstructorCard from '../../Common/InstructorCard';
import Slider from "react-slick";
import { connect } from 'react-redux';
import { InstructorActions } from '../../../actions'

class InstructorsSection extends Component {
    componentDidMount() {
        if(this.props.instructors.length===0)
        this.props.getAllInstructors();
    }


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
        return this.props.instructors.map((value, index) => {
            return (
                <InstructorCard key={index} username={value.username} name={value.name} quote={value.quote} image={value.image} categories={value.categories} company={value.company} />
            )
        })
    }
    render() {


        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
        };
        var responsiveSetting = [{
            breakpoint: 10000,
            settings: { slidesToShow: 4 }
        }
            , {
            breakpoint: 1400,
            settings: { slidesToShow: 3 }
        },
        {
            breakpoint: 800,
            settings: { slidesToShow: 2 }
        },
        {
            breakpoint: 530,
            settings: { slidesToShow: 1 }
        }]
        return (
            <div className="jumbotron jumbotron-fluid instructorSection__background">
                <div className="team">
                    <div className="team_background parallax-window" data-parallax="scroll" data-image-src="images/team_background.jpg" data-speed="0.8" />
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col">
                                <div className="section_title_container text-center">
                                    <h2 className="section_title">Best instructors around the world</h2>
                                    <div className="section_subtitle"><p>Our Instructor Support Team is here for you 24/7 to help you through your course creation needs</p></div>
                                </div>
                            </div>
                        </div>
                       
                        <div className="row">
                            <div className="container col-1 d-flex align-items-center justify-content-center slider-btn-arrow">
                                <button className="btn btn-circle mr-3 d-flex justify-content-center align-items-center high__zindex" onClick={this.previous}><i className="fas fa-backward"></i></button>
                            </div>
                            <div className="col-lg-10 col-md-12 col-sm-12 m-auto">
                                <Slider responsive={responsiveSetting} ref={c => (this.slider = c)} arrows={false} {...settings}>
                                    {this.renderInstructorCards()}
                                </Slider>
                            </div>
                            <div className="container col-1 d-flex align-items-center justify-content-center slider-btn-arrow">
                                <button className="btn btn-circle mr-3 d-flex justify-content-center align-items-center high__zindex" onClick={this.next}><i className="fas fa-forward"></i></button>
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
        instructors: state.instructors
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getAllInstructors: () => {
            dispatch(InstructorActions.fetchAllInstructor())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(InstructorsSection)