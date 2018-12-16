import React, { Component } from 'react';
import { LoginActions, SystemActions } from '../../actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class LoginSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            isRedirect: false,
            backHome: false
        }
    }

    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }
    handleLogin = (event) => {
        if (event)
            event.preventDefault();
        this.props.login(this.state.username, this.state.password);
    }

    handleKeyUp = (event) => {
        if (event.key === 'Enter') {
            this.handleLogin();
        }
    }

    moveToRegister = (event) => {
        event.preventDefault();
        this.setState({
            isRedirect: true
        });
    }
    backToHome = (event) => {
        event.preventDefault();
        this.setState({
            backHome: true
        });
    }
    render() {
        return (
            <React.Fragment>
                {this.props.loginData.msg !== "" && this.props.alertOn("warning", this.props.loginData.msg)}
                {this.props.loginData.loggedin && <Redirect to={"/"}></Redirect>}
                {this.state.isRedirect && <Redirect to={"/login/register"}></Redirect>}
                {this.state.backHome && <Redirect to={"/"}></Redirect>}

                <div className="col-md-5 login-sec">
                    <h2 className="text-center">Login Now</h2>
                    <form className="login-form">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1" className="text-uppercase">Username</label>
                            <input type="text" className="form-control" name="username" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1" className="text-uppercase">Password</label>
                            <input type="password" className="form-control" name="password" onChange={this.handleChange} onKeyPress={this.handleKeyUp} />
                        </div>
                        <div className="form-check">
                            {/* <label className="form-check-label">
                                <input type="checkbox" className="form-check-input" />
                                <small>Remember Me</small>
                            </label> */}
                            <button type="submit" className="btn btn-login float-right" onClick={this.handleLogin}>Submit</button>
                        </div>
                        <div className="mt-4"><p className="lead text-center text-danger">{this.props.loginData.msg}</p></div>

                    </form>
                    <div className="h6">Back to <a onClick={this.backToHome} href="">Home</a></div>
                    <div className="copy-text h6">You do not have account? <a onClick={(event) => this.moveToRegister(event)} href="">Sign up</a></div>
                </div>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        login: (username, password) => {
            dispatch(LoginActions.login(username, password))
        },
        alertOn: (type, content) => {
            dispatch(SystemActions.alertOn(type, content))

        }
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        loginData: state.login
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginSection)