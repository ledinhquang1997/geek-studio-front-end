import React, { Component } from 'react';
import Jumbotron from './Jumbotron';
import BestSellerSection from './BestSellerSection';
import CategorySection from './CategorySection';
import InstructorsSection from './InstructorsSection';
import cookies from 'react-cookies';

class HomePage extends Component {
    render() {  
        console.log(cookies.loadAll());
        
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