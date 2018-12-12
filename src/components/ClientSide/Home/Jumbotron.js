import React, { Component } from 'react';
import lottie from "lottie-web";
import animation from "../../../assets/animations/dna_like_loader.json";
import animation2 from "../../../assets/animations/the_final_frontier.json"
import { CourseServices } from '../../../services';
import Course from '../../Common/Course.js';
class Jumbotron extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameSearch: "",
            result: []
        }
    }

    componentDidMount() {
        if (this._el) {
            lottie.loadAnimation({
                container: this._el, // the dom element that will contain the animation
                renderer: "svg",
                loop: true,
                autoplay: true,
                animationData: animation
            });
        }
        if (this._lo) {
            lottie.loadAnimation({
                container: this._lo, // the dom element that will contain the animation
                renderer: "svg",
                loop: true,
                autoplay: true,
                animationData: animation2
            });
        }
    }

    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value

        })
    }

    handleSearch = () => {
        if (this.state.nameSearch.trim().length >= 2) {
            CourseServices.search(this.state.nameSearch).then(
                data => {
                    this.setState({
                        result: data
                    });
                },
                err => {

                }
            )
        }
    }
    renderCoursesSearch = () => {
        return this.state.result.map((course, index) => {
            return (
                <Course key={course.id} id={course.id} isSliderCourse={false}
                    name={course.name} description={course.description}
                    cost={course.cost} image={course.image}
                    amountStudent={course.amountStudent} rating={course.rating} instructors={course.instructors} />
            )
        })
    }
    renderResult = () => {
        if (this.state.result.length !== 0)
            return (<div className="container">
                <div className="row">
                    <div className="col">
                        <div className="section_title_container text-center">
                            <h2 className="section_title">Search Result</h2>
                        </div>
                    </div>
                </div>
                <div className="row courses_row d-flex justify-content-center">
                    {this.renderCoursesSearch()}
                </div>
            </div>)
    }
    render() {
        console.log(this.state);

        return (
            <React.Fragment>
                <div className="jumbotron jumbotron__background jumbotron__position">
                    <div className="row">
                        <div className="col-lg-4 d-flex justify-content-center">
                            <img src={require('../../../assets/images-system/logo-geek.png')} alt={"perfect"} style={{ width: "280px", height: "350px" }} />
                        </div>
                        <div className="col-lg-8 d-flex align-self-center justify-content-center flex-wrap">
                            <div className="jumbotron__animation-planet" ref={lo => (this._lo = lo)}></div>
                            <div className="jumbotron__animation-dna" ref={el => (this._el = el)}></div>
                            <h2 className="section-title text-center">The world’s largest selection of courses</h2>
                            <blockquote className="blockquote">
                                <p className="mb-0 text-center">Browse thousands of free classes for your career, passions and everything in between. Our classes are taught by the world's best practitioners in design, business, photography and more</p>
                            </blockquote>
                            <input className="form-control jumbotron__searchBar mt-3 high__zindex" name="nameSearch" onChange={this.handleChange} type="text" placeholder="Any thing you interest ..." value={this.state.nameSearch} />
                            <button className="btn btn-outline-success jumbotron__searchBtn mt-3 high__zindex" onClick={this.handleSearch}>Search</button>
                        </div>
                    </div>
                </div>
                {this.renderResult()}
            </React.Fragment>
        );
    }
}

export default Jumbotron;