import React, { Component } from 'react';
import { SystemActions } from '../../actions';
import {connect} from 'react-redux';
import { Alert, AlertContainer } from "react-bs-notifier";

class AlertInfo extends Component {
    handleDismiss = () => {
        this.props.alertOff();
    }
    render() {
        return (
                <AlertContainer position="bottom-left">
                    {this.props.alert.status &&
                        <Alert type={this.props.alert.type} showIcon={true} onDismiss={this.handleDismiss} timeout={2000} headline="">{this.props.alert.content}</Alert>
                    }
                </AlertContainer>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        alert: state.alert
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        alertOff: () => {
            dispatch(SystemActions.alertOff())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AlertInfo)