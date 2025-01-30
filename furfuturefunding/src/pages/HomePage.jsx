import React, { useState } from "react";
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
    attendance_mode: '',
    discipline: '',
  });
  const [sortOrder, setSortOrder] = useState('');

  const handleFilterChange = ({ type, value }) => {
    setFilters(prev => ({
      ...prev,
      [type]: value
    }));
  };

  const handleSortChange = (value) => {
    setSortOrder(value);
  };

  // Filter and sort opportunities
  const processedOpportunities = React.useMemo(() => {
    let result = opportunities?.filter(opportunity => {
      if (!opportunity) return false;

      // Check state filter
      const stateMatch = !filters.state || 
        opportunity.location?.toLowerCase() === filters.state.toLowerCase();

      // Check eligibility filter
      const eligibilityMatch = !filters.eligibility || 
        (Array.isArray(opportunity.eligibility) && 
         opportunity.eligibility.some(e => 
           e.description?.toLowerCase() === filters.eligibility.toLowerCase()
         ));

      // Check type filter
      const typeMatch = !filters.type || 
        opportunity.type?.toString() === filters.type;

      // Check attendance mode filter
      const attendanceModeMatch = !filters.attendance_mode || 
        opportunity.attendance_mode?.toLowerCase() === filters.attendance_mode.toLowerCase();

      // Check discipline filter
      const disciplineMatch = !filters.discipline || 
        (Array.isArray(opportunity.discipline) && 
         opportunity.discipline.some(d => 
           d.description?.toLowerCase() === filters.discipline.toLowerCase()
         ));

      return stateMatch && eligibilityMatch && typeMatch && attendanceModeMatch && disciplineMatch;
    }) || [];

    // Sort by close_date if sort order is specified
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
        <FilterOption 
          onFilterChange={handleFilterChange}
          onSortChange={handleSortChange}
          currentFilters={filters}
          currentSort={sortOrder}
        />
      </div>

      <div className="opportunities-container">
        <h2 className="opportunities-title">
          Scholarship and Conference Opportunities
        </h2>

        <div className="opportunities-grid">
          {isLoading ? (
            <div className="loading-state">
              <p>Loading opportunities...</p>
            </div>
          ) : error ? (
            <div className="error-state">
              <p>Error: {error.message}</p>
            </div>
          ) : processedOpportunities.length > 0 ? (
            processedOpportunities.map((opportunitiesData, key) => (
              <OpportunityCard
                key={opportunitiesData.id || key}
                opportunitiesData={opportunitiesData}
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