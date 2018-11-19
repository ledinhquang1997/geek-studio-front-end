import React, { Component } from 'react';
import lottie from "lottie-web";
import animation from "../../../assets/animations/dna_like_loader.json";
import animation2 from "../../../assets/animations/the_final_frontier.json"

class Jumbotron extends Component {
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
    render() {
        return (
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
                        <input className="form-control jumbotron__searchBar mt-3 high__zindex" type="text" placeholder="Any thing you interest ..." />
                        <button className="btn btn-outline-success jumbotron__searchBtn mt-3 high__zindex" type="submit">Search</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Jumbotron;