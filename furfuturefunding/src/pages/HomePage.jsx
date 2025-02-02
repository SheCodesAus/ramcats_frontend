import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import OpportunityCards from "../components/OpportunityCard";
import useOpportunities from "../hooks/use-opportunities";
import FilterOption from '../components/FilterOption';
import Footer from "../components/Footer";

const Homepage = () => {
  const { opportunities, isLoading, error } = useOpportunities();
  const [filters, setFilters] = useState({
    state: '',
    eligibility: '',
    type: '',
    discipline: '',
  });
  const [sortOrder, setSortOrder] = useState('');

  React.useEffect(() => {
    if (opportunities?.length > 0) {
      console.log('Sample opportunity data:', {
        firstOpportunity: opportunities[0],
        eligibility: opportunities[0].eligibility,
        discipline: opportunities[0].discipline
      });
    }
  }, [opportunities]);

  const handleFilterChange = ({ type, value }) => {
    console.log('Filter changed:', { type, value });
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
    if (!opportunities) return [];

    let result = opportunities.filter(opportunity => {
      // Moved the logging to only include defined values
      console.log('Filtering opportunity:', {
        id: opportunity.id,
        eligibilityValues: opportunity.eligibility?.map(e => e.description),
        disciplineValues: opportunity.discipline?.map(d => d.description),
        filterEligibility: filters.eligibility,
        filterDiscipline: filters.discipline
      });

      const stateMatch = !filters.state || opportunity.location === filters.state;

      // Check eligibility
      const eligibilityMatch = filters.eligibility === '' || 
        (opportunity.eligibility && 
          opportunity.eligibility.some(e => e.description.toLowerCase() === filters.eligibility.toLowerCase()));

      // Check discipline
      const disciplineMatch = filters.discipline === '' || 
        (opportunity.discipline && 
          opportunity.discipline.some(d => d.description.toLowerCase() === filters.discipline.toLowerCase()));

      // Check type/attendance mode
      const typeMatch = filters.type === '' || opportunity.attendance_mode === filters.type;

      console.log('Filter matches:', {
        opportunity: opportunity.title,
        stateMatch,
        eligibilityMatch,
        disciplineMatch,
        typeMatch
      }); 

      return stateMatch && eligibilityMatch && typeMatch && disciplineMatch;
    }) || [];

    // Sort by close_date if sort order is specified
    if (sortOrder === 'closing_date') {
      result.sort((a, b) => new Date(a.close_date) - new Date(b.close_date));
    } else if (sortOrder === 'closing_date_reverse') {
      result.sort((a, b) => new Date(b.close_date) - new Date(a.close_date));
    }
  
    return result;
  }, [opportunities, filters, sortOrder]);

  const filtersApplied = Object.values(filters).some(value => value !== '');
  const hasResults = processedOpportunities.length > 0 || !filtersApplied; 

  return (
    <div className="homepage">
      <HeroSection />
      <div className="controls">
        <FilterOption
          onFilterChange={handleFilterChange}
          onSortChange={handleSortChange}
          currentFilters={filters}
          currentSort={sortOrder}
          hasResults={hasResults}
          filtersApplied={filtersApplied}
        />
      </div>
      <div className="opportunities-section">
        <h2 className="opportunities-title">
          Scholarship and Conference Opportunities
        </h2>
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error.message}</div>
        ) : processedOpportunities.length > 0 ? (
          <OpportunityCards opportunities={processedOpportunities} />
        ) : (
          <div className="no-results">
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;