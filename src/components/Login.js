import React, { Component } from 'react';
import {LoginActions} from '../actions';
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
            <section className="login-block">
                <div className="container">
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
                            <div className="copy-text">Created with <i className="fa fa-heart" /> by <a href="http://grafreez.com">Grafreez.com</a></div>
                        </div>
                        <div className="col-md-8 banner-sec">
                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                                    <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                                    <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                                </ol>
                                <div className="carousel-inner" role="listbox">
                                    <div className="carousel-item active">
                                        <img className="d-block img-fluid" src="https://static.pexels.com/photos/33972/pexels-photo.jpg" alt="First slide" />
                                        <div className="carousel-caption d-none d-md-block">
                                            <div className="banner-text">
                                                <h2>This is Heaven</h2>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block img-fluid" src="https://images.pexels.com/photos/7097/people-coffee-tea-meeting.jpg" alt="First slide" />
                                        <div className="carousel-caption d-none d-md-block">
                                            <div className="banner-text">
                                                <h2>This is Heaven</h2>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block img-fluid" src="https://images.pexels.com/photos/872957/pexels-photo-872957.jpeg" alt="First slide" />
                                        <div className="carousel-caption d-none d-md-block">
                                            <div className="banner-text">
                                                <h2>This is Heaven</h2>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div></section>

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