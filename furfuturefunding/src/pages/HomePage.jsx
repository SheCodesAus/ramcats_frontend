import React, { useState, useMemo } from "react";
import HeroSection from "../components/HeroSection";
import OpportunityCard from "../components/OpportunityCard";
import useOpportunities from "../hooks/use-opportunities";
import FilterOption from '../components/FilterOption';

const Homepage = () => {
  const { opportunities, isLoading, error } = useOpportunities();

  // State for filters and sorting
  const [filters, setFilters] = useState({
    state: '',
    eligibility: '',
    type: '',
    discipline: '',
  });

  const [sortOrder, setSortOrder] = useState('');

  // Function to update filters
  const handleFilterChange = ({ type, value }) => {
    setFilters(prev => ({
      ...prev,
      [type]: value
    }));
  };

  // Function to update sorting order
  const handleSortChange = (value) => {
    setSortOrder(value);
  };

  // Filtering and sorting logic (memoized for performance)
  const processedOpportunities = useMemo(() => {
    let result = opportunities?.filter(opportunity => {
      if (!opportunity) return false;
      return (
        (filters.state === '' || opportunity.location === filters.state) &&
        (filters.eligibility === '' || 
          (Array.isArray(opportunity.eligibility) && 
           opportunity.eligibility.some(e => e.description === filters.eligibility))) &&
        (filters.type === '' || opportunity.attendance_mode === filters.type) &&
        (filters.discipline === '' || 
          (Array.isArray(opportunity.discipline) && 
           opportunity.discipline.some(d => d.description === filters.discipline)))
      );
    }) || [];

    // Sorting by closing date
    if (sortOrder) {
      result.sort((a, b) => {
        const dateA = new Date(a.close_date);
        const dateB = new Date(b.close_date);
        return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
      });
    }

    return result;
  }, [opportunities, filters, sortOrder]);

  return (
    <div className="homepage">
      <HeroSection />
      <div className="controls">
        {/* Integrated filter + sorting inside FilterOption */}
        <FilterOption 
          onFilterChange={handleFilterChange} 
          onSortChange={handleSortChange} 
          currentSort={sortOrder}
        />
      </div>
      <div className="opportunities-container">
        <h2 className="opportunities-title">Scholarship and Conference Opportunities</h2>

        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error.message}</div>
        ) : processedOpportunities.length > 0 ? (
          <div className="opportunities-grid">
            {processedOpportunities.map((opportunity, key) => (
              <OpportunityCard key={opportunity.id || key} opportunity={opportunity} />
            ))}
          </div>
        ) : (
          <div className="no-results">
            <p>No opportunities match your selected filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Homepage;
