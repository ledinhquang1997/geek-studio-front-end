import React, { Component } from 'react';
import renderHTML from 'react-render-html';
import { CourseActions } from '../../../actions';
import { connect } from "react-redux";
import { forwardToNewPathname } from '../../Common/utilities';
import { Link } from "react-router-dom";

class StudyPage extends Component {
    componentWillMount() {
        if (this.props.studentCourseSectionList.err) forwardToNewPathname("/404.html");
        if (this.props.studentCourseSectionList.data.id === "" || this.props.studentCourseSectionList.data.id !== this.props.match.params.lessonId)
            this.props.getSectionList(this.props.match.params.lessonId);
    }
    sectionClickHandle = (sectionId) => {
        this.props.changeCurrentSection(sectionId);
        this.props.getSectionDetail(sectionId);
    }
    renderSections = () => {
        let learntSection = true;
        return this.props.studentCourseSectionList.data.sections.map((section, index) => {
            if (section.id === this.props.studentCourseSectionList.data.currentSection) learntSection = false;
            return <div key={section.id} onClick={() => this.sectionClickHandle(section.id)} className={this.props.studentCourseSectionList.data.currentSection === section.id ? "step step-active" : "step"}>
                {/* <div className="step step-active"> */}
                <div>
                    {/* <div className="circle"><i className="fa fa-check" /></div> */}
                    <div className="circle">{learntSection ? <i className="fa fa-check" /> : section.ordinalNumber}</div>
                </div>
                <div>
                    <div className="title">{section.description}</div>
                    {/* <div className="caption">Optional</div> */}
                </div>
            </div>
        })
    }
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-2">
                            <div className="stepper rounded">
                                <Link to={"/study/" + this.props.studentCourseSectionList.data.courseId}><div>Back</div></Link>
                                {this.props.studentCourseSectionList.isLoading ? <div className="d-flex justify-content-center"><img src={require("../../../assets/images-system/bar.svg")} alt={"spinner"} /></div> : this.renderSections()}
                            </div>
                        </div>
                        <div className="col-10">
                            <div className="studypage-navbar rounded d-flex align-items-center justify-content-center">
                                <h3 className="text-center lead studypage-navbar__item">{this.props.studentCourseSectionList.data.name}</h3>
                            </div>
                            {/* <div className="studypage-content rounded"> */}
                                {this.props.sectionDetail.isLoading ? 
                                <div className="d-flex justify-content-center"><img src={require("../../../assets/images-system/ring.svg")} alt={"spinner"} /></div> : 
                                
                                renderHTML(this.props.sectionDetail.data.content)}

                                {this.props.sectionDetail.data.video && !this.props.sectionDetail.isLoading && <video className="mt-5" width={"100%"} controls>
                                    <source src={this.props.sectionDetail.data.video} />
                                    Your browser does not support HTML5 video.
                                </video>}

                            {/* </div> */}

                        </div>
                    </div>
                </div>

            </div>

        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        studentCourseSectionList: state.studentCourseSectionList,
        sectionDetail: state.sectionDetail,
        currentSection: state.currentSection
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getSectionList: (lessonId) => {
            dispatch(CourseActions.getStudentCourseSectionListByLesson(lessonId));
        },
        getSectionDetail: (sectionId) => {
            dispatch(CourseActions.getSectionDetail(sectionId));
        },
        changeCurrentSection: (sectionId) => {
            dispatch(CourseActions.changeCurrentSection(sectionId));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(StudyPage)