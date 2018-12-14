import React, { Component } from 'react';
import { SystemActions, ManagementActions, CourseActions } from '../../actions';
import { connect } from 'react-redux';
import { ManagementConstants } from '../../constants';
import { CourseServices } from '../../services/CourseServices';
import { Redirect } from 'react-router-dom';
class ManagementLessonCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lesson: {
                name: "",
                description: "",
                courseId: this.props.location.courseId
            },
            isRedirect: false
        }
    }

    componentWillMount() {
        this.props.changeManagementSection(ManagementConstants.LESSON, ManagementConstants.LESSON_CREATE);
        this.props.getCourseListManagement();

    }

    handleCreateLesson = (event) => {
        event.preventDefault();
        if (this.state.lesson.name.trim().length <= 4) {
            this.props.alertOn("warning", "Name attribute requires at least 4 characters!");
            return
        }
        else if (this.state.lesson.description.trim().length < 4) {
            this.props.alertOn("warning", "Description attribute requires at least 4 characters!");
            return
        }
        else if (!this.state.lesson.courseId) {
            this.props.alertOn("warning", "Choose a course please!");
            return
        }
        else {
            this.props.startLoading("Processing ...")
            CourseServices.createLesson(this.state.lesson).then(
                data => {
                    this.props.alertOn("success", "Create course" + data.name + " successfully")
                    this.props.stopLoading();
                    this.setState({
                        isRedirect: true,
                        url: "/management/lesson/edit/" + data.id
                    });
                },
                err => {
                    this.props.alertOn("warning", err)
                    this.props.stopLoading();
                })
        }
    }
    handleBack = (url) => {
        this.setState({
            isRedirect: true,
            url: url
        });
    }
    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            lesson: {
                ...this.state.lesson,
                [name]: value
            },
        })
    }
    renderOptions = () => {
        return this.props.courseListManagement.data.map((course, index) => <option key={course.id} selected={this.props.location.courseId === course.id} value={course.id}>{course.name}</option>)
    }

    renderRedirect = () => {
        if (this.state.isRedirect) {
            return <Redirect to={this.state.url} />
        }
    }
    render() {
        console.log(this.state);

        return (
            <React.Fragment>
                {this.renderRedirect()}
                <div className="management">
                    <div className="studypage-navbar mb-1 rounded d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                            <i className="fas fa-arrow-alt-circle-left fa-2x ml-3" onClick={() => this.handleBack(this.props.location.courseId ? "/management/lesson/all/" + this.props.location.courseId : "/management/course")}></i>
                        </div>
                        <div className="d-flex align-items-center">
                            {/* <i class="fas fa-arrow-alt-circle-right fa-2x"></i> */}
                        </div>
                    </div>
                    <div className="container mt-3">

                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Course</label>
                                <select onChange={this.handleChange} name="courseId" className="form-control">
                                    <option disabled selected value> Select a course of lesson </option>
                                    {this.renderOptions()}
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Name</label>
                                <input type="text" name="name" onChange={this.handleChange} className="form-control" value={this.state.lesson.name} placeholder="Course name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Description</label>
                                <textarea className="form-control" onChange={this.handleChange} name="description" value={this.state.lesson.description} rows={3} defaultValue={""} placeholder="Description" />
                            </div>
                            <div className="d-flex justify-content-end">
                                <button className="btn btn-lg btn-success" style={{ width: "100px" }} onClick={this.handleCreateLesson}>CREATE</button>
                            </div>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        sectionDetail: state.sectionDetail,
        courseListManagement: state.courseListManagement

    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        startLoading: (content) => {
            dispatch(SystemActions.startLoading(content))
        },
        alertOn: (type, content) => {
            dispatch(SystemActions.alertOn(type, content))
        },
        stopLoading: () => {
            dispatch(SystemActions.stopLoading())
        },
        changeManagementSection: (managementType, managementAction) => {
            dispatch(ManagementActions.changeManagementSection(managementType, managementAction))
        },
        getCourseListManagement: () => {
            dispatch(CourseActions.getCourseListManagement())
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ManagementLessonCreate)
