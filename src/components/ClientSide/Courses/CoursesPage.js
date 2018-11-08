import React, { Component } from 'react';
import TopicSection from './TopicSection';
import BestCourse from './BestCourse';
import FilterTab from './FilterTab';
import CoursesSection from './CoursesSection';
import Pagination from './Pagination';
import InstructorsOfCategorySection from './InstructorsOfCategorySection';
class CoursesPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render() {
        return (
            <React.Fragment>
                <TopicSection categoryName={this.props.match.params.name}/>
                <BestCourse/>
                <FilterTab categoryName={this.props.match.params.name}/>
                <CoursesSection categoryName={this.props.match.params.name}/>

                <Pagination/>
                <InstructorsOfCategorySection/>

            </React.Fragment>
            );
    }
}

export default CoursesPage;