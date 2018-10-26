import React, { Component } from 'react';
import lottie from 'lottie-web';
import animation from "../../assets/animations/lego_loader.json";
import { connect } from 'react-redux';
import cookies from 'react-cookies';
import { VariableConstants } from '../../constants';
import { Link } from 'react-router-dom';
import { CategoryActions, CourseActions } from '../../actions';
import { slide as Menu } from 'react-burger-menu'


class AdminHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenMenu: false
        }
    }


    componentWillMount() {
        this.props.getAllCategories()
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
        return this.props.categories.map(category => <Link key={category.id} to={{ pathname: "/courses/" + category.name.toLowerCase(), categoryId: category.id }}><a key={category.id} onClick={() => this.onCategoryClick(category.id)} href="">{category.name}</a></Link>)
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

    renderSideMenuItems = () => {
        return this.props.categories.map(category => <Link key={category.id} to={{ pathname: "/courses/" + category.name.toLowerCase(), categoryId: category.id }}><a className="menu-item text-white" key={category.id} onClick={() => this.onCategoryClick(category.id)} href="">{category.name}</a></Link>)

    }

    renderSideMenu = () => {
        return <Menu onStateChange={(state) => this.handleStateChange(state)} left customBurgerIcon={false} isOpen={true} pageWrapId={"clientSide"} width={"300px"}>
            {this.renderSideMenuItems()}
        </Menu>
    }
    render() {
        console.log(this.state.isOpenMenu);
        return (
            <React.Fragment>
                <header>
                    <nav className="navbar navbar-light bg-light nav__gradient high__zindex nav__shadow">
                        <Link to="/"><div className="navbar-brand"><img src={require('../../assets/images-system/logo-geek.png')} style={{ width: "30px" }} alt="" /></div></Link>
                        <p className="lead admin-header__dashboardtitle">Geek Dashboard</p>
                        <p className="lead admin-header__title">LEARNER EDIT</p>

                    </nav>
                </header>
                <div className="sidenav">
                    <a href="" className="lead sidenav-active"><i class="fas fa-chalkboard-teacher"></i> Learner </a>
                    <a href="" className="lead"><i class="fas fa-th"></i> Category </a>
                    <a href="" className="lead"><i class="fas fa-book-reader"></i> Course</a>
                    <a href="" className="lead"><i class="fas fa-book-open"></i> Lesson</a>

                </div>
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
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AdminHeader)