import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StudentManagementActions } from '../../actions';

class ManagementCourse extends Component {

    componentWillMount() {
        this.props.getListStudents();
    }

    renderListStudents = () => {
        return this.props.listStudents.data.map((student) =>
            <tr>
                <td>{student.username}</td>
                <td>{student.name}</td>
                <td>{student.school}</td>
                <td>{student.email}</td>
                <td>{new Date(student.dob).toDateString()}</td>
                <td className="text-center"> <i className="fas fa-pen fa-lg pr-3"></i> <i className="far fa-trash-alt fa-lg "></i></td>
            </tr>)
    }

    render() {
        return (
            <div className="management">
                <table className="table table-hover">
                    <thead className="management-thead">
                        <tr>
                            <th scope="col" className="lead" style={{ width: "150px" }}>ID</th>
                            <th scope="col" className="lead" style={{ width: "250px" }} >Name</th>
                            <th scope="col" className="lead" style={{ width: "150px" }}>Cost</th>
                            <th scope="col" className="lead" style={{ width: "150px" }}>No.Student</th>
                            <th scope="col" className="lead" style={{ width: "150px" }}>Rating</th>
                            <th scope="col" className="lead text-center" style={{ width: "200px" }}><i className="fas fa-plus fa-lg text-center"></i></th>
                        </tr>
                    </thead>
                    <tbody className="management-tbody">
                        {this.renderListStudents()}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getListStudents: () => {
            dispatch(StudentManagementActions.getListStudents())
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        listStudents: state.listStudents
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ManagementCourse)