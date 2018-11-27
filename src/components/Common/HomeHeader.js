import React, { Component } from 'react';
import lottie from 'lottie-web';
import animation from "../../assets/animations/lego_loader.json";
import { connect } from 'react-redux';
import cookies from 'react-cookies';
import { VariableConstants } from '../../constants';
import { Link, Redirect } from 'react-router-dom';
import { CategoryActions, CourseActions, LoginActions } from '../../actions';
import { slide as Menu } from 'react-burger-menu'


class HomeHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenMenu: false,
            redirectToLogIn: false
        }
    }

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

    handleLogOut = (event) => {
        event.preventDefault();
        cookies.remove(VariableConstants.TOKEN, { path: "/" });
        cookies.remove(VariableConstants.USERNAME, { path: "/" });
        cookies.remove(VariableConstants.ROLES, { path: "/" });
        cookies.remove(VariableConstants.EMAIL, { path: "/" });
        cookies.remove(VariableConstants.IMAGE, { path: "/" });
        this.props.logout();
        this.setState({
            redirectToLogIn: true
        });
    }
    handleStateChange = (state) => {
        this.setState({ isOpenMenu: state.isOpen })
    }

    closeMenu = () => {
        this.setState({ isOpenMenu: false })
    }
    openMenu = () => {
        this.setState({
            isOpenMenu: true
        });
    }
    toggleMenu = () => {
        this.setState({ isOpenMenu: !this.state.isOpenMenu })
    }


    onCategoryClick = (categoryId) => {
        if (this.props.currentCategoryWithTopics)
            if (this.props.currentCategoryWithTopics.id === categoryId) {
                return;
            }
        this.props.getCurrentCategoryWithTopics(categoryId);
        this.props.getCurrentCoursesByCategory(categoryId, VariableConstants.POPULAR, 0);
    }



    ///////////////////////////////////
    ///////////////////////////////////
    ////////RENDER SECTION/////////////

    renderCategories = () => {
        return this.props.categories.map(category => <Link key={category.id} to={{ pathname: "/courses/" + category.id, categoryId: category.id }}><div key={category.id} onClick={() => this.onCategoryClick(category.id)}>{category.name}</div></Link>)
    }
    renderAccountNavLinks = () => {
        const roles = cookies.load(VariableConstants.ROLES);
        return cookies.load(VariableConstants.USERNAME) ?
            <React.Fragment>
                <hr className="vertical-hr" />
                {roles.includes("ROLE_LEARNER")
                    ?
                    <React.Fragment>
                        <Link to="/profile">
                            <li className="nav-item mr-1">
                                <a className="nav-link d-flex align-items-center"><i className="fas fa-bookmark fa-lg"></i> &nbsp; My courses</a>
                            </li>
                        </Link>
                        <hr className="vertical-hr" />
                    </React.Fragment> : ""}


                <React.Fragment>
                    <Link to="/management">
                        <li className="nav-item mr-1">
                            <a className="nav-link d-flex align-items-center"><i className="fas fa-bookmark fa-lg"></i> &nbsp; Management</a>
                        </li>
                    </Link>
                    <hr className="vertical-hr" />
                </React.Fragment>
                <li className="nav-item mr-1">
                    <div className="dropdown">
                        <div className="nav-link d-flex align-items-center dropbtn"><i className="fas fa-user-circle fa-lg"></i> &nbsp; {cookies.load(VariableConstants.USERNAME)}</div>
                        <div className="dropdown-content  high__zindex">
                            <a className="menu-item" href="">My profile</a>
                            <a className="menu-item" href="" onClick={this.handleLogOut}>Log out</a>

                        </div>
                    </div>

                </li>
            </React.Fragment>
            :
            <React.Fragment>
                <Link to={"/login"}>
                    <li className="nav-item mr-1">
                        <a className="nav-link d-flex align-items-center btn btn-sm btn-outline-danger"><i className="material-icons">vpn_key</i>&nbsp; Log in</a>
                    </li>
                </Link>
                <li className="nav-item">
                    <a className="nav-link d-flex align-items-center btn btn-sm btn-outline-info"><i className="material-icons">fiber_new</i>&nbsp; Sign up</a>
                </li>
            </React.Fragment>
    }

    renderSideMenuItems = () => {
        return this.props.categories.map(category => <Link key={category.id} to={{ pathname: "/courses/" + category.id, categoryId: category.id }}><a className="menu-item text-white" key={category.id} onClick={() => this.onCategoryClick(category.id)} href="">{category.name}</a></Link>)

    }

    renderSideMenu = () => {
        return <Menu onStateChange={(state) => this.handleStateChange(state)} right customBurgerIcon={false} isOpen={this.state.isOpenMenu} pageWrapId={"clientSide"} width={"300px"}>
            {this.renderSideMenuItems()}
        </Menu>
    }
    render() {
        console.log(cookies.load(VariableConstants.ROLES));
        return (
            <React.Fragment>
                {this.renderSideMenu()}
                {this.state.redirectToLogIn && <Redirect to={"/"} />}
                <header>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light nav__gradient high__zindex nav__shadow">

                        <Link to="/"><div className="navbar-brand"><img src={require('../../assets/images-system/logo-geek.png')} style={{ width: "30px", margin: "auto" }} alt="" /></div></Link>
                        <button className="navbar-toggler" type="button" onClick={this.toggleMenu}>
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
                                    <a className="nav-link d-flex align-items-center"><i className="fas fa-shopping-cart fa-lg"></i></a>
                                </li>
                                {this.renderAccountNavLinks()}
                            </ul>
                        </div>
                    </nav>
                </header>
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        categories: state.categories,
        courses: state.currentCoursesByCategory,
        currentCategoryWithTopics: state.currentCategoryWithTopics.data,
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getAllCategories: () => {
            dispatch(CategoryActions.getAllCategories())
        }, getCurrentCategoryWithTopics: (categoryId) => {
            dispatch(CategoryActions.getCurrentCategoryWithTopics(categoryId))
        },
        getCurrentCoursesByCategory: (category, filter, page) => {
            dispatch(CourseActions.getCurrentCoursesByCategory(category, filter, page))
        },
        logout: () => {
            dispatch(LoginActions.logout())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader)