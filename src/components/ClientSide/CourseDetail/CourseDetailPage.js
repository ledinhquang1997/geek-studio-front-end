import React, { Component } from 'react';
import renderHTML from 'react-render-html';
import ReactDOM from 'react-dom'
import { connect } from "react-redux";
import { CourseActions } from '../../../actions';

class CourseDetailPage extends Component {

    componentDidMount() {
        if (Object.keys(this.props.courseDetail.data).length === 0 || this.props.match.params.id !== this.props.courseDetail.data.id) {
            this.props.getCourseDetail(this.props.match.params.id);
        }

    }
    componentDidUpdate(prevProps, prevState) {
        ReactDOM.findDOMNode(this).scrollTop = 0
    }

    renderInstructorNames = (instructorsList = []) => {
        var instructors = "";
        instructorsList.forEach((value, index) => {
            if (index === instructorsList.length - 1)
                instructors += value.name;
            else if (index === instructorsList.length - 2)
                instructors += value.name + " & ";
            else
                instructors += value.name + ", ";
        });
        return instructors;
    }

    renderImage = () => {
        const { data } = this.props.courseDetail
        let img = "https://via.placeholder.com/300"
        if (data) {
            if (data.image)
                img = data.image
        }
        return img;
    }

    renderRequirements = () => {
        const { data } = this.props.courseDetail
        if (!data) {
            return <div className="col-6 mb-3 lead">No requirement</div>
        }
        if (!data.requirements) {
            return <div className="col-6 mb-3 lead">No requirement</div>
        }
        if (data.requirements.length === 0) {
            return <div className="col-6 mb-3 lead">No requirement</div>
        }
        return data.requirements.map((value, index) => {
            return <div key={index} className="col-6 mb-3 lead"><i class="fas fa-angle-right"></i> {value}</div>
        })
    }

    rendercontentSummary = () => {
        const { data } = this.props.courseDetail
        if (!data) {

            return <div className="col-6 mb-3 lead">No content</div>
        }
        if (!data.contentSummary) {
            return <div className="col-6 mb-3 lead">No content</div>
        }
        if (data.contentSummary.length === 0) {
            return <div className="col-6 mb-3 lead">No content</div>
        }
        return data.contentSummary.map((value, index) => {
            return <div key={index} className="col-6 mb-3 lead"><i class="far fa-flag"></i> {value}</div>
        })
    }

    renderDescriptionDetail = () => {
        const { data } = this.props.courseDetail
        if (data) {
            if (data.descriptionDetail)
                return data.descriptionDetail;
        }
        return '<div className="col-6 mb-3 lead">No content</div>';
    }

    renderInstructors = () => {
        const { data } = this.props.courseDetail
        if (data) {
            if (data.instructors) {
                return data.instructors.map((instructor, index) => {
                    return (<div className="col-lg-6 col-md-12 mb-3 m-auto">
                        <div className="course-detail__instructor row">
                            <div className="col-4 d-flex align-items-center">
                                <img src={instructor.image}></img>
                            </div>
                            <div className="col-8 d-flex align-items-center">
                                <div className="p-2">
                                    <h4 className="text-left">{instructor.name}</h4>
                                    <p className="lead">{instructor.email}</p>
                                    <p><em>{instructor.quote}</em></p>
                                </div>
                            </div>
                        </div>
                    </div>)
                })
            }
        }
    }
    render() {
        const { data } = this.props.courseDetail

        return (
            <React.Fragment>
                    <div className="jumbotron jumbotron-fluid course-detail__jumbotron">
                        <div className="row m-auto course-detail__jumbotron--row">
                            <div className="container col-lg-8 col-md-6 col-sm-12">
                                <h3 className="display-4 text-white course-detail__title">{data.name}</h3>
                                <p className="lead text-white">{data.description}</p>
                                <div className="course_info mt-3">
                                    <i className="fa fa-graduation-cap fa-2x" aria-hidden="true" />
                                    <span className="h5 text-white"> {data.amountStudent} student</span>
                                </div>
                                &nbsp; &nbsp;
                        <div className="course_info">
                                    <i className="fa fa-star fa-2x" aria-hidden="true" />
                                    <span className="h5 text-white"> {data.rating} stars</span>
                                </div>
                                <hr className="my-2" />

                                <p className="text-white h5">Created by: {this.renderInstructorNames(data.instructors)}</p>
                            </div>
                            <div className="container col-lg-4 col-md-6 col-sm-12 high__zindex">
                                <div className="course-detail__card rounded">
                                    <img className="img-fluid p-2" style={{ height: '240px', width: '100%' }} src={this.renderImage()} alt="" />
                                    <h2 className="text-left ml-5">${data.cost}</h2>
                                    <button className="btn btn-success btn-lg course-detail__card--button">Add to cart</button>
                                    <button className="btn btn-outline-secondary btn-lg course-detail__card--button">Buy now</button>
                                    <p className="text-center text-warning">Buy now to get discount!</p>
                                    <div className="h-25"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container mb-3 course-detail__requirements">
                        <div className="course-detail__content-sumary course-detail__content-sumary--zoom  rounded col-lg-8">
                            <h3 className="pt-2">Requirements: </h3>
                            <div className="row pt-3">
                                {this.renderRequirements()}
                            </div>
                        </div>
                    </div>

                    <div className="container mb-3">
                        <div className="course-detail__content-sumary rounded col-12">
                            <h3 className="pt-2">Course summary: </h3>
                            <div className="row pt-3">
                                {this.rendercontentSummary()}
                            </div>
                        </div>
                    </div>

                    <div className="container mb-3">
                        <div className="course-detail__content-sumary rounded col-12">
                            <h3 className="pt-2">Description</h3>
                            <div className="pt-3 pb-3">
                                {renderHTML(this.renderDescriptionDetail())}
                            </div>
                        </div>
                    </div>
                    <div className="container mb-3">
                        <div className=" rounded col-12">
                            <h3 className="pt-2">About the instructors: </h3>
                            <div className="row pt-5 ">
                                {this.renderInstructors()}
                            </div>
                        </div>
                    </div>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getCourseDetail: (courseId) => {
            dispatch(CourseActions.getCourseDetail(courseId))
        }
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        courseDetail: state.courseDetail
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CourseDetailPage)