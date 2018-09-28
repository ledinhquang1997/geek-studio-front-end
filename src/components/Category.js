import React, { Component } from 'react';

class Category extends Component {
    render() {
        return (
            <div className="col-lg-3 feature_col">
                <div className="feature text-center trans_400">
                    <div className="feature_icon"><img src={require("../images/icon_1.png")} alt="" /></div>
                    <h3 className="feature_title">The Experts</h3>
                    <div className="feature_text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></div>
                </div>
            </div>
        );
    }
}

export default Category;