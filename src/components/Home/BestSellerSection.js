import React, { Component } from 'react';
import Slider from "react-slick";
import Course from '../Course';
import { connect } from "react-redux";

class BestSellerSection extends Component {
    next = () => {
        this.slider.slickNext();
    }
    previous = () => {
        this.slider.slickPrev();
    }

    ////////////////////////////
    ////////////////////////////
    ///////RENDER SECTION///////

    renderBestSellers = () => {
        return this.props.bestSellerCourses.map((course, index) => {
            return (
                <Course key={course.id} isSliderCourse={true}
                    name={course.name} description={course.description}
                    cost={course.cost} image={course.image}
                    amountStudent={course.amountStudent} rating={course.rating} />
            )
        })
    }

    render() {
        var settings = {
            dots: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay:true,
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
            breakpoint: 992,
            settings: { slidesToShow: 2 }
        },
        {
            breakpoint: 768,
            settings: { slidesToShow: 1 }
        }]
        return (
            <div className="container-fluid mb-5 bestseller-background">
                <div className="row">
                    <div className="col">
                        <div className="section_title_container text-center">
                            <h2 className="section_title">BEST SELLER <img src={require('../../images/bestseller.png')} style={{ width: "40px" }} alt="" /></h2>
                            <div className="section_subtitle"><p className="lead">The most popular courses in this month is right below</p></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="container col-1 d-flex align-items-center">
                        <button className="btn btn-circle mr-3 d-flex justify-content-center align-items-center" onClick={this.previous}><i className="material-icons">skip_previous</i></button>
                    </div>
                    <div className="col-10">
                        <Slider className="pb-2" responsive={responsiveSetting} arrows={false} lazyLoad={true} ref={c => (this.slider = c)} {...settings}>
                            {this.renderBestSellers()}
                        </Slider>
                    </div>
                    <div className="col-1 d-flex align-items-center">
                        <button className="btn btn-circle mr-3 d-flex justify-content-center align-items-center" onClick={this.next}><i className="material-icons">skip_next</i></button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        bestSellerCourses: state.bestSellerCourses
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BestSellerSection)