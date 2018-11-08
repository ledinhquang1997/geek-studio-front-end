import React, { Component } from 'react';
import renderHTML from 'react-render-html';
import { connect } from "react-redux";
import { CourseActions, InstructorActions } from '../../../actions';
import CoursesOfInstructor from './CoursesOfInstructor';
import Pagination from './Pagination';
import { forwardToNewPathname } from '../../Common/utilities';

class Instructor extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
      }
    componentWillMount() {

        if (Object.keys(this.props.instructorDetail.data).length === 0 || this.props.instructorDetail.data.username !== this.props.match.params.username)
            this.props.getInstructorDetail(this.props.match.params.username);

        if (this.props.currentCoursesByInstructor.courses.length === 0 || this.props.instructorDetail.data.username !== this.props.match.params.username) {
            console.log(true);
            this.props.getCoursesByInstructor(this.props.match.params.username, 0);

        }
    }
    renderName = () => {
        if (this.props.instructorDetail.err) forwardToNewPathname("/404.html")
        return this.props.instructorDetail.data ? this.props.instructorDetail.data.name : "";
    }
    renderImage = () => {
        if (this.props.instructorDetail.err) forwardToNewPathname("/404.html")
        return this.props.instructorDetail.data ? this.props.instructorDetail.data.image : "";
    }

    renderCategories = () => {
        if (this.props.instructorDetail.err) forwardToNewPathname("/404.html")
        if (this.props.instructorDetail.data) {
            if (this.props.instructorDetail.data.categories) {
                var categories = "";
                this.props.instructorDetail.data.categories.forEach((value, index) => {
                    if (index === this.props.instructorDetail.data.categories.length - 1)
                        categories += value.name;
                    else if (index === this.props.instructorDetail.data.categories.length - 2)
                        categories += value.name + " & ";
                    else
                        categories += value.name + ", ";
                });
                return categories;
            }
        }
        return "";
    }

    renderCompany = () => {
        if (this.props.instructorDetail.err) forwardToNewPathname("/404.html")
        return this.props.instructorDetail.data ? this.props.instructorDetail.data.company : "";
    }
    render() {
        return (
            <React.Fragment>
                <div className="instructor-jumbotron">
                    <h2 className=" text-white text-center pt-5">{this.renderName()}</h2>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-4 instructor">
                            <div className="">
                                <div className="instructor_image"><img src={this.renderImage()} alt="" /></div>
                                <div className="instructor_body">
                                    <div className="team_title"><a href="">{this.renderName()}</a></div>
                                    <div className="team_subtitle">{this.renderCategories()}</div>
                                    <div className="team_subtitle h6 mt-2">from: {this.renderCompany()}</div>
                                    <div className="social_list d-flex justify-content-center">
                                        <ul className="list-inline">
                                            <li><a href=""><i className="fab fa-facebook"></i></a></li>
                                            <li><a href=""><i className="fas fa-envelope" /></a></li>
                                            <li><a href=""><i className="fab fa-skype"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-8 rounded mt-2 instructor-biography">
                            <div className="m-3">
                                {renderHTML(`<ul>
<li>
<p><strong>Who will read your bio?</strong>&nbsp;This depends on when and how it will be used. A bio for a freelance designer&rsquo;s website should be different than the one used in your employer&rsquo;s website, even if you've got the same job function in both cases. Your employer won&rsquo;t appreciate you for soliciting work using their website. Write one bio per target audience.</p>
</li>
<li>
<p><strong>What does your audience need to know?&nbsp;</strong>For employees or job applicants, recruiters will need to know your professional experience, skills, and academic background. For entrepreneurs, this refers to the products or services you offer, and how they make your customer&rsquo;s lives easier.</p>
</li>
<li>
<p><strong>What do you want your audience to know?&nbsp;</strong>This isn&rsquo;t directly about your skills, products, or services. It&rsquo;s about the underlying feelings you evoke in the people working with you. For instance, an accountant&rsquo;s clients will want to work with someone trustworthy. Trainers, meanwhile, are sought after for their patience and creativity in interacting with students.&nbsp;</p>
</li>
<li>
<p><strong>What&rsquo;s in it for your readers?&nbsp;</strong>Specify the problem or goal your audience can accomplish with your help?&nbsp;</p>
</li>
</ul>`)}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="container-fluid instructor-courses-section mt-5 mb-5">
                    <h2 className="text-center mt-3 mb-5">Courses taught by Lalisa Manoban</h2>
                    <div className="row">
                        <div className="container col-1 d-flex align-items-center justify-content-center slider-btn-arrow">
                            <button className="btn btn-circle mr-3 d-flex justify-content-center align-items-center high__zindex" onClick={this.previous}><i className="material-icons">skip_previous</i></button>
                        </div>
                        <div className="col-lg-10 col-md-12 col-sm-12 m-auto">
                            <Slider draggable={true} responsive={responsiveSetting} ref={c => (this.slider = c)} arrows={false} {...settings}>
                                {this.renderCourses()}
                            </Slider>
                        </div>
                        <div className="container col-1 d-flex align-items-center justify-content-center slider-btn-arrow">
                            <button className="btn btn-circle mr-3 d-flex justify-content-center align-items-center high__zindex" onClick={this.next}><i className="material-icons">skip_next</i></button>
                        </div>
                    </div>
                </div> */}
                <CoursesOfInstructor />
                <Pagination />
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        instructorDetail: state.instructorDetail,
        currentCoursesByInstructor: state.currentCoursesByInstructor
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getInstructorDetail: (username) => {
            dispatch(InstructorActions.getInstructorDetail(username))
        },
        getCoursesByInstructor: (username, page) => {
            dispatch(CourseActions.getCoursesByInstructor(username, page))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Instructor)