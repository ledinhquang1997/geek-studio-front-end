import React, { Component } from 'react';
import InstructorCard from '../InstructorCard';
import Slider from "react-slick";
import { connect } from 'react-redux';
import { InstructorActions } from '../../actions'

class InstructorsSection extends Component {
    componentDidMount() {
        this.props.getAllInstructors();
    }


    next = () => {
        this.slider.slickNext();
    }
    previous = () => {
        this.slider.slickPrev();
    }
    /////////////////////////////////
    ////////////////////////////////
    ////RENDER SECTION
    renderInstructorCards = () => {
        return this.props.instructors.map((value, index) => {
            return (
                    <InstructorCard key={value.id} name={value.name} quote={value.quote} image={value.image} categories={value.categories} company={value.company}/>
            )
        })
    }
    render() {
        console.log(Array.isArray(this.props.instructors));
        console.log(this.props.instructors);

        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
        };
        var responsiveSetting = [{
            breakpoint: 1200,
            settings: { slidesToShow: 3 }
        },
        {
            breakpoint: 992,
            settings: { slidesToShow: 2 }
        },
        {
            breakpoint: 768,
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
                                    <h2 className="section_title">The Best Tutors in Town</h2>
                                    <div className="section_subtitle"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel gravida arcu. Vestibulum feugiat, sapien ultrices fermentum congue, quam velit venenatis sem</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="container col-1 d-flex align-items-center">
                                <button className="btn btn-circle mr-3 d-flex justify-content-center align-items-center" onClick={this.previous}><i className="material-icons">skip_previous</i></button>
                            </div>
                            <div className="col-10">
                                <Slider responsive={responsiveSetting} ref={c => (this.slider = c)} {...settings}>
                                    {this.renderInstructorCards()}
                                </Slider>
                            </div>
                            <div className="col-1 d-flex align-items-center">
                                <button className="btn btn-circle mr-3 d-flex justify-content-center align-items-center" onClick={this.next}><i className="material-icons">skip_next</i></button>
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