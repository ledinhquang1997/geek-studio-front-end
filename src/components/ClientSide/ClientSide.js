import React, { Component } from 'react';
import Footer from '../Common/Footer';
import HomeHeader from '../Common/HomeHeader';
import HomePage from './Home/HomePage'
import {Route} from 'react-router-dom';
import CoursesPage from './Courses/CoursesPage';
import CourseDetailPage from './CourseDetail/CourseDetailPage';
import InstructorPage from './Instructor/InstructorPage';
import UserProfilePage from './UserProfile/UserProfilePage';
import StudyPage from './Study/StudyPage';
import Lessons from './Study/LessonsPage';

class ClientSide extends Component {
    render() {
        return (
            <div>
                <HomeHeader />
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/lesson/:lessonId" component={StudyPage}/>
                <Route exact path="/study/:courseId" component={Lessons}/>
                <Route exact path="/courses/:name" component={CoursesPage}/>
                <Route exact path="/course/:id" component={CourseDetailPage}/>
                <Route exact path="/profile" component={UserProfilePage}/>
                <Route exact path="/instructor/:username" component={InstructorPage}/>
                <Footer />
            </div>
        );
    }
}

export default ClientSide;