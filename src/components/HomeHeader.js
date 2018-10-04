import React, { Component } from 'react';
import lottie from 'lottie-web';
import animation from "../assets/animations/lego_loader.json";
import {connect} from 'react-redux';
class HomeHeader extends Component {
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

    renderCategories=()=>{
        return this.props.categories.map(category=><a key={category.id} className="dropdown-item" href="">{category.name}</a>)
    }

    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light nav__gradient high__zindex nav__shadow">
                    <a className="navbar-brand" href=""><img src={require('../assets/images-system/logo-geek.png')} style={{ width: "30px" }} alt=""/></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">

                            <li className="nav-item dropdown">
                                <a className="nav-link d-flex align-items-center h6 dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" href=""><div style={{ width: "50px"}} ref={el => (this.headerAnimationRefs = el)}></div>&nbsp; Categories</a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                   {this.renderCategories()}
                                </div>
                            </li>
                            <li>
                            </li>
                        </ul>
                    </div>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item mr-1">
                                <a className="nav-link d-flex align-items-center"><i className="material-icons">shopping_cart</i></a>
                            </li>
                            <li className="nav-item mr-1">
                                <a className="nav-link d-flex align-items-center btn btn-sm btn-outline-danger"><i className="material-icons">vpn_key</i>&nbsp; Log in</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link d-flex align-items-center btn btn-sm btn-outline-info"><i className="material-icons">fiber_new</i>&nbsp; Sign up</a>
                            </li>
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
export default connect(mapStateToProps)(HomeHeader)