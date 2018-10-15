import React, { Component } from 'react';
import Jumbotron from './Jumbotron';
import BestSellerSection from './BestSellerSection';
import CategorySection from './CategorySection';
import InstructorsSection from './InstructorsSection';

class HomePage extends Component {
    render() {
        return (
            <div>
                <Jumbotron />
                <BestSellerSection />
                <CategorySection />
                <InstructorsSection />
            </div>
        );
    }
}

export default HomePage;