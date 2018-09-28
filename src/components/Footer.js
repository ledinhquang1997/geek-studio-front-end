import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer">
                    <div className="text-center py-3">
                    <img src={require('../images/logo-geek.png')} style={{ width: "30px" }} alt=""/>
                    <span className="h6">&nbsp; &nbsp; Geek Studio 2018 &copy;</span>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;