import React, { Component } from 'react';

class Category extends Component {
    
    render() {
        return (
            <div className="col-lg-3 feature_col" onClick={()=>this.props.onCategoryClick(this.props.id,this.props.name)}>
                <div className="feature text-center trans_400">
                    <div className="feature_icon"><img src={require("../assets/images-system/"+this.props.image)} alt="" /></div>
                    <h3 className="feature_title">{this.props.name}</h3>
                    <div className="feature_text"><p>{this.props.description}</p></div>
                </div>
            </div>
        );
    }
}

export default Category;