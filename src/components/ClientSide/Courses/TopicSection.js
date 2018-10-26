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
            <Link to={window.URL}><div className="navbar-brand" href=""><img src={categoryImage} style={{ width: "30px" }} alt="" /> {categoryName}</div></Link>
        )
    }
    renderTopics = () => {
        if (this.props.categoryWithTopics)
            return this.props.categoryWithTopics.topics.map((topic, index) => {
                return <a className="nav-item nav-link" >{topic.name}</a>
            })
    }
    renderTopicsToCards = () => {
        if (this.props.categoryWithTopics)
            return this.props.categoryWithTopics.topics.map((topic, index) => {
                return (<div className="topic-section__topic-card d-flex align-items-center">
                    <div className="p-1 lead text-left text-secondary">{topic.name}</div>
                </div>)
            })
    }

    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-sm navbar-light bg-light">
                    {this.renderCategoryLogo()}
                    <div>
                        <div className="navbar-nav">
                            {this.renderTopics()}
                        </div>
                    </div>
                </nav>
                <div className="topic-section__container">
                    <div class="topic-section__row p-2">
                        {this.renderTopicsToCards()}
                    </div>

                </div>
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