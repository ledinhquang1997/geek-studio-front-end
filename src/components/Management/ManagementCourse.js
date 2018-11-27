import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { CourseActions, ManagementActions } from '../../actions';
import { ManagementConstants } from '../../constants';

class ManagementCourse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRedirect: false,
            url: ''
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

    renderListStudents = () => {
        return this.props.courseListManagement.data.map((course) =>
            <tr>
                <td>{course.id}</td>
                <td>{course.name}</td>
                <td>{course.cost}</td>
                <td>{course.amountStudent}</td>
                <td>{course.rating}</td>
                <td className="text-center"> <Link to={"/management/lesson/" + course.id}><i class="fas fa-edit fa-lg"></i></Link> <i className="fas fa-pen fa-lg pr-3 pl-3"></i> <i className="far fa-trash-alt fa-lg "></i></td>
            </tr>)
    }
    renderRedirect = () => {
        return <Redirect to={this.state.url} />
    }


    render() {
        return (
            <React.Fragment>
                {this.state.isRedirect && this.renderRedirect()}
                <div className="studypage-navbar mb-1 rounded">
                        <h2 className="text-center">Docker Course</h2>
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
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        courseListManagement: state.courseListManagement
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ManagementCourse)