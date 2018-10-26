import React, { Component } from 'react';
class InstructorCard extends Component {
    renderCategories = () => {
        var categories = "";
        this.props.categories.forEach((value, index) => {
             if (index === this.props.categories.length - 1)
                categories += value.name;
            else if (index === this.props.categories.length - 2)
                categories += value.name + " & ";
            else
                categories += value.name+", ";
        });
        return categories;
    }
    render() {
        return (
            <div className={this.props.isSlideItem ? "col-lg-3 col-md-6" : "col-10 m-auto"}>
                <div className="team_item">
                    <div className="team_image"><img src={"https://res.cloudinary.com/quanglibrary/image/upload/s--dgh_pQof--/v1540525886/geek/electonic_klhzef.jpg"} alt="" /></div>
                    <div className="team_body">
                        <div className="team_title"><a href="">{this.props.name}</a></div>
                        <div className="team_subtitle">{this.renderCategories()}</div>
                        <div className="team_subtitle h6 mt-2">from: {this.props.company}</div>
                        <div className="social_list d-flex justify-content-center">
                            <ul className="list-inline">
                                <li><a href=""><i className="fab fa-facebook"></i></a></li>
                                <li><a href=""><i className="fas fa-envelope" /></a></li>
                                <li><a href=""><i className="fab fa-skype"></i></a></li>
                            </ul>
                        </div>
                        <blockquote className="blockquote text-center p-3">
                            <p className="blockquote-footer">{this.props.quote}</p>
                        </blockquote>
                    </div>
                </div>
            </div>
        );
    }
}

export default InstructorCard;