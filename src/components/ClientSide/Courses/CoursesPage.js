import React, { Component } from 'react';
import TopicSection from './TopicSection';
import BestCourse from './BestCourse';
import FilterTab from './FilterTab';
import CoursesSection from './CoursesSection';
import Pagination from './Pagination';
class CoursesPage extends Component {
    render() {
        return (
            <React.Fragment>
                <TopicSection categoryName={this.props.match.params.name}/>
                <BestCourse/>
                <FilterTab/>
                <CoursesSection/>
                <Pagination/>
            </React.Fragment>
            );
    }
}

export default CoursesPage;