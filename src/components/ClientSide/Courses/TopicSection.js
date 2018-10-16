import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { CategoryActions } from '../../../actions';
class TopicSection extends Component {

    componentDidMount() {
        if (!this.props.categoryWithTopics) {
            console.log("dispatch current category with topics");
            
            this.props.getCurrentCategoryWithTopics(this.props.categoryName);
        }
    }

    renderCategoryLogo = () => {
        var categoryImage = "icon_4.png"
        var categoryName = "Category";
        if (this.props.categoryWithTopics) {
            if (this.props.categoryWithTopics.name) categoryName = this.props.categoryWithTopics.name;
            if (this.props.categoryWithTopics.image) categoryImage = this.props.categoryWithTopics.image;
        }
        return (
            <Link to={window.URL}><div className="navbar-brand" href=""><img src={require('../../../assets/images-system/' + categoryImage)} style={{ width: "30px" }} alt="" /> {categoryName}</div></Link>
        )
    }
    renderTopics = () => {
        if (this.props.categoryWithTopics)
            return this.props.categoryWithTopics.topics.map((topic, index) => {
                return <a className="nav-item nav-link" >{topic.name}</a>
            })
    }
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    {this.renderCategoryLogo()}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            {this.renderTopics()}
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getCurrentCategoryWithTopics: (categoryName) => {
            dispatch(CategoryActions.getCurrentCategoryWithTopics(categoryName))
        }
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        categoryWithTopics: state.currentCategoryWithTopics.data
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TopicSection)