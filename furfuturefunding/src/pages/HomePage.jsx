import React, { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import OpportunityCard from "../components/OpportunityCard";
import useOpportunities from "../hooks/use-opportunities";
import FilterOption from '../components/FilterOption';

const Homepage = () => {
  const { opportunities, isLoading, error } = useOpportunities();
  const [filters, setFilters] = useState({
    state: '',
    eligibility: '',
    type: '',
    discipline: '',
  });

  const handleFilterChange = ({ type, value }) => {
    console.log('Filter changed:', type, value);
    setFilters(prev => ({
      ...prev,
      [type]: value
    }));
  };

  const filteredOpportunities = opportunities?.filter(opportunity => {
    if (!opportunity) return false;

    // State filter (location)
    const stateMatch = filters.state === '' || 
      (opportunity.location && 
       opportunity.location === filters.state);

    // Eligibility filter
    const eligibilityMatch = filters.eligibility === '' || 
      (Array.isArray(opportunity.eligibility) && 
       opportunity.eligibility.some(e => 
         e.description.toLowerCase().includes(filters.eligibility.toLowerCase())));

    // Type filter - now using attendance_mode
    const typeMatch = filters.type === '' || 
      (opportunity.attendance_mode && 
       opportunity.attendance_mode === filters.type);

    // Discipline filter
    const disciplineMatch = filters.discipline === '' || 
      (Array.isArray(opportunity.discipline) && 
       opportunity.discipline.some(d => 
         d.description.toLowerCase().includes(filters.discipline.toLowerCase())));

    // Debug logging
    if (filters.type) {
      console.log('Opportunity:', {
        id: opportunity.id,
        attendance_mode: opportunity.attendance_mode,
        matchesFilter: typeMatch
      });
    }

    return stateMatch && eligibilityMatch && typeMatch && disciplineMatch;
  });

  // Debug log when filters change
  useEffect(() => {
    if (opportunities?.length > 0) {
      console.log('Sample opportunity:', opportunities[0]);
      console.log('All attendance_mode values:', [...new Set(opportunities.map(o => o.attendance_mode))]);
    }
  }, [opportunities]);

  return (
    <div className="homepage">
      <HeroSection />
      <div className="controls">
        <FilterOption 
          onFilterChange={handleFilterChange}
          currentFilters={filters}
        />
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
            filteredOpportunities.map((opportunitiesData, key) => (
              <OpportunityCard
                key={opportunitiesData.id || key}
                opportunitiesData={opportunitiesData}
              />
            ))
          ) : (
            <div className="no-results">
              <p>No opportunities match your selected filters.</p>
              <pre className="text-sm text-gray-500 mt-2">
                Current filters: {JSON.stringify(filters, null, 2)}
              </pre>
              <div className="mt-2 text-sm text-gray-500">
                Available opportunities: {opportunities?.length || 0}
              </div>
              {/* Show all available attendance_mode values */}
              <div className="mt-2 text-sm text-gray-500">
                Available types: {
                  opportunities 
                    ? [...new Set(opportunities.map(o => o.attendance_mode))].join(', ')
                    : 'None'
                }
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Homepage;