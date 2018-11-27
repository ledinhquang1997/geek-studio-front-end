import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { StudentActions, CourseActions, ManagementActions } from '../../actions';
import { ManagementConstants } from '../../constants';

class ManagementLesson extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRedirect: false,
            url: ''
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

    renderListStudents = () => {
        return this.props.lessonListManagement.data.map((lesson) =>
            <tr>
                <td>{lesson.id}</td>
                <td>{lesson.ordinalNumber}</td>
                <td>{lesson.name}</td>
                <td>{new Date(lesson.dateCreate).toString()}</td>
                <td>{new Date(lesson.lastUpdate).toString()}</td>
                <td className="text-center"> <Link to={"/management/lesson/edit/" + lesson.id}><i className="fas fa-pen fa-lg pr-3"></i></Link> <i className="far fa-trash-alt fa-lg "></i></td>
            </tr>)
    }
    renderRedirect = () => {
        return <Redirect to={this.state.url} />
    }


    render() {
        return (
            <React.Fragment>
                {this.state.isRedirect && this.renderRedirect()}
                <div className="management">
                    <div className="studypage-navbar mb-1 rounded">
                        <h2 className="text-center">Docker Course</h2>
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
                                    <th scope="col" className="lead text-center" style={{ width: "200px" }}><i style={{ cursor: "pointer" }} onClick={() => this.onCUDClickHandler("/management/course/create")} className="fas fa-plus fa-lg text-center"></i></th>
                                </tr>
                            </thead>
                            <tbody className="management-tbody">
                                {this.renderListStudents()}
                            </tbody>
                        </table>}
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

    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        lessonListManagement: state.lessonListManagement
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ManagementLesson)