import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CourseActions } from '../../../actions';
import { forwardToNewPathname } from '../../Common/utilities';

class Pagination extends Component {
    onPageClick = (page, event) => {
        // event.preventDefault();
        if (this.props.currentCoursesByInstructor.currentPage !== page) {
            this.props.getCoursesByInstructor(this.props.instructorDetail.data.username, page);

        }

    }

    componentDidMount() {
        if (this.props.instructorDetail.err) forwardToNewPathname("/404.html")

    }
    
    componentDidUpdate(prevProps, prevState) {
        if (this.props.instructorDetail.err) forwardToNewPathname("/404.html")
    }
    
    renderPagination = () => {
        if (this.props.instructorDetail.data) {
            var pageList = [];
            for (var i = 1; i <= this.props.instructorDetail.data.totalPage; i++) {
                pageList = [...pageList, i]
            }
            return pageList.map(value => <li  className={this.props.currentCoursesByInstructor.currentPage === value - 1 ? "page-item active" : "page-item"} onClick={(event) => this.onPageClick(value - 1, event)}><a className="page-link">{value}</a></li>)
        }
    }
    render() {

        return (
            <React.Fragment>
                <nav className="container" >
                    <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                            <a className="page-link" href="" tabIndex={-1}>Previous</a>
                        </li>
                        {this.renderPagination()}
                        <li className="page-item">
                            <a className="page-link" href="">Next</a>
                        </li>
                    </ul>
                </nav>
                <hr/>
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        instructorDetail:state.instructorDetail,
        currentCoursesByInstructor:state.currentCoursesByInstructor,
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getCoursesByInstructor:(username,page)=>{
            dispatch(CourseActions.getCoursesByInstructor(username,page))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Pagination)