import React, { Component } from 'react';
import lottie from 'lottie-web';
import animation from "../../assets/animations/lego_loader.json";
import { connect } from 'react-redux';
import cookies from 'react-cookies';
import { VariableConstants } from '../../constants';
import {Link} from 'react-router-dom';
import { CategoryActions } from '../../actions';

class HomeHeader extends Component {
    
    componentWillMount() {
        this.props.getAllCategories()
    }
    
    componentDidMount() {
        if (this.headerAnimationRefs) {
            lottie.loadAnimation({
                container: this.headerAnimationRefs, // the dom element that will contain the animation
                renderer: "svg",
                loop: true,
                autoplay: true,
                animationData: animation
            });
        }
    }
    ///////////////////////////////////
    ///////////////////////////////////
    ////////RENDER SECTION/////////////

    renderCategories = () => {
        return this.props.categories.map(category => <Link key={category.id} to={{pathname:"/courses/"+category.name.toLowerCase(),categoryId:category.id}}><a key={category.id} onClick={()=>this.props.getCurrentCategoryWithTopics(category.id)} href="">{category.name}</a></Link>)
    }
    renderAccount = () => {
        return cookies.load(VariableConstants.LOGIN_INFO) ?
            <React.Fragment>
                <hr className="vertical-hr" />
                <li className="nav-item mr-1">
                    <a className="nav-link d-flex align-items-center"><i className="material-icons">account_circle</i> &nbsp; {cookies.load(VariableConstants.LOGIN_INFO).username}</a>
                </li>
            </React.Fragment>
            :
            <React.Fragment>
                <li className="nav-item mr-1">
                    <a className="nav-link d-flex align-items-center btn btn-sm btn-outline-danger"><i className="material-icons">vpn_key</i>&nbsp; Log in</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link d-flex align-items-center btn btn-sm btn-outline-info"><i className="material-icons">fiber_new</i>&nbsp; Sign up</a>
                </li>
            </React.Fragment>
    }

    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light nav__gradient high__zindex nav__shadow">
                    <Link to="/"><div className="navbar-brand"><img src={require('../../assets/images-system/logo-geek.png')} style={{ width: "30px" }} alt="" /></div></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <div className="dropdown">
                                    <div className="nav-link d-flex align-items-center h6 dropbtn" href=""><div style={{ width: "50px" }} ref={el => (this.headerAnimationRefs = el)}></div>&nbsp; Categories</div>
                                    <div className="dropdown-content">
                                        {this.renderCategories()}

                                    </div>
                                </div>
                            </li>

                            <li>
                            </li>
                        </ul>
                    </div>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav d-flex align-items-center">
                            <li className="nav-item mr-1">
                                <a className="nav-link d-flex align-items-center"><i className="material-icons">shopping_cart</i></a>
                            </li>

                            {this.renderAccount()}


                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        categories: state.categories
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getAllCategories: () => {
            dispatch(CategoryActions.getAllCategories())
        },getCurrentCategoryWithTopics: (categoryId) => {
            dispatch(CategoryActions.getCurrentCategoryWithTopics(categoryId))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(HomeHeader)