import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Course from '../../Common/Course';
import { connect } from 'react-redux';
import Category from '../../Common/Category';
import { CategoryActions, CourseActions } from '../../../actions';
class CategoriesSection extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    componentDidMount() {
        if(this.props.categories.length===0)
        this.props.getAllCategories();
    }
    onCategoryClick = (id, name) => {
        this.props.getTop6CoursesByCategoryId(id);
        this.props.changeCategoryToDisplay(name);
        const domNode = ReactDOM.findDOMNode(this.myRef.current)
        domNode.scrollIntoView({ behavior: 'smooth', block: 'start', })
    }
    ///////////////////////////////////
    ///////////////////////////////////
    ///////RENDER SECTION//////////////

    renderCoursesByCategory = () => {
        return this.props.courses.map((course, index) => {
            return (
                <Course key={course.id} id={course.id} isSliderCourse={false}
                    name={course.name} description={course.description}
                    cost={course.cost} image={course.image}
                    amountStudent={course.amountStudent} rating={course.rating} instructors={course.instructors} />
            )
        })
    }

    renderCategories = () => {
        return this.props.categories.map((category, index) => {
            return (
                <Category key={category.id} onCategoryClick={this.onCategoryClick} id={category.id} name={category.name} description={category.description} image={category.image} />
            )
        })
    }
    render() {
        console.log(this.props.categoryToDisplay);

        return (

            <div className="courses">
                <div className="jumbotron jumbotron-fluid jumbotron jumbotron_middle">
                    <div className="container">
                        <h2 className="section-title">EXPLORE COURSES</h2>
                        <p className="lead">Learning never be easier with <img src={require('../../../assets/images-system/logo-geek.png')} alt="" style={{ width: "40px" }} /></p>
                        <hr className="my-2" />
                    </div>
                    <div className="container">
                        <div className="row justify-content-center">
                            {this.renderCategories()}
                        </div>
                    </div>
                </div>
                <div className="section_background parallax-window" data-parallax="scroll" data-speed="0.8" />
                <div className="container" ref={this.myRef}>
                    {this.props.categoryToDisplay!==""?<div className="row">
                        <div className="col">
                            <div className="section_title_container text-center">
                                <h2 className="section_title">{this.props.categoryToDisplay+" courses"} </h2>
                            </div>
                        </div>
                    </div>:""}
                    <div className="row courses_row d-flex justify-content-center">
                        {this.renderCoursesByCategory()}
                    </div>
                    {this.props.categoryToDisplay ?
                        <div className="row">
                            <div className="col">
                                <div className="courses_button trans_200"><a href="">view all courses</a></div>
                            </div>
                        </div> : ""}
                        <hr className="my-3" />
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        categories: state.categories,
        courses: state.top6CoursesByCategory,
        categoryToDisplay: state.categoryToDisplay
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getAllCategories: () => {
            dispatch(CategoryActions.getAllCategories())
        },
        getTop6CoursesByCategoryId: (id) => {
            dispatch(CourseActions.getTop6CoursesByCategory(id))
        },
        changeCategoryToDisplay: (name) => {
            dispatch(CategoryActions.changeDisplayCategory(name))
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoriesSection)