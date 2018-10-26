import React, { Component } from 'react';
import Footer from '../Common/Footer';
import HomeHeader from '../Common/HomeHeader';
import HomePage from './Home/HomePage'
import {Route} from 'react-router-dom';
import CoursesPage from './Courses/CoursesPage';
import CourseDetailPage from './CourseDetail/CourseDetailPage';

class ClientSide extends Component {
    render() {
        return (
            <div>
                <HomeHeader />
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/courses/:name" component={CoursesPage}/>
                <Route exact path="/course/:id" component={CourseDetailPage}/>
                <Footer />
            </div>
        );
    }
}

export default ClientSide;