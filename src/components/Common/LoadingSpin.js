import React, { Component } from 'react';

class LoadingSpin extends Component {
    render() {
        return (
            <div className="modal">
                {/* Modal content */}
                <div className="modal-content">
                    <img className="spinningSgv" src={require("../../assets/images-system/ring.svg")} />
                </div>
            </div>
        );
    }
}

export default LoadingSpin;