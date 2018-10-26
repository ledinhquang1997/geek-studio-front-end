import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import { Image, Transformation, CloudinaryContext } from 'cloudinary-react';

const CLOUDINARY_UPLOAD_PRESET = 'quangpreset';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/quanglibrary/image/upload';

class ManagementLessonEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            uploadedFileCloudinaryUrl: ''
        };
    }

    handleImageUpload(file) {
        console.log(file);

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
        formData.append("file", file);
        formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

        axios({
            url: CLOUDINARY_UPLOAD_URL,
            method: "POST",
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

    deleteImg = () => {
        let formData = new FormData();
        formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
        formData.append("token", "20a4e80f8952ecb09f2601fea1b48d7b5ac3798587f471a33331e387994fdf42a8e5feeab27bfc7a966636fb71bc0d6f7ecdacadd2d7dd4f0e53dee5d5f6b8eadffc8b503091002d43227468b4bee95ad2387499de3e33f1e8c0074cce670d26d11c46a8c3b16a2fcd740b33eb8f0ed9fbd87ae8bd2c9fcf7d5ff25e5bce92cf");
        formData.append('api_key', '812224886185293');
        formData.append('api_secret', 'aMYbGrNsbVE0aqRS5RspjBxsCuY');

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

        this.handleImageUpload(files[0]);
    }
    render() {


        return (
            <div className="management">
                <div className="container mt-3">
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Course Id</label>
                            <input className="form-control" type="text" value={"asdf3425345sdf"} readOnly />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Name</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Course name..." />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Description</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                        </div>
                    </form>
                </div>

                <Dropzone
                    multiple={false}
                    accept="image/*"
                    onDrop={this.onImageDrop}>
                    <p>Drop an image or click to select a file to upload.</p>
                </Dropzone>
                <button className="btn btn-primary" onClick={this.deleteImg}>Delete</button>
                {this.state.uploadedFileCloudinaryUrl === '' ? null :
                    <div>
                        <p>{this.state.uploadedFile.name}</p>
                        <img src={this.state.uploadedFileCloudinaryUrl} />
                        <a>{this.state.uploadedFileCloudinaryUrl} </a>
                    </div>}
                <CloudinaryContext cloudName="quanglibrary">
                    <Image publicId="lisa_ghvqcw">
                        <Transformation height="150" width="150" crop="fill" effect="sepia" radius="20" />
                    </Image>
                </CloudinaryContext>

                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <div className="section-card rounded">
                                <div className="section-card__header lead text-black">0e216002-9f83-458a-91e0-e2de81daa155</div>
                                <div className="section-card__content">
                                    <h4 className="text-center">Docker introduction</h4>
                                    <p className="text-center">21/10/2018</p>
                                </div>
                                <div className="card-footer section-card__footer d-flex justify-content-between">
                                    <i className="fas fa-pen fa-lg"></i>
                                    <i className="far fa-trash-alt fa-lg "></i>
                                    <i className="fas fa-plus fa-lg text-center"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="section-card rounded">
                                <div className="section-card__header lead text-black">0e216002-9f83-458a-91e0-e2de81daa155</div>
                                <div className="section-card__content">
                                    <h4 className="text-center">Docker introduction</h4>
                                    <p className="text-center">21/10/2018</p>
                                </div>
                                <div className="card-footer section-card__footer d-flex justify-content-between">
                                    <i className="fas fa-pen fa-lg"></i>
                                    <i className="far fa-trash-alt fa-lg "></i>
                                    <i className="fas fa-plus fa-lg text-center"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="section-card rounded">
                                <div className="section-card__header lead text-black">0e216002-9f83-458a-91e0-e2de81daa155</div>
                                <div className="section-card__content">
                                    <h4 className="text-center">Docker introduction</h4>
                                    <p className="text-center">21/10/2018</p>
                                </div>
                                <div className="card-footer section-card__footer d-flex justify-content-between">
                                    <i className="fas fa-pen fa-lg"></i>
                                    <i className="far fa-trash-alt fa-lg "></i>
                                    <i className="fas fa-plus fa-lg text-center"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="section-card rounded">
                                <div className="section-card__header lead text-black">0e216002-9f83-458a-91e0-e2de81daa155</div>
                                <div className="section-card__content">
                                    <h4 className="text-center">Docker introduction</h4>
                                    <p className="text-center">21/10/2018</p>
                                </div>
                                <div className="card-footer section-card__footer d-flex justify-content-between">
                                    <i className="fas fa-pen fa-lg"></i>
                                    <i className="far fa-trash-alt fa-lg "></i>
                                    <i className="fas fa-plus fa-lg text-center"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="section-card rounded">
                                <div className="section-card__header lead text-black">0e216002-9f83-458a-91e0-e2de81daa155</div>
                                <div className="section-card__content">
                                    <h4 className="text-center">Docker introduction</h4>
                                    <p className="text-center">21/10/2018</p>
                                </div>
                                <div className="card-footer section-card__footer d-flex justify-content-between">
                                    <i className="fas fa-pen fa-lg"></i>
                                    <i className="far fa-trash-alt fa-lg "></i>
                                    <i className="fas fa-plus fa-lg text-center"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="section-card rounded">
                                <div className="section-card__header lead text-black">0e216002-9f83-458a-91e0-e2de81daa155</div>
                                <div className="section-card__content">
                                    <h4 className="text-center">Docker introduction</h4>
                                    <p className="text-center">21/10/2018</p>
                                </div>
                                <div className="card-footer section-card__footer d-flex justify-content-between">
                                    <i className="fas fa-pen fa-lg"></i>
                                    <i className="far fa-trash-alt fa-lg "></i>
                                    <i className="fas fa-plus fa-lg text-center"></i>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </div>

        );
    }
}

export default ManagementLessonEdit;