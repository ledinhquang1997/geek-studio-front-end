import React, { Component } from 'react';
import Slider from "react-slick";
import Course from '../../Common/Course';
import { connect } from "react-redux";
import lottie from 'lottie-web';
import animation from "../../../assets/animations/5_stars.json";
import animation1 from "../../../assets/animations/trophy.json";

import { CourseActions } from '../../../actions';
import { VariableConstants } from '../../../constants';

class BestSellerSection extends Component {
    constructor(props) {
        super(props);
        this.animation = {

        };
        this.animation1 = {};

    }

    componentDidMount() {
        if(this.props.highlightCourses.courses.length===0)
        this.props.getBestSellers();
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.highlightCourses.filter !== prevProps.highlightCourses.filter) {
            if (this._el) {
                if (this.props.highlightCourses.filter === VariableConstants.RATING) {
                    lottie.loadAnimation({
                        container: this._el, // the dom element that will contain the animation
                        renderer: "svg",
                        loop: true,
                        autoplay: true,
                        animationData: animation,
                        
                    });
                }
                else {
                    lottie.loadAnimation({
                        container: this._el, // the dom element that will contain the animation
                        renderer: "svg",
                        loop: true,
                        autoplay: true,
                        animationData: animation1
                    });
                }
            }
        }
    }
    next = () => {
        this.slider.slickNext();
    }
    previous = () => {
        this.slider.slickPrev();
    }

    changeFilter = (filter) => {
        if (filter === VariableConstants.BEST_SELLER) {
            this.props.getBestSellers();
        }
        else if (filter === VariableConstants.RATING) {
            this.props.getTopRating();
        }
    }

    ////////////////////////////
    ////////////////////////////
    ///////RENDER SECTION///////

    renderBestSellers = () => {
        return this.props.highlightCourses.courses.map((course, index) => {
            return (
                <Course key={course.id} id={course.id} isSliderCourse={true}
                    name={course.name} description={course.description}
                    cost={course.cost} image={course.image}
                    amountStudent={course.amountStudent} rating={course.rating} instructors={course.instructors} />
            )
        })
    }
    renderFilter = () => {
        if (this.props.highlightCourses.filter === VariableConstants.RATING) {
            return "Top Rating"
        }
        else if (this.props.highlightCourses.filter === VariableConstants.BEST_SELLER) {
            return "Best Sellers"
        }
    }
    renderFilterImage = () => {
        if (this.props.highlightCourses.filter === VariableConstants.RATING) {
            return <div style={{ width: "100px" }} ref={el => (this._el = el)}></div>
        }
        else if (this.props.highlightCourses.filter === VariableConstants.BEST_SELLER) {
            return <img src={require('../../../assets/images-system/bestseller.png')} style={{ width: "40px" }} alt="" />
            // return <div style={{ width: "60px" }} ref={el => (this._el = el)}></div>

        }
    }

    render() {
        var settings = {
            dots: true,
            speed: 500,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            pauseOnHover:true,
        };
        var responsiveSetting = [{
            breakpoint: 10000,
            settings: { slidesToShow: 4 }
        }
            , {
            breakpoint: 1400,
            settings: { slidesToShow: 4 }
        },
        {
            breakpoint: 1250,
            settings: { slidesToShow: 3 }
        },
        {
            breakpoint: 768,
            settings: { slidesToShow: 2 }
        }, {
            breakpoint: 550,
            settings: { slidesToShow: 1 }
        }
    ]
   
        return (
            <div className="container-fluid mb-5 bestseller-background">
                <div className="row">
                    <div className="col">
                        <div className="section_title_container text-center">
                            <h2 className="section_title d-flex align-items-center justify-content-center flex-wrap">
                                <div className="dropdown d-inline high__zindex">
                                    <button className="btn btn-outline-success dropdown-toggle" type="button"></button>
                                    <div className="dropdown-content">
                                        <a className="lead" onClick={() => this.changeFilter(VariableConstants.BEST_SELLER)} >Best Seller</a>
                                        <a className="lead" onClick={() => this.changeFilter(VariableConstants.RATING)}>Rating</a>
                                    </div>
                                </div>
                                &nbsp;
                                {this.renderFilter()} &nbsp;{this.renderFilterImage()}
                            </h2>
                            <div className="section_subtitle"><p className="lead">The most popular courses in this month is right below</p></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="container col-1 d-flex align-items-center justify-content-center slider-btn-arrow">
                        <button className="btn btn-circle mr-3 d-flex justify-content-center align-items-center high__zindex" onClick={this.previous}><i className="material-icons">skip_previous</i></button>
                    </div>
                    <div className="col-lg-10 col-md-12 col-sm-12 m-auto">
                        <Slider draggable={true} responsive={responsiveSetting} ref={c => (this.slider = c)} arrows={false} {...settings}>
                            {this.renderBestSellers()}
                        </Slider>
                    </div>
                    <div className="container col-1 d-flex align-items-center justify-content-center slider-btn-arrow">
                        <button className="btn btn-circle mr-3 d-flex justify-content-center align-items-center high__zindex" onClick={this.next}><i className="material-icons">skip_next</i></button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        highlightCourses: state.highlightCourses,
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getBestSellers: () => {
            dispatch(CourseActions.getBestSellerCourses())
        },
        getTopRating: () => {
            dispatch(CourseActions.getTopRating())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BestSellerSection)