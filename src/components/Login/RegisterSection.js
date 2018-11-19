import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { LoginActions, SystemActions } from '../../actions';
class RegisterSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRedirect: false
        }
    }
    backToLogin = (event) => {
        event.preventDefault();
        this.setState({
            isRedirect: true,
            newAccount: {
                username:'',
                name:'',
                email:'',
                password:'',
                confirmPassword:''
            }
        });
    }

    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            newAccount: {
                ...this.state.newAccount,
                [name]: value
            }
        })
    }

    register=(event)=>{
        event.preventDefault();
        this.props.registerNewStudentAccount(this.state.newAccount);
    }
    render() {
        console.log(this.state);

        return (
            <React.Fragment>
                {this.state.isRedirect && <Redirect to={"/login"}></Redirect>}
                {this.props.register.msg!=="" && this.props.alertOn("danger",this.props.register.msg)}
                {this.props.register.successful && this.props.alertOn("info","Register successfully!")} 
                {this.props.register.successful && <Redirect to={"/login"}/>} 

                <div className="col-md-5 login-sec">
                    <h2 className="text-center">Create new account</h2>
                    <form className="login-form register-form">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1" className="text-uppercase" >Username</label>
                            <input type="text" className="form-control" name="username" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1" className="text-uppercase" >Name</label>
                            <input type="text" className="form-control" name="name" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1" className="text-uppercase">Email</label>
                            <input type="email" className="form-control" name="email" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1" className="text-uppercase">Password</label>
                            <input type="password" className="form-control" name="password" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1" className="text-uppercase">Confirm password</label>
                            <input type="password" className="form-control" name="confirmPassword" onChange={this.handleChange} />
                        </div>

                        <div className="form-check">

                            <button type="submit" className="btn btn-login float-right" onClick={this.register}>Create</button>
                        </div>
                        <div className="mt-4"><p className="lead text-center text-danger"></p></div>

                    </form>
                    <div className="copy-text h6">You already have account? <a href="" onClick={this.backToLogin}>Log in</a></div>
                </div>
            </React.Fragment>

        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        alertOn: (type, content) => {
            dispatch(SystemActions.alertOn(type, content));
        },
        registerNewStudentAccount:(newAccount)=>{
            dispatch(LoginActions.registerNewStudentAccount(newAccount))
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        register:state.register
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RegisterSection)