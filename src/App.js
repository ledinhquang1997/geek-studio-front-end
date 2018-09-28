import React, { Component } from 'react';
import HomeHeader from './components/HomeHeader';
import Jumbotron from './components/Home/Jumbotron';
import BestSellerSection from './components/Home/BestSellerSection';
import CategorySection from './components/Home/CategorySection';
import Footer from './components/Footer';
import InstructorsSection from './components/Home/InstructorsSection';
class App extends Component {
  render() {
    return (
      <div>
        <HomeHeader />
        <Jumbotron />
        <BestSellerSection />
        <CategorySection/>
        <InstructorsSection/>
        <Footer/>
      </div>
    );
  }
}

export default App;
