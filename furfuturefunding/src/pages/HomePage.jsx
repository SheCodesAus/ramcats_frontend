import React, { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import OpportunityCard from "../components/OpportunityCard";
import useOpportunities from "../hooks/use-opportunities";
import FilterOption from '../components/FilterOption';
// import SortOption from '../components/SortOption';

const Homepage = () => {
  const { opportunities, isLoading, error } = useOpportunities();
  const [filters, setFilters] = useState({
    state: '',
    eligibility: [],
    attendance_mode: [],
    discipline: []
  });
  // const [sortOrder, setSortOrder] = useState('');

  const handleFilterChange = ({ type, value }) => {
    setFilters(prev => ({
      ...prev,
      [type]: value
    }));
  };

  // const handleSortChange = (order) => {
  //   setSortOrder(order);
  // };

  // Filter opportunities based on selected criteria
  const filteredOpportunities = opportunities?.filter(opportunity => {
    return (
      (filters.state === '' || 
       (opportunity.location && opportunity.location.includes(filters.state))) &&
      (filters.eligibility.length === 0 || 
       (opportunity.eligibility && 
        opportunity.eligibility.some(e => filters.eligibility.includes(e.description)))) &&
      (filters.attendance_mode.length === 0 || 
       (opportunity.attendance_mode && 
        filters.attendance_mode.includes(opportunity.attendance_mode.toLowerCase()))) &&
      (filters.discipline.length === 0 || 
       (opportunity.discipline && 
        opportunity.discipline.some(d => filters.discipline.includes(d.description))))
    );
  });

  // Sort opportunities based on selected order
  // const sortedOpportunities = [...filteredOpportunities].sort((a, b) => {
  //   if (sortOrder === 'newest') {
  //     return new Date(b.createdAt) - new Date(a.createdAt);
  //   } else if (sortOrder === 'oldest') {
  //     return new Date(a.createdAt) - new Date(b.createdAt);
  //   }
  //   return 0;
  // });

  return (
    <div className="homepage">
      <HeroSection />
      <div className="controls">
        <FilterOption onFilterChange={handleFilterChange} />
        {/* <SortOption onSortChange={handleSortChange} /> */}
      </div>
      <div className="opportunities-container">
        <h2 className="opportunities-title">
          Scholarship and Conference Opportunities
        </h2>
        <div className="opportunities-grid">
          {isLoading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>Error: {error.message}</div>
          ) : filteredOpportunities?.length > 0 ? (
            filteredOpportunities.map((opportunity, key) => (
              <OpportunityCard
                key={opportunity.id || key}
                opportunity={opportunity}
              />
            ))
          ) : (
            <div className="no-results">
              <p>No opportunities match your selected filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Homepage;