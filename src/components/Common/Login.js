import React, { Component } from 'react';
import {LoginActions} from '../../actions';
import {connect} from 'react-redux';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            username:"",
            password:"",
        }
    }
    handleChange=(event)=> {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
          [name]: value
        })
      }
      handleLogin=(event)=> {
        event.preventDefault();
        this.props.login(this.state.username, this.state.password);
      }
    
      handleKeyUp = (event) => {
        if (event.keyCode === 13) {
          this.handleLogin();
        }
      }
    render() {
        console.log(this.state)
        return (
            <div className="login-block d-flex align-items-center">
                <div className="container container-login">
                    <div className="row">
                        <div className="col-md-4 login-sec">
                            <h2 className="text-center">Login Now</h2>
                            <form className="login-form">
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1" className="text-uppercase">Username</label>
                                    <input type="text" className="form-control" name="username" onChange={this.handleChange} onKeyUp={this.handleKeyUp}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1" className="text-uppercase">Password</label>
                                    <input type="password" className="form-control" name="password" onChange={this.handleChange} onKeyUp={this.handleKeyUp}/>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" />
                                        <small>Remember Me</small>
                                    </label>
                                    <button type="submit" className="btn btn-login float-right" onClick={this.handleLogin}>Submit</button>
                                </div>
                            </form>
                            <div className="copy-text h6">You do not have account? <a href="">Sign up</a></div>
                        </div>
                        <div className="col-md-8 banner-sec">
                        </div>
                    </div>
                </div></div>

        );
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        login: (username,password) => {
            dispatch(LoginActions.login(username,password))
        }
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)