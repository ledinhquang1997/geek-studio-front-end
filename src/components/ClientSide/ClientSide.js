import React, { Component } from 'react';
import Footer from '../Common/Footer';
import HomeHeader from '../Common/HomeHeader';
import HomePage from './Home/HomePage'
import { PrivateRoute } from '../Common/private-route';
import CoursesPage from './Courses/CoursesPage';


class ClientSide extends Component {
    render() {
        return (
            <div>
                <HomeHeader />
                <PrivateRoute exact path="/" component={HomePage} requiredRoles={"ROLE_ADMIN"} />
                <PrivateRoute exact path="/courses/:name" component={CoursesPage} requiredRoles={"ROLE_ADMIN"} />
                <Footer />
            </div>
        );
    }
}

export default ClientSide;