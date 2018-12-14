import React, { Component, Fragment } from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import { connect } from 'react-redux';
import { ManagementActions, SystemActions, CourseActions } from '../../actions';
import { ManagementConstants } from '../../constants';
import Editor from '../Common/Editor';
import { CourseServices } from '../../services/CourseServices';


const CLOUDINARY_UPLOAD_PRESET = 'quangpreset';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/quanglibrary/video/upload';
class ManagementSectionEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            section: {
                id: "",
                description: "",
                content: ""
            },
            renderSpin: false

        }
    }

    componentWillMount() {
        this.props.changeManagementSection(ManagementConstants.SECTION, ManagementConstants.SECTION_EDIT);
        this.props.getSectionUpdate(this.props.match.params.sectionId);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.loading.status !== true)
            this.setState({
                section: nextProps.sectionDetail.data
            });
    }

    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            section: {
                ...this.state.section,
                [name]: value
            },
            preview: false
        })
    }

    handleContentChange = (value) => {
        this.setState({
            section: { ...this.state.section, content: value }
        });
    }

    handleBack = () => {
        this.props.history.push({ pathname: "/management/lesson/edit/" + this.props.location.lessonId })
    }
    handleImageUpload = (files) => {

        // let upload = request.post(CLOUDINARY_UPLOAD_URL)
        //     .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
        //     .field('file', file);

        // upload.end((err, response) => {
        //     if (err) {
        //         console.error(err);
        //     }

        //     if (response.body.secure_url !== '') {
        //         this.setState({
        //             uploadedFileCloudinaryUrl: response.body.secure_url
        //         });
        //     }
        // });
        let formData = new FormData();
        formData.append("file", files[0]);
        formData.append("timestamp", (Date.now() / 1000) | 0);
        formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
        formData.append('api_key', '812224886185293');
        // formData.append('api_secret', 'aMYbGrNsbVE0aqRS5RspjBxsCuY');
        axios({
            url: CLOUDINARY_UPLOAD_URL,
            method: "POST",
            headers: { "X-Requested-With": "XMLHttpRequest" },
            data: formData
        }).then(data => {
            if (data.data.secure_url !== '') {
                this.setState({
                    uploadedFileCloudinaryUrl: data.data.secure_url
                });
            }
            console.log(data);
        }, err => { console.error(err); });
    }

    handleUpdateSection = (event) => {
        event.preventDefault();
        if (this.state.section.description.trim().length < 3) {
            this.props.alertOn("warning", "Description requires at least 3 characters");
        }
        else {
            if (!this.state.uploadedFile) {
                this.props.startLoading('Updating section');
                CourseServices.updateSection(this.state.section).then(data => {
                    this.props.alertOn('success', 'Update section ' + data.id + ' successfully');
                    this.props.stopLoading();
                    this.setState({
                        section: data
                    });
                }, err => {
                    this.props.stopLoading();
                    this.props.alertOn('danger', 'Can not update section. Error: ' + err);
                })
            }
            else {
                this.props.startLoading('Updating section');
                let formData = new FormData();
                formData.append("file", this.state.uploadedFile);
                formData.append("timestamp", (Date.now() / 1000) | 0);
                formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
                formData.append('api_key', '812224886185293');
                axios({
                    url: CLOUDINARY_UPLOAD_URL,
                    method: "POST",
                    headers: { "X-Requested-With": "XMLHttpRequest" },
                    data: formData
                }).then(data => {

                    const section = { ...this.state.section, video: { url: data.data.url, deleteToken: data.data.delete_token } }
                    console.log(section);

                    CourseServices.updateSection(section).then(data => {
                        this.props.alertOn('success', 'Update section ' + data.id + ' successfully');
                        this.props.stopLoading();
                        this.setState({
                            section: data
                        });
                    }, err => {
                        this.props.stopLoading();
                        this.props.alertOn('danger', 'Can not update section. Error: ' + err);
                    })
                }, err => { console.error(err); });
            }
        }
    }

    deleteImg = () => {
        let formData = new FormData();
        formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
        formData.append("token", "596295755054997c8892bf89f5e9d7cc148f705bb41982bcde429313b32369027c2fd633872845f64c474b71394e4e79b53a9492a70332255dd651c8ca12c73bbe5772ef415eff9d0c2c8a1081df55b910cefbaa4441c21f63dc98d3886f43d9fd3accba6280fa186c731fff5d4dbb8148ec7c059de5676935b5b9e377d3a2f0c539a640e4b0406e8257b7eca44a5f2ac579a4e7a8967c92cc726b8f4b13d36b");
        // formData.append('api_key', '812224886185293');
        // formData.append('api_secret', 'aMYbGrNsbVE0aqRS5RspjBxsCuY');

        axios({
            url: "https://api.cloudinary.com/v1_1/quanglibrary/delete_by_token",
            method: "post",
            data: formData
        }).then(data => {
            console.log(data);
        }, err => { console.error(err); });
    }

    onImageDrop = (files) => {
        this.setState({
            uploadedFile: files[0]
        });

        // this.handleImageUpload(files[0]);
    }
   
    renderVideo = () => {
        if (this.state.uploadedFile) {
            return (
                <video width={"100%"} src={URL.createObjectURL(this.state.uploadedFile)} controls>
                    Your browser does not support HTML5 video.
                </video>)
        }
        return this.state.section.video ? <video width={"100%"} controls>
            <source src={this.state.section.video.url} />
            Your browser does not support HTML5 video.
    </video> : <p className="text-center lead">This section does not contain video. Please add video via the drop box below</p>

    }
    render() {
        console.log(this.state)
        return (
            <React.Fragment>
                <div className="management">
                    <div className="container mt-3">
                        <div className="studypage-navbar rounded">
                            <i className="fas fa-arrow-alt-circle-left fa-2x ml-3" style={{ float: "left", marginTop: "5px" }} onClick={this.handleBack}></i>
                            <h2 className="text-center m-4">Edit</h2>
                        </div>
                        {this.props.sectionDetail.isLoading ? <div className="d-flex justify-content-center"><img src={require("../../assets/images-system/ring.svg")} alt={"spinner"} /></div>
                            :
                            <React.Fragment>
                                <div className="form-group">
                                    <label>Id</label>
                                    <input className="form-control" type="text" readOnly value={this.state.section.id} />
                                </div>

                                <div className="form-group">
                                    <label>Description</label>
                                    <input className="form-control" onChange={this.handleChange} value={this.state.section.description} name="description" type="text" />
                                </div>
                                {/* <ReactQuill style={{ height: "500px", marginBottom: "100px" }}  name="content" onChange={this.handleContentChange} value={this.state.section.content} modules={getModule()} /> */}
                                <Editor handleContentChange={this.handleContentChange} content={this.state.section.content} />
                                <div className="container">
                                    {this.renderVideo()}
                                    <Dropzone
                                        className="dropzone rounded"
                                        multiple={false}
                                        accept="image/*,.mp4"
                                        onDrop={this.onImageDrop}>
                                        <p className="lead text-center">Drop a video or click to select a file to upload.</p>
                                        <div className="d-flex justify-content-center">
                                            <img style={{ height: "100px", margin: "auto", width: "100px", opacity: "0.5" }} src={require("../../assets/images-system/drop.png")} />
                                        </div>
                                        {this.state.uploadedFile && <p className="text-center lead">{this.state.uploadedFile.name}</p>}

                                    </Dropzone>

                                    <button className="btn btn-primary btn-lg mt-4 mb-5" style={{ width: '300px', display: 'block', margin: 'auto' }} onClick={this.handleUpdateSection}>Update</button>
                                    {/* <button className="btn btn-success" onClick={this.handleImageUpload}></button> */}
                                    {/* {this.state.uploadedFileCloudinaryUrl === '' ? null :
                            <div>
                                <p>{this.state.uploadedFile.name}</p>
                                <a>{this.state.uploadedFileCloudinaryUrl} </a>
                            </div>} */}

                                </div>
                            </React.Fragment>}
                    </div>
                </div >
            </React.Fragment>

        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        sectionDetail: state.sectionDetail,
        loading: state.loading
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
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
        getSectionUpdate: (sectionId) => {
            dispatch(CourseActions.getSectionUpdate(sectionId))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ManagementSectionEdit);