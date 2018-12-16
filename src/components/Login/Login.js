import React, { Component } from 'react';
import LoginSection from './LoginSection';
import RegisterSection from './RegisterSection';
import { Route } from 'react-router-dom';
import { connect } from "react-redux";
import AlertInfo from '../Common/AlertInfo';
class Login extends Component {

    render() {
        return (
            <React.Fragment>

                <div className="login-block d-flex align-items-center">
                    {this.props.loginData.isLoading && <div id="myModal" className="modal">
                        {/* Modal content */}
                        <div className="modal-content">
                            <div className="modal-header">
                                <h3 className="text-center lead text-white">Logging in...</h3>
                            </div>
                            <img src={require("../../assets/images-system/ring.svg")} alt="..."/>
                        </div>
                    </div>}

                    <AlertInfo />
                    <div className="container container-login">
                        <div className="row">
                            <Route exact path="/login/" component={LoginSection} />
                            <Route exact path="/login/register" component={RegisterSection} />
                            <div className="col-md-7 banner-sec">
                            </div>
                        </div>

                    </div></div>

            </React.Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {

    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        loginData: state.login
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)