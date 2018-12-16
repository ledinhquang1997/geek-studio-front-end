import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { CourseActions, ManagementActions, SystemActions } from '../../actions';
import { ManagementConstants } from '../../constants';
import { CourseServices } from '../../services/CourseServices';

class ManagementCourse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRedirect: false,
            url: '',
            confirm: false,
            idToDelete: '',
            courseToDelete: ''
        }
    }

    componentWillMount() {
        this.props.getCourseListManagement();
        this.props.changeManagementSection(ManagementConstants.COURSE, ManagementConstants.COURSE_MANAGEMENT)
    }

    onCUDClickHandler = (url) => {
        this.setState({
            isRedirect: true,
            url: url
        });
    }

    handleDelete = () => {
        CourseServices.deleteCourse(this.state.idToDelete).then(
            data => {
                this.props.alertOn("success", "Deleted course " + this.state.idToDelete);
                this.props.getCourseListManagement();
                this.setState({
                    confirm: false
                });
            },
            err => {
                this.props.alertOn("danger", "Error: " + err)
            }
        )
    }
    renderListStudents = () => {
        return this.props.courseListManagement.data.map((course) =>
            <tr>
                <td>{course.id}</td>
                <td>{course.name}</td>
                <td>{course.cost}</td>
                <td>{course.amountStudent}</td>
                <td>{course.rating}</td>
                <td className="text-center">
                    {/* <Link to={"/management/lesson/all/" + course.id}><i className="fas fa-edit fa-lg"></i></Link> */}
                    <i className="fas fa-edit fa-lg buttonIcon" onClick={() => this.setState({ isRedirect: true, url: '/management/lesson/all/' + course.id })}></i>
                    {/* <Link to={"/management/course/edit/" + course.id}><i className="fas fa-pen fa-lg pr-3 pl-3"></i></Link> */}
                    <i className="fas fa-pen fa-lg pr-3 pl-3 buttonIcon" onClick={() => this.setState({ isRedirect: true, url: '/management/course/edit/' + course.id })}></i>
                    <i className="far fa-trash-alt fa-lg buttonIcon" onClick={() => this.setState({ confirm: true, idToDelete: course.id, courseToDelete: course.name })}></i></td>
            </tr>)
    }
    renderRedirect = () => {
        return <Redirect to={this.state.url} />
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
                {this.state.isRedirect && this.renderRedirect()}
                {this.state.confirm && this.renderModal()}
                <div className="studypage-navbar mb-1 rounded">
                </div>
                <div className="management">
                    {this.props.courseListManagement.isLoading ? <div className="d-flex justify-content-center"><img src={require("../../assets/images-system/ring.svg")} alt={"spinner"} /></div>
                        :
                        <table className="table table-hover">
                            <thead className="management-thead">
                                <tr>
                                    <th scope="col" className="lead" style={{ width: "150px" }}>ID</th>
                                    <th scope="col" className="lead" style={{ width: "250px" }} >Name</th>
                                    <th scope="col" className="lead" style={{ width: "150px" }}>Cost</th>
                                    <th scope="col" className="lead" style={{ width: "150px" }}>No.Student</th>
                                    <th scope="col" className="lead" style={{ width: "150px" }}>Rating</th>
                                    <th scope="col" className="lead text-center" style={{ width: "200px" }}><i style={{ cursor: "pointer" }} onClick={() => this.onCUDClickHandler("/management/course/create")} className="fas fa-plus fa-lg text-center"></i></th>
                                </tr>
                            </thead>
                            <tbody className="management-tbody">
                                {this.renderListStudents()}
                            </tbody>
                        </table>}
                    {!this.props.courseListManagement.isLoading && this.props.courseListManagement.data.length === 0 && <p className="text-center lead">There is no course in the database. Please add new course!</p>}

                </div>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getCourseListManagement: () => {
            dispatch(CourseActions.getCourseListManagement())
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
        courseListManagement: state.courseListManagement
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ManagementCourse)