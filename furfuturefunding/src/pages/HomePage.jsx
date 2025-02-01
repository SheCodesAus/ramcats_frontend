import React, { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import OpportunityCard from "../components/OpportunityCard";
import useOpportunities from "../hooks/use-opportunities";
import FilterOption from '../components/FilterOption';
import Footer from '../components/Footer';

const Homepage = () => {
  const { opportunities, isLoading, error } = useOpportunities();
  const [filters, setFilters] = useState({
    state: '',
    eligibility: [],
    discipline: []
  });
  const [sortOrder, setSortOrder] = useState('date');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handleFilterChange = ({ type, value }) => {
    setFilters(prev => ({
      ...prev,
      [type]: value
    }));
    setCurrentPage(1);
  };

  const handleSortChange = (value) => {
    setSortOrder(value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const processedOpportunities = React.useMemo(() => {
    let result = opportunities?.filter(opportunity => {
      const stateMatch = !filters.state || 
        (opportunity.location && opportunity.location.includes(filters.state));
        
      const eligibilityMatch = filters.eligibility.length === 0 || 
        (opportunity.eligibility && opportunity.eligibility.some(e => 
          filters.eligibility.includes(e.value)));
          
      const disciplineMatch = filters.discipline.length === 0 || 
        (opportunity.discipline && opportunity.discipline.some(d => 
          filters.discipline.includes(d.value)));

      return stateMatch && eligibilityMatch && disciplineMatch;
    }) || [];

    if (sortOrder) {
      result.sort((a, b) => {
        if (sortOrder === 'date') {
          const dateA = new Date(a.close_date);
          const dateB = new Date(b.close_date);
          return dateA - dateB;
        } else {
          return a.title.localeCompare(b.title);
        }
      });
    }

    return result;
  }, [opportunities, filters, sortOrder]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = processedOpportunities?.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil((processedOpportunities?.length || 0) / itemsPerPage);

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
          ) : currentItems?.length > 0 ? (
            currentItems.map((opportunity) => (
              <OpportunityCard
                key={opportunity.id}
                opportunity={opportunity}
              />
            ))
          ) : (
            <div className="no-results">
              <p>No opportunities match your selected filters.</p>
            </div>
          )}
        </div>
        {totalPages > 1 && (
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={currentPage === index + 1 ? 'active' : ''}
                disabled={currentPage === index + 1}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;