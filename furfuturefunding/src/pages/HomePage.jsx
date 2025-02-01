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
            <div>Loading...</div>
          ) : error ? (
            <div>Error: {error.message}</div>
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