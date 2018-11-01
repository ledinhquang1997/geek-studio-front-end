import React, { Component } from 'react';

class Lessons extends Component {
    render() {
        return (
            <div>
                <div className="studypage__jumbotron">
                    <div className="studypage__container">
                        <div className="studypage__row">
                            <img className="studypage__jumbotron--image rounded" src={require("../../../assets/images/docker.png")} />
                            <div className="studypage__jumbotron--title">
                                <div className="w-75 m-auto">
                                <h2 className="text-left text-white mb-3 mt-2">Docker - magic tool</h2>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-warning" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                                </div>
                                <button className="btn btn-danger btn-lg">Continue</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="studypage-navbar">
                    <p className="text-center lead studypage-navbar__item">Course content</p>
                </div>

                <div className="list-lesson">
                    <div className="list-group">
                        <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                            <div className="d-flex w-100 justify-content-between">
                                <h4 className="mb-1">1. List group item heading</h4>
                                <i class="far fa-check-circle fa-lg align-self-center"></i>
                            </div>
                            <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                            <div className="d-flex w-100 justify-content-between">
                                <h4 className="mb-1">1. List group item heading</h4>
                                <i class="far fa-check-circle fa-lg align-self-center"></i>
                            </div>
                            <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                            <div className="d-flex w-100 justify-content-between">
                                <h4 className="mb-1">1. List group item heading</h4>
                                <i class="far fa-check-circle fa-lg align-self-center"></i>
                            </div>
                            <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                            <div className="d-flex w-100 justify-content-between">
                                <h4 className="mb-1">1. List group item heading</h4>
                                <i class="far fa-check-circle fa-lg align-self-center"></i>
                            </div>
                            <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                            <div className="d-flex w-100 justify-content-between">
                                <h4 className="mb-1">1. List group item heading</h4>
                                <i class="far fa-check-circle fa-lg align-self-center"></i>
                            </div>
                            <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                            <div className="d-flex w-100 justify-content-between">
                                <h4 className="mb-1">1. List group item heading</h4>
                                <i class="far fa-check-circle fa-lg align-self-center"></i>
                            </div>
                            <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                            <div className="d-flex w-100 justify-content-between">
                                <h4 className="mb-1">1. List group item heading</h4>
                                <i class="far fa-check-circle fa-lg align-self-center"></i>
                            </div>
                            <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Lessons;