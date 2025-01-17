import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import OpportunityCard from '../components/OpportunityCard';
import SortOption from '../components/SortOption';
import FilterOption from '../components/FilterOption';
import Search from '../components/Search';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <div className="home-page">
      <Header />
      <HeroSection />
      <div className="opportunity-section">
        <div className="controls">
          <SortOption />
          <FilterOption />
          <Search />
        </div>
        <div className="opportunity-list">
          {/* You would map over your opportunities data here */}
          <OpportunityCard />
          <OpportunityCard />
          {/* ... */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;