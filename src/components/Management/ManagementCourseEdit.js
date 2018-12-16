import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageUploader from 'react-images-upload';
import { connect } from 'react-redux';
import { ImageService, CourseServices } from '../../services';
import { SystemActions, ManagementActions, CourseActions } from '../../actions';
import { ManagementConstants } from '../../constants';
import { Redirect } from 'react-router-dom';

class ManagementCourseEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            course: {
                name: "",
                description: "",
                category: {
                    id: ""
                },
                descriptionDetail: "",
                cost: 0,
                contentSummary: [""],
                requirements: [""],
                image: {
                    url: "",
                    deleteToken: ""
                },
                categoryId: ""
            },
            isLoading: false,
            isRedirect: false,
        };
    }

    componentWillReceiveProps(nextProps) {
        console.log(">>>>>>>>>>>>>>>>>>>>>", nextProps);
        var categoryId = "";
        if (nextProps.courseDetail.data) {
            if (nextProps.courseDetail.data.category) {
                categoryId = nextProps.courseDetail.data.category.id;
            }
        }
        if (nextProps.loading.status !== true)
            this.setState({
                course: { ...nextProps.courseDetail.data, categoryId: categoryId }
            });
    }


    componentDidMount() {
        this.props.changeManagementSection(ManagementConstants.COURSE, ManagementConstants.COURSE_EDIT)
        this.props.getCourseDetail(this.props.match.params.courseId)
    }

    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            course: {
                ...this.state.course,
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
            course: { ...this.state.course, [name]: [...this.state.course[name], ""] }
        });
    }

    handleRemoveInput = (event) => {
        event.preventDefault();
        const name = event.target.name;

        const newArray = this.state.course[name].splice(0, this.state.course[name].length - 1);
        console.log(newArray);

        this.setState({
            course: { ...this.state.course, [name]: newArray }
        });
    }

    handleContentSumaryChange = (event, index) => {
        var contentSumary = this.state.course.contentSummary;
        contentSumary[index] = event.target.value;
        this.setState({
            course: {
                ...this.state.course,
                contentSummary: contentSumary
            }
        });
    }

    handleRequirementsChange = (event, index) => {
        var requirements = this.state.course.requirements;
        requirements[index] = event.target.value;
        this.setState({
            course: {
                ...this.state.course,
                requirements: requirements
            }
        });
    }

    handleDescriptionDetailChange = (value) => {
        this.setState({
            course: { ...this.state.course, descriptionDetail: value }
        });
    }

    onSaveClick = (event) => {
        event.preventDefault();
        const { course } = this.state

        let index = 0;
        for (index; index < course.contentSummary.length; index++) {
            if (course.contentSummary[index].trim().length <= 3) {
                break;
            }
        }

        let indexRequirements = 0;
        for (indexRequirements; indexRequirements < course.requirements.length; indexRequirements++) {
            if (course.requirements[indexRequirements].trim().length <= 3) {
                break;
            }
        }


        if (course.name.trim().length <= 4) {
            this.props.alertOn("warning", "Name attribute requires at least 4 characters!");
        }
        else if (course.name.trim().length > 100) {
            this.props.alertOn("warning", "Name attribute requires at most 100 characters!");
        }
        else if (course.description.trim().length <= 4) {
            this.props.alertOn("warning", "Description attribute requires at least 4 characters!");
        }
        else if (course.description.trim().length > 250) {
            this.props.alertOn("warning", "Description attribute requires at most 250 characters!");
        }
        else if (course.cost <= 0) {
            this.props.alertOn("warning", "Cost has to be greater than 0");
        }
        else if (course.description.trim().length > 250) {
            this.props.alertOn("warning", "Description attribute requires at most 250 characters!");
        }
        else if (course.categoryId.trim().length === 0) {
            this.props.alertOn("warning", "Choose a category");
        }

        // else if (!this.state.picture) {
        //     canCreate = false;
        //     this.props.alertOn("warning", "Picture is required!");
        // }

        else if (index !== course.contentSummary.length) {
            this.props.alertOn("warning", "Content summary attribute requires at least 3 characters!");
        }

        else if (indexRequirements !== course.requirements.length) {
            this.props.alertOn("warning", "Requirements attribute requires at least 3 characters!");
        }

        else {
            this.props.startLoading("Processing ...")
            if (this.state.picture) {
                ImageService.uploadImage(this.state.picture).then(data => {
                    const course = {
                        ...this.state.course, image: {
                            url: data.secure_url,
                            deleteToken: data.delete_token
                        }
                    }
                    CourseServices.updateCourse(course).then(data => {
                        console.log(">>>>>>>>>>>>>>>>>>>>>> Update", data);
                        this.props.alertOn("success", "Update course" + data.name + "successfully")
                        this.props.stopLoading();
                        // this.setState({
                        //     isRedirect: true,
                        //     url: '/management/lesson/all/' + data.id
                        // });
                    }, err => {
                        this.props.alertOn("warning", err)
                        this.props.stopLoading();

                    })

                }, err => {
                    this.props.alertOn("danger", err)
                    this.props.stopLoading();
                })
            }
            else {
                const course = {
                    ...this.state.course, image: null
                }
                CourseServices.updateCourse(course).then(data => {
                    console.log(">>>>>>>>>>>>>>>>>>>>>> Update", data);
                    this.props.alertOn("success", "Update course" + data.name + "successfully")
                    this.props.stopLoading();
                    // this.setState({
                    //     isRedirect: true,
                    //     url: '/management/lesson/all/' + data.id
                    // });
                }, err => {
                    this.props.alertOn("warning", err)
                    this.props.stopLoading();

                })
            }

        }
    }

    renderOptions = () => {
        return this.props.categories.map((category, index) => <option key={category.id} selected={this.state.course.categoryId === category.id} value={category.id}>{category.name}</option>)
    }

    renderRedirect = () => {
        if (this.state.isRedirect) {
            return <Redirect to={this.state.url} />
        }
    }
    render() {
        console.log(this.state)
        return (
            <React.Fragment>
                {this.renderRedirect()}
                <div className="management">
                    <div className="studypage-navbar mb-1 rounded d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                            <i class="fas fa-arrow-alt-circle-left fa-2x ml-3" onClick={() => this.setState({ isRedirect: true, url: "/management/course" })}></i>&nbsp;Back
                    </div>
                        <div className="d-flex align-items-center">
                            {/* <i class="fas fa-arrow-alt-circle-right fa-2x"></i> */}
                        </div>
                    </div>
                    <div className="container mt-3">
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Name</label>
                                <input onChange={this.handleChange} minLength="4" maxLength="100" className="form-control" name="name" type="text" value={this.state.course.name} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Cost</label>
                                <input onChange={this.handleChange} min="0" type="number" className="form-control" name="cost" placeholder="Cost" value={this.state.course.cost} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Description</label>
                                <input onChange={this.handleChange} minLength="10" maxLength="250" className="form-control" name="description" type="text" value={this.state.course.description} />
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
                                {this.state.course.contentSummary && this.state.course.contentSummary.map((cS, index) =>
                                    <input key={index} onChange={(event) => this.handleContentSumaryChange(event, index)} className="form-control" style={{ marginBottom: 5 }} type="text" value={cS} />
                                )}
                                <div className="btn-group">
                                    <button className="btn btn-info btn-lg" name={'contentSummary'} onClick={this.handleAddInput}>+</button>
                                    <button className="btn btn-danger btn-lg" name={'contentSummary'} onClick={this.handleRemoveInput}>-</button>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Requirements</label>
                                {this.state.course.requirements && this.state.course.requirements.map((r, index) =>
                                    <input key={index} onChange={(event) => this.handleRequirementsChange(event, index)} className="form-control" style={{ marginBottom: 5 }} type="text" value={r} />
                                )}
                                <div className="btn-group">
                                    <button className="btn btn-info btn-lg" name={'requirements'} onClick={this.handleAddInput}>+</button>
                                    <button className="btn btn-danger btn-lg" name={'requirements'} onClick={this.handleRemoveInput}>-</button>
                                </div>

                            </div>
                            <div className="form-group">
                                <label>Description detail:</label>
                                <ReactQuill modules={getModule()} onChange={this.handleDescriptionDetailChange} name="descriptionDetail" value={this.state.course.descriptionDetail ? this.state.course.descriptionDetail : ""} />
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
                                        {this.state.picture ?
                                            <img className="img-thumbnail rounded" style={{ maxWidth: '300px', maxHeight: '200px' }} src={URL.createObjectURL(this.state.picture)} alt='...'/>
                                            :
                                            this.state.course.image ?
                                                <img className="img-thumbnail rounded" style={{ maxWidth: '300px', maxHeight: '200px' }} src={this.state.course.image}  alt='...'/> : ""

                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <button style={{ width: '40%', margin: 'auto' }} onClick={this.onSaveClick} className="btn btn-success btn-lg" name={'contentSummary'} >Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </React.Fragment>
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
        courseDetail: state.courseDetail,
        loading: state.loading

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
        },
        getCourseDetail: (courseId) => {
            dispatch(CourseActions.getCourseDetail(courseId))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ManagementCourseEdit)