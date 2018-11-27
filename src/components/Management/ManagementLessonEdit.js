import React, { Component } from 'react';

import 'react-quill/dist/quill.snow.css';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { CourseActions, SystemActions } from '../../actions';
import Section from '../Common/Section';


class ManagementLessonEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            uploadedFileCloudinaryUrl: '',
            lesson: {
                id: "",
                name: "",
                description: "",

            },

            redirect: false,
            url: ''
        };

    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            lesson: nextProps.lessonManagement.data
        });
    }


    componentWillMount() {
        this.props.getLessonManagement(this.props.match.params.lessonId);
        this.props.getSectionListManagement(this.props.match.params.lessonId);
    }

    handleRedirect = (url) => {
        this.setState({
            redirect: true,
            url: url
        });
    }

    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            lesson: {
                ...this.state.lesson,
                [name]: value
            }
        })
    }

    renderSections = () => {
        return this.props.sectionListManagement.data.map((section, index) => {
            return <Section key={section.id} id={section.id} ordinalNumber={section.ordinalNumber} lastUpdate={section.lastUpdate} description={section.description} />
        })
    }

    renderRedirect = () => {
        <Redirect to={this.state.url}></Redirect>
    }

    render() {

        console.log(this.state);
        return (
            <React.Fragment>
                {this.state.redirect && this.renderRedirect()}
                <div className="management">
                    <div className="studypage-navbar mb-1 rounded d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                            <i class="fas fa-arrow-alt-circle-left fa-2x ml-3"></i>
                        </div>
                        <h2 className="text-center">Docker Course</h2>
                        <div className="d-flex align-items-center">
                            {/* <i class="fas fa-arrow-alt-circle-right fa-2x"></i> */}
                        </div>
                    </div>
                    <div className="container mt-3">
                        {this.props.lessonManagement.isLoading ? <div className="d-flex justify-content-center"><img src={require("../../assets/images-system/ring.svg")} alt={"spinner"} /></div>
                            :
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Lesson Id</label>
                                    <input className="form-control" type="text" value={this.state.lesson.id} readOnly />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Name</label>
                                    <input type="text" name="name" onChange={this.handleChange} className="form-control" value={this.state.lesson.name} placeholder="Course name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1">Description</label>
                                    <textarea className="form-control" onChange={this.handleChange} name="description" value={this.state.lesson.description} rows={3} defaultValue={""} placeholder="Description" />
                                </div>
                                <div className="d-flex justify-content-end">
                                    <button className="btn btn-lg btn-success" style={{ width: "100px" }}>SAVE</button>
                                </div>
                            </form>}
                    </div>

                    <h2 className="text-center mb-4">Sections</h2>
                    <div className="container">
                        {this.props.sectionListManagement.isLoading ? <div className="d-flex justify-content-center"><img src={require("../../assets/images-system/ring.svg")} alt={"spinner"} /></div>
                            :
                            <React.Fragment>
                                <div className="row">
                                    {this.renderSections()}
                                    < div className="col-3 d-flex align-items-center">
                                        <div className="section-card rounded">
                                            <div className="section-card__content d-flex justify-content-center pt-2">
                                                <i className="fas fa-plus fa-3x"></i>
                                            </div>
                                            <p className="text-center">Add new section</p>
                                        </div>
                                    </div>
                                </div>

                            </React.Fragment>
                        }

                    </div>
                </div>
            </React.Fragment >
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        lessonManagement: state.lessonManagement,
        sectionListManagement: state.sectionListManagement
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getLessonManagement: (lessonId) => {
            dispatch(CourseActions.getLessonManagement(lessonId))
        },
        getSectionListManagement: (lessonId) => {
            dispatch(CourseActions.getSectionListManagement(lessonId))

        },
        startLoading: (content) => {
            dispatch(SystemActions.startLoading(content))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ManagementLessonEdit)