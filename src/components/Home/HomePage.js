import React, { Component } from 'react';
import HomeHeader from '../HomeHeader';
import Jumbotron from './Jumbotron';
import BestSellerSection from './BestSellerSection';
import CategorySection from './CategorySection';
import Footer from '../Footer';
import InstructorsSection from './InstructorsSection';

class HomePage extends Component {
    render() {
        return (
            <div>
                <HomeHeader />
                <Jumbotron />
                <BestSellerSection />
                <CategorySection />
                <InstructorsSection />
                <Footer />
            </div>
        );
    }
}

export default HomePage;