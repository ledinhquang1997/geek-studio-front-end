import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import {CourseActions, ManagementActions, SystemActions } from '../../actions';
import { ManagementConstants } from '../../constants';
import { CourseServices } from '../../services/CourseServices';

class ManagementLesson extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRedirect: false,
            url: '',
            confirm: false,
            idToDelete: '',
            lessonToDelete: ''
        }
    }

    componentWillMount() {
        this.props.getLessonListManagement(this.props.match.params.courseId);
        this.props.changeManagementSection(ManagementConstants.LESSON, ManagementConstants.LESSON_MANAGEMENT)
    }

    onCUDClickHandler = (url) => {
        this.setState({
            isRedirect: true,
            url: url
        });
    }
    handleDelete = () => {
        CourseServices.deleteLesson(this.state.idToDelete).then(
            data => {
                this.props.alertOn("success", "Deleted course " + this.state.idToDelete);
                this.props.getLessonListManagement(this.props.match.params.courseId);
                this.setState({
                    confirm: false
                });
            },
            err => {
                this.props.alertOn("danger", "Error: " + err)
            }
        )
    }
    renderListLesson = () => {
        return this.props.lessonListManagement.data.map((lesson) =>
            <tr>
                <td>{lesson.id}</td>
                <td>{lesson.ordinalNumber}</td>
                <td>{lesson.name}</td>
                <td>{new Date(lesson.dateCreate).toString()}</td>
                <td>{new Date(lesson.lastUpdate).toString()}</td>
                <td className="text-center">
                    <Link to={"/management/lesson/edit/" + lesson.id}><i className="fas fa-pen fa-lg pr-3 buttonIcon"></i></Link>
                    <i className="far fa-trash-alt fa-lg buttonIcon" onClick={()=>this.setState({confirm:true, lessonToDelete:lesson.name, idToDelete:lesson.id})}></i>
                </td>
            </tr>)
    }
    renderRedirect = () => {
        return <Redirect to={{ pathname: this.state.url, courseId: this.props.match.params.courseId }} />
    }

    renderModal = () => {
        return <div className="section-create__modal">
            <div className="confirm__modal-content rounded">
                <div style={{ width: '97%', margin: 'auto', display: 'flex', justifyContent: "flex-end" }}>
                    <i style={{ color: "black", cursor: "pointer " }} className="far fa-window-close fa-2x" onClick={() => this.setState({ confirm: false })}></i>
                </div>
                <div className="container mt-4">
                    <p className="text-center mb-0 lead">You are attempting to <strong>delete</strong> course <br /><strong><i>{this.state.courseToDelete}</i></strong></p>
                    <h4 className="text-center mb-0">Continue?</h4>
                    <div className="row mt-3 mb-4">
                        <div className="col-6">
                            <button className="btn btn-danger btn-lg" style={{ width: '70%', display: 'block', margin: 'auto' }} onClick={this.handleDelete}>YES</button>
                        </div>
                        <div className="col-6">
                            <button className="btn btn-warning btn-lg" style={{ width: '70%', display: 'block', margin: 'auto' }} onClick={() => this.setState({ confirm: false })}>NO</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    }

    render() {
        return (
            <React.Fragment>
                {this.state.confirm && this.renderModal()}
                {this.state.isRedirect && this.renderRedirect()}
                <div className="management">
                    <div className="studypage-navbar mb-1 rounded">
                        <p className="text-left lead ml-3"></p>
                    </div>
                    {this.props.lessonListManagement.isLoading ? <div className="d-flex justify-content-center"><img src={require("../../assets/images-system/ring.svg")} alt={"spinner"} /></div>
                        : <table className="table table-hover">
                            <thead className="management-thead">
                                <tr>
                                    <th scope="col" className="lead" style={{ width: "250px" }}>ID</th>
                                    <th scope="col" className="lead" style={{ width: "50px" }} >No.</th>
                                    <th scope="col" className="lead" style={{ width: "250px" }}>Name</th>
                                    <th scope="col" className="lead" style={{ width: "150px" }}>Date Created</th>
                                    <th scope="col" className="lead" style={{ width: "150px" }}>Last Update</th>
                                    <th scope="col" className="lead text-center" style={{ width: "200px" }}><i style={{ cursor: "pointer" }} onClick={() => this.onCUDClickHandler("/management/lesson/create")} className="fas fa-plus fa-lg text-center"></i></th>
                                </tr>
                            </thead>
                            <tbody className="management-tbody">
                                {this.renderListLesson()}
                            </tbody>
                        </table>}
                    {!this.props.lessonListManagement.isLoading && this.props.lessonListManagement.data.length === 0 && <p className="text-center lead">There is no course in the database. Please add new course!</p>}

                </div>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getLessonListManagement: (courseId) => {
            dispatch(CourseActions.getLessonListManagement(courseId))
        },
        changeManagementSection: (managementType, managementAction) => {
            dispatch(ManagementActions.changeManagementSection(managementType, managementAction))
        },
        alertOn: (type, content) => {
            dispatch(SystemActions.alertOn(type, content))
        },
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        lessonListManagement: state.lessonListManagement
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ManagementLesson)