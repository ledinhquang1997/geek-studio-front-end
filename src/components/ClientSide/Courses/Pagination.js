import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CourseActions, CategoryActions } from '../../../actions';
class Pagination extends Component {
    constructor(props) {
        super(props);
    }

    onPageClick = (page, event) => {
        event.preventDefault();
        if (this.props.currentCoursesByCategory.currentPage !== page) {
            this.props.getCurrentCoursesByCategory(this.props.data.name, this.props.currentCoursesByCategory.filter, page);
            
        }

    }
   
    
    renderPagination = () => {
        if (this.props.data) {
            var pageList = [];
            for (var i = 1; i <= this.props.data.totalPage; i++) {
                pageList = [...pageList, i]
            }
            return pageList.map(value => <li className={this.props.currentCoursesByCategory.currentPage === value - 1 ? "page-item active" : "page-item"} onClick={(event) => this.onPageClick(value - 1, event)}><div className="page-link">{value}</div></li>)
        }
    }
    render() {
        
        return (
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
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        data: state.currentCategoryWithTopics.data,
        currentCoursesByCategory: state.currentCoursesByCategory

    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getCurrentCoursesByCategory: (category, filter, page) => {
            dispatch(CourseActions.getCurrentCoursesByCategory(category, filter, page))
        },
        changeCategoryToDisplay: (name) => {
            dispatch(CategoryActions.changeDisplayCategory(name))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Pagination)