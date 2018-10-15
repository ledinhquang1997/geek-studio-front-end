import React, { Component } from 'react';
import {connect} from 'react-redux';
class Pagination extends Component {
    renderPagination = () => {
        if (this.props.data) {
            var pageList=[];
            for (var i = 1; i <= this.props.data.totalPage; i++) {
                pageList=[...pageList,i]
            }
            console.log(pageList);
            return pageList.map(value=><li className="page-item"><a className="page-link">{value}</a></li>)

        }
        

    }
    render() {
        if(this.props.data)
        console.log(this.props.data);
        
        return (
            <div className="container">
                    <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                            <a className="page-link" href="#" tabIndex={-1}>Previous</a>
                        </li>
                       {this.renderPagination()}
                        <li className="page-item">
                            <a className="page-link" href="#">Next</a>
                        </li>
                    </ul>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        data: state.currentCategoryWithTopics.data
    }
}
export default connect(mapStateToProps)(Pagination)