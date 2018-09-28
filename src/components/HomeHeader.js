import React, { Component } from 'react';
import lottie from 'lottie-web';
import animation from "../assets/animations/lego_loader.json";
 
class HomeHeader extends Component {
    componentDidMount(prevProps, prevState) {
        if (this._el) {
          lottie.loadAnimation({
            container: this._el, // the dom element that will contain the animation
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: animation
          });
        }
      }
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light nav__gradient high__zindex nav__shadow">
                    <a className="navbar-brand" href=""><img src={require('../images/logo-geek.png')} style={{ width: "30px" }} alt=""/></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">

                            <li className="nav-item dropdown">
                                <a className="nav-link d-flex align-items-center h6 dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href=""><div style={{ width: "50px"}} ref={el => (this._el = el)}></div>&nbsp; Categories</a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="">Action</a>
                                    <a className="dropdown-item" href="">Another action</a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="">Something else here</a>
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
export default HomeHeader;