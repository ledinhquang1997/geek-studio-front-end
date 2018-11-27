import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import { Image, Transformation, CloudinaryContext } from 'cloudinary-react';
import ReactQuill from 'react-quill';
const CLOUDINARY_UPLOAD_PRESET = 'quangpreset';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/quanglibrary/video/upload';
class ManagementSectionEdit extends Component {
    constructor(props) {
        super(props);
        this.state={
        }
    }
    
    handleImageUpload = () => {

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
        formData.append("file", this.state.uploadedFile);
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

    deleteImg = () => {
        let formData = new FormData();
        formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
        formData.append("token", "dd1bf05005784f6b6c508c215621e82325cda174d8ad7a603659b4490a64678782f72151ae3025db2940d02a72bd0226c58bf67734480c268bacc366a4c0e663ca0f5a526d511c11869d3d51978d8f56ff639dc8b35a50139adcc93580e97edf43bb273cd85825d101bda152a7a5aa94430745b3d43a6764648e2ff9f59bc252ba510222e7d9ec88aa89ef4b883c8287");
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
    render() {
        return (
            <div className="management">
                <div className="container mt-3">
                    <div className="studypage-navbar rounded">
                        <h2 className="text-center m-4">Edit</h2>
                    </div>

                    <ReactQuill style={{ height: "500px", marginBottom: "100px" }} modules={getModule()} name="descriptionDetail" />
                    <div className="container">

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
                        {this.state.uploadedFile && <video width={"100%"} controls>
                            <source src={URL.createObjectURL(this.state.uploadedFile)} />
                            Your browser does not support HTML5 video.
                                </video>}

                        {/* <button className="btn btn-primary" onClick={this.deleteImg}>Delete</button>
                        <button className="btn btn-success" onClick={this.handleImageUpload}></button> */}
                        {/* {this.state.uploadedFileCloudinaryUrl === '' ? null :
                            <div>
                                <p>{this.state.uploadedFile.name}</p>
                                <a>{this.state.uploadedFileCloudinaryUrl} </a>
                            </div>}
                        <CloudinaryContext cloudName="quanglibrary">
                            <Image publicId="lisa_ghvqcw">
                                <Transformation height="150" width="150" crop="fill" effect="sepia" radius="20" />
                            </Image>
                        </CloudinaryContext> */}
                    </div>
                </div>
            </div >
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
export default ManagementSectionEdit;