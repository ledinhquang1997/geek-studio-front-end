import React, { Component } from 'react';

class FilterTab extends Component {
    render() {
        return (
            <div className="container">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Popular</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Rating</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default FilterTab;