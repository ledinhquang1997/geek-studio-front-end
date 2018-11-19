import React, { Component } from 'react';
import { CourseActions } from '../../../actions';
import { connect } from 'react-redux';
import { forwardToNewPathname } from '../../Common/utilities';
import { Redirect } from 'react-router-dom';

class Lessons extends Component {
    constructor(props) {
        super(props);
        this.state={
            redirect:false,
            lessonId:""
        }
    }
    
    componentWillMount() {
        if (this.props.userCourseLessons.err) {
            forwardToNewPathname("/404.html");
        }
        else {
            this.props.getUserCourseLessons(this.props.match.params.courseId);
        }
    }
    handleLessonClick=(event,lessonId)=>{
        event.preventDefault();
        // this.props.changeCurrentLesson(lessonId);
        this.setState({
            redirect:true,
            lessonId:lessonId
        });
    }

    renderLessons = () => {
        const lessons = this.props.userCourseLessons.data.lessons;
        return lessons.map((lesson) => {
            const isActive = this.props.userCourseLessons.data.currentLesson===lesson.id?"active":"";
            return <a onClick={(event)=>this.handleLessonClick(event,lesson.id)} key={lesson.id} href="" className={"list-group-item list-group-item-action flex-column align-items-start "+isActive}>
                <div className="d-flex w-100 justify-content-between">
                    <h4 className="mb-1">{lesson.ordinalNumber}. {lesson.name}</h4>
                    <i className="far fa-check-circle fa-lg align-self-center"></i>
                </div>
                <p className="mb-1">{lesson.description}</p>
            </a>
        })

    }
    renderRedirect=()=>{
        if(this.state.redirect)
        return <Redirect to={"/lesson/"+this.state.lessonId}/>
    }
    render() {
        const { data } = this.props.userCourseLessons
        return (
            <React.Fragment>
                {this.renderRedirect()}
                <div className="studypage__jumbotron">
                    <div className="studypage__container">
                        <div className="studypage__row">
                            <img className="studypage__jumbotron--image rounded" src={data.image} alt={data.name}/>
                            <div className="studypage__jumbotron--title">
                                <div className="w-75 m-auto">
                                    <h2 className="text-left text-white mb-3 mt-2">{data.name}</h2>
                                    <div className="progress mb-3">
                                        <div className="progress-bar bg-warning" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                                    </div>
                                    <button className="btn btn-danger btn-lg">Continue</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="studypage-navbar">
                    <p className="text-center lead studypage-navbar__item">Course content</p>
                </div>

                <div className="list-lesson">
                    <div className="list-group">
                    {this.props.userCourseLessons.isLoading?<img src={require("../../../assets/images-system/ring.svg")} alt={data.name}/>:this.renderLessons()}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getUserCourseLessons: (courseId) => {
            dispatch(CourseActions.getUserCourseLessons(courseId))
        },
        changeCurrentLesson: (lessonId) => {
            dispatch(CourseActions.changeCurrentLesson(lessonId))
        },
        
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        userCourseLessons: state.userCourseLessons,
        currentLesson:state.currentLesson
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Lessons)