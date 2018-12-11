import React, { Component } from 'react';

import 'react-quill/dist/quill.snow.css';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { CourseActions, SystemActions, ManagementActions } from '../../actions';
import Section from '../Common/Section';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { CourseServices } from '../../services/CourseServices';
import { ManagementConstants } from '../../constants';

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
        this.props.changeManagementSection(ManagementConstants.LESSON, ManagementConstants.EDIT_LESSON);
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
            },
            preview: false
        })
    }

    onPreviewClick = (id) => {
        this.props.getSectionDetail(id);
        this.setState({
            preview: true
        });
    }

    handleUpdateLesson = (e) => {
        e.preventDefault();
        const lesson = {
            id: this.state.lesson.id,
            name: this.state.lesson.name,
            description: this.state.lesson.description
        }
        if (lesson.name.trim().length < 3) {
            this.props.alertOn("warning", "Name requires at least 3 characters");
        }
        else if (lesson.description.trim().length < 5) {
            this.props.alertOn("warning", "Description requires at least 5 characters");
        }
        else {
            this.props.startLoading("Processing ...")
            CourseServices.updateLesson(lesson).then(data => {
                this.props.alertOn("success", "Update lesson" + data.name + "successfully")
                this.props.stopLoading();
                this.setState({
                    lesson: data
                });
            })
        }
    }
    onEditClick = (sectionId) => {
        this.props.history.push({ pathname: "/management/section/edit/" + sectionId, lessonId: this.state.lesson.id})
    }
    renderSections = () => {
        return this.props.sectionListManagement.data.map((section, index) => {
            return <Section key={section.id} id={section.id} ordinalNumber={section.ordinalNumber} lastUpdate={section.lastUpdate}
                description={section.description} onEditClick={this.onEditClick} onPreviewClick={() => this.onPreviewClick(section.id)} />
        })
    }

    renderRedirect = () => {
        <Redirect to={this.state.url}></Redirect>
    }

    renderPreview = () => {
        return <div className="section-prview__modal">
            {/* Modal content */}
            <div className="section-prview__modal-content">
                {this.props.sectionDetail.isLoading ?
                    <img className="spinningSgv" src={require("../../assets/images-system/ring.svg")} />
                    :
                    <React.Fragment>

                        <ReactQuill
                            style={{ clear: 'both' }}
                            value={this.props.sectionDetail.data.content}
                            readOnly="true"
                            modules={{ toolbar: "" }}
                        />
                    </React.Fragment>
                }

            </div>
            <div style={{ width: '80%', margin: 'auto', display: 'flex', justifyContent: "center" }}>
                <i style={{ color: "white", cursor: "pointer " }} onClick={() => this.setState({ preview: false })} className="far fa-window-close fa-2x"></i>
            </div>
        </div>


    }
    render() {

        console.log(this.state);
        return (
            <React.Fragment>
                {this.state.preview && this.renderPreview()}
                {this.state.redirect && this.renderRedirect()}
                <div className="management">
                    <div className="studypage-navbar mb-1 rounded d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                            <i class="fas fa-arrow-alt-circle-left fa-2x ml-3"></i>
                        </div>
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
                                    <button className="btn btn-lg btn-success" style={{ width: "100px" }} onClick={this.handleUpdateLesson}>SAVE</button>
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
        sectionListManagement: state.sectionListManagement,
        sectionDetail: state.sectionDetail
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
        },
        getSectionDetail: (sectionId) => {
            dispatch(CourseActions.getSectionDetail(sectionId));
        },
        alertOn: (type, content) => {
            dispatch(SystemActions.alertOn(type, content))
        },
        stopLoading: () => {
            dispatch(SystemActions.stopLoading())
        },
        changeManagementSection: (managementType, managementAction) => {
            dispatch(ManagementActions.changeManagementSection(managementType, managementAction))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ManagementLessonEdit)