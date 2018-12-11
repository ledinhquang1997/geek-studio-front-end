import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageUploader from 'react-images-upload';
import { connect } from 'react-redux';
import { ImageService, CourseServices } from '../../services';
import { SystemActions, ManagementActions } from '../../actions';
import { VariableConstants, ManagementConstants } from '../../constants';

class ManagementCourseCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newCourse: {
                name: "",
                description: "",
                descriptionDetail: "",
                cost: 0,
                contentSummary: ["", ""
                ],
                requirements: ["", "sd"
                ],
                image: {
                    url: "",
                    deleteToken: ""
                },
                categoryId: ""
            },
            isLoading: false
        };
    }
    
    componentWillMount() {
        this.props.changeManagementSection(ManagementConstants.COURSE,ManagementConstants.CREATE_COURSE)
    }
    
    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            newCourse: {
                ...this.state.newCourse,
                [name]: value
            }
        })
    }
    onDrop = (picture) => {
        this.setState({
            picture: picture[picture.length - 1],
        });
    }

    handleAddInput = (event) => {
        event.preventDefault();
        const name = event.target.name;
        this.setState({
            newCourse: { ...this.state.newCourse, [name]: [...this.state.newCourse[name], ""] }
        });
    }

    handleRemoveInput = (event) => {
        event.preventDefault();
        const name = event.target.name;

        const newArray = this.state.newCourse[name].splice(0, this.state.newCourse[name].length - 1);
        console.log(newArray);

        this.setState({
            newCourse: { ...this.state.newCourse, [name]: newArray }
        });
    }

    handleContentSumaryChange = (event, index) => {
        var contentSumary = this.state.newCourse.contentSummary;
        contentSumary[index] = event.target.value;
        this.setState({
            newCourse: {
                ...this.state.newCourse,
                contentSummary: contentSumary
            }
        });
    }

    handleRequirementsChange = (event, index) => {
        var requirements = this.state.newCourse.requirements;
        requirements[index] = event.target.value;
        this.setState({
            newCourse: {
                ...this.state.newCourse,
                requirements: requirements
            }
        });
    }

    handleDescriptionDetailChange = (value) => {
        this.setState({
            newCourse: { ...this.state.newCourse, descriptionDetail: value }
        });
    }

    onSaveClick = (event) => {
        event.preventDefault();
        const { newCourse } = this.state

        let index = 0;
        for (index; index < newCourse.contentSummary.length; index++) {
            if (newCourse.contentSummary[index].trim().length <= 10) {
                break;
            }
        }

        let indexRequirements = 0;
        for (indexRequirements; indexRequirements < newCourse.requirements.length; indexRequirements++) {
            if (newCourse.requirements[indexRequirements].trim().length <= 10) {
                break;
            }
        }

        let canCreate = true;

        if (newCourse.name.trim().length <= 4) {
            this.props.alertOn("warning", "Name attribute requires at least 4 characters!");
            canCreate = false;
        }
        else if (newCourse.name.trim().length > 100) {
            this.props.alertOn("warning", "Name attribute requires at most 100 characters!");
            canCreate = false;
        }
        else if (newCourse.description.trim().length <= 4) {
            this.props.alertOn("warning", "Description attribute requires at least 4 characters!");
            canCreate = false;
        }
        else if (newCourse.description.trim().length > 250) {
            this.props.alertOn("warning", "Description attribute requires at most 250 characters!");
            canCreate = false;
        }
        else if (newCourse.cost <= 0) {
            this.props.alertOn("warning", "Cost has to be greater than 0");
            canCreate = false;
        }
        else if (newCourse.description.trim().length > 250) {
            this.props.alertOn("warning", "Description attribute requires at most 250 characters!");
            canCreate = false;
        }
        else if (newCourse.categoryId.trim().length === 0) {
            this.props.alertOn("warning", "Choose a category");
            canCreate = false;
        }

        else if (!this.state.picture) {
            canCreate = false;
            this.props.alertOn("warning", "Picture is required!");
        }

        else if (index !== newCourse.contentSummary.length) {
            this.props.alertOn("warning", "Content summary attribute requires at least 10 characters!");
            canCreate = false;
        }

        else if (indexRequirements !== newCourse.requirements.length) {
            this.props.alertOn("warning", "Requirements attribute requires at least 10 characters!");
            canCreate = false;
        }

        else {
            this.props.startLoading("Processing ...")
            ImageService.uploadImage(this.state.picture).then(data => {
                const newCourse = {
                    ...this.state.newCourse, image: {
                        url: data.secure_url,
                        deleteToken: data.delete_token
                    }
                }
                CourseServices.createCourse(newCourse).then(data => {
                    this.props.alertOn("success", "Create course" + data.name + "successfully")
                    this.props.stopLoading();
                }, err => {
                    this.props.alertOn("warning", err)
                    this.props.stopLoading();
                })

            }, err => {
                this.props.alertOn("danger", err)
                this.props.stopLoading();
            })
        }
    }

    renderOptions = () => {
        return this.props.categories.map((category, index) => <option key={category.id} value={category.id}>{category.name}</option>)
    }
    render() {
        console.log(this.state)
        return (
            <div className="management">
                <div className="studypage-navbar mb-1 rounded d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                        <i class="fas fa-arrow-alt-circle-left fa-2x ml-3"></i>&nbsp;Back
                    </div>
                    <div className="d-flex align-items-center">
                        {/* <i class="fas fa-arrow-alt-circle-right fa-2x"></i> */}
                    </div>
                </div>
                <div className="container mt-3">
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Name</label>
                            <input onChange={this.handleChange} minLength="4" maxLength="100" className="form-control" name="name" type="text" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Cost</label>
                            <input onChange={this.handleChange} min="0" type="number" className="form-control" name="cost" placeholder="Cost" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Description</label>
                            <input onChange={this.handleChange} minLength="10" maxLength="250" className="form-control" name="description" type="text" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Category</label>
                            <select onChange={this.handleChange} name="categoryId" className="form-control">
                                <option disabled selected value> Select a category of course </option>
                                {this.renderOptions()}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Content sumary</label>
                            {this.state.newCourse.contentSummary.map((cS, index) =>
                                <input key={index} onChange={(event) => this.handleContentSumaryChange(event, index)} className="form-control" style={{ marginBottom: 5 }} type="text" value={cS} />
                            )}
                            <div className="btn-group">
                                <button className="btn btn-info btn-lg" name={'contentSummary'} onClick={this.handleAddInput}>+</button>
                                <button className="btn btn-danger btn-lg" name={'contentSummary'} onClick={this.handleRemoveInput}>-</button>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Requirements</label>
                            {this.state.newCourse.requirements.map((r, index) =>
                                <input key={index} onChange={(event) => this.handleRequirementsChange(event, index)} className="form-control" style={{ marginBottom: 5 }} type="text" value={r} />
                            )}
                            <div className="btn-group">
                                <button className="btn btn-info btn-lg" name={'requirements'} onClick={this.handleAddInput}>+</button>
                                <button className="btn btn-danger btn-lg" name={'requirements'} onClick={this.handleRemoveInput}>-</button>
                            </div>

                        </div>
                        <div className="form-group">
                            <label>Description detail:</label>
                            <ReactQuill modules={getModule()} onChange={this.handleDescriptionDetailChange} name="descriptionDetail" />

                        </div>
                        <div className="form-group">
                            <label>Image:</label>
                            <div className="row">
                                <div className="col-5">
                                    <ImageUploader
                                        withIcon={true}
                                        buttonText='Choose images'
                                        onChange={this.onDrop}
                                        imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                        maxFileSize={5242880}
                                        withLabel={true}
                                        singleImage={true}

                                    />
                                </div>
                                <div className="image-review__container col-7">
                                    {this.state.picture &&
                                        <React.Fragment>
                                            <img className="img-thumbnail rounded" style={{ maxWidth: '300px', maxHeight: '200px' }} src={URL.createObjectURL(this.state.picture)} />
                                            <button className="btn btn-danger">Delete</button>
                                        </React.Fragment>}
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <button style={{ width: '40%', margin: 'auto' }} onClick={this.onSaveClick} className="btn btn-success btn-lg" name={'contentSummary'} >Save</button>
                        </div>
                    </form>
                </div>

            </div>
        );
    }
}
function getModule() {
    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, false] }],
            ["bold", "italic", "underline", "strike", "code-block", "blockquote"],
            [{ align: [] }],
            [{ script: "sub" }, { script: "super" }],
            [{ color: [] }, { background: [] }],
            [
                { list: "ordered" },
                { list: "bullet" },
                { indent: "-1" },
                { indent: "+1" }
            ],
            ["link"],
            ["clean"]
        ]
    };
    return modules;
}
const mapStateToProps = (state, ownProps) => {
    return {
        categories: state.categories,
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeManagementSection: (managementType, managementAction) => {
            dispatch(ManagementActions.changeManagementSection(managementType, managementAction))
        },

        alertOn: (type, content) => {
            dispatch(SystemActions.alertOn(type, content))
        },
        startLoading: (content) => {
            dispatch(SystemActions.startLoading(content))
        },
        stopLoading: () => {
            dispatch(SystemActions.stopLoading())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ManagementCourseCreate)