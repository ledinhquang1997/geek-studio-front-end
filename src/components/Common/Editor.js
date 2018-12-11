import React, { Component } from 'react';
import ReactQuill from 'react-quill';

class Editor extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.content===this.props.content) return false;
            return true;
    }
    
    render() {
        return (
            <ReactQuill style={{ height: "500px", marginBottom: "100px" }} name="content" onChange={this.props.handleContentChange} value={this.props.content} modules={getModule()} />
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
        ],
        spellCheck: false
    };
    return modules;
}
export default Editor;