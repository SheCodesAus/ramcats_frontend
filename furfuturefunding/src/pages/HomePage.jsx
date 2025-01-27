import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import OpportunityCard from "../components/OpportunityCard";
import useOpportunities from "../hooks/use-opportunities";
// import SortOption from '../components/SortOption';
// import FilterOption from '../components/FilterOption';
// import Footer from '../components/Footer';
// import useDocumentTitle from '../hooks/useDocumentTitle';

const Homepage = () => {
  const { opportunities, isLoading, error } = useOpportunities();
  if (isLoading) {
    return (
      <div>
        <p>Fecthing the data...</p>
      </div>
    );
  }

  if (error) {
    alert(error.message);
  }
  return (
    <div className="homepage">
      <HeroSection />
      {opportunities.map((opportunitiesData, key) => {
        return (
          <OpportunityCard key={key} opportunitiesData={opportunitiesData} />
        );
      })}
    </div>
  );
};
export default Homepage;

// function HomePage() {
//   useDocumentTitle('Home');
//   const [selectedOptions, setSelectedOptions] = useState({});
//   const [sortOrder, setSortOrder] = useState('asc');
//   const handleSortClick = () => {
//     setSortOrder(prevOrder => (prevOrder === 'asc' ? 'desc' : 'asc'));
//   };

//   const filterGroups = [
//     {
//       title: "Cat Type",
//       options: [
//         { value: 'kitten', label: 'Kitten', count: 10 },
//         { value: 'adult', label: 'Adult', count: 15 },
//         { value: 'senior', label: 'Senior', count: 8 },
//         { value: 'chonk', label: 'Chonk', count: 5 }
//       ]
//     },
//     {
//       title: "Cat Breed",
//       options: [
//         { value: 'siamese', label: 'Siamese', count: 7 },
//         { value: 'persian', label: 'Persian', count: 9 },
//         { value: 'mainecoon', label: 'Maine Coon', count: 6 },
//         { value: 'sphynx', label: 'Sphynx', count: 3 }
//       ]
//     }
//   ];

//   const opportunities = [
//     {
//       id: 1,
//       image: "https://example.com/cat1.jpg",
//       name: "Fluffy's Scholarship",
//       description: "A scholarship for aspiring cat lovers who want to pursue veterinary studies.",
//       catType: "kitten",
//       catBreed: "siamese",
//       dateOpened: "2023-05-01",
//       dateClosing: "2023-06-30",
//       fieldOfStudy: "Veterinary BioSciences"
//     },
//     {
//       id: 2,
//       image: "https://example.com/cat2.jpg",
//       name: "Whiskers' Grant",
//       description: "Financial support for students researching feline behavior and psychology.",
//       catType: "adult",
//       catBreed: "persian",
//       dateOpened: "2023-04-15",
//       dateClosing: "2023-07-15",
//       fieldOfStudy: "Psychology"
//     },
//     {
//       id: 3,
//       image: "https://example.com/cat3.jpg",
//       name: "Purrfect Internship",
//       description: "An internship opportunity at a leading cat food company.",
//       catType: "adult",
//       catBreed: "mainecoon",
//       dateOpened: "2023-06-01",
//       dateClosing: "2023-08-31",
//       fieldOfStudy: "Food Science"
//     },
//     {
//       id: 4,
//       image: "https://example.com/cat4.jpg",
//       name: "Meow-nificent Fellowship",
//       description: "A fellowship program for graduate students studying feline genetics.",
//       catType: "senior",
//       catBreed: "sphynx",
//       dateOpened: "2023-09-01",
//       dateClosing: "2024-05-31",
//       fieldOfStudy: "Genetics"
//     },
//     {
//       id: 5,
//       image: "https://example.com/cat5.jpg",
//       name: "Kitty's Research Grant",
//       description: "Funding for research projects related to cat health and welfare.",
//       catType: "adult",
//       catBreed: "bengal",
//       dateOpened: "2023-07-01",
//       dateClosing: "2023-12-31",
//       fieldOfStudy: "Veterinary BioSciences"
//     },
//     {
//       id: 6,
//       image: "https://example.com/cat6.jpg",
//       name: "Feline Volunteer Program",
//       description: "An opportunity to volunteer at a local cat shelter.",
//       catType: "kitten",
//       catBreed: "tabby",
//       dateOpened: "2023-06-15",
//       dateClosing: "2023-09-30",
//       fieldOfStudy: "Animal Science and Management"
//     },
//     {
//       id: 7,
//       image: "https://example.com/cat7.jpg",
//       name: "Purr-fessional Development Workshop",
//       description: "A workshop series for cat enthusiasts to learn about cat care and behavior.",
//       catType: "adult",
//       catBreed: "siamese",
//       dateOpened: "2023-08-01",
//       dateClosing: "2023-11-30",
//       fieldOfStudy: "Zoology"
//     },
//     {
//       id: 8,
//       image: "https://example.com/cat8.jpg",
//       name: "Whisker's Travel Grant",
//       description: "Travel grants for students presenting cat-related research at conferences.",
//       catType: "senior",
//       catBreed: "russian blue",
//       dateOpened: "2023-10-01",
//       dateClosing: "2024-03-31",
//       fieldOfStudy: "Science Communication"
//     },
//     {
//       id: 9,
//       image: "https://example.com/cat9.jpg",
//       name: "Kitty's Entrepreneurship Program",
//       description: "A program to support cat-related business ventures and startups.",
//       catType: "adult",
//       catBreed: "british shorthair",
//       dateOpened: "2023-09-15",
//       dateClosing: "2024-02-28",
//       fieldOfStudy: "Resource Management"
//     },
//     {
//       id: 10,
//       image: "https://example.com/cat10.jpg",
//       name: "Meow-nificent Art Contest",
//       description: "An art contest for cat-themed artwork and illustrations.",
//       catType: "kitten",
//       catBreed: "calico",
//       dateOpened: "2023-11-01",
//       dateClosing: "2024-01-31",
//       fieldOfStudy: "Sustainability Studies"
//     }
//   ];

//   const filteredOpportunities = opportunities
//     .filter(opportunity =>
//       Object.entries(selectedOptions).every(([group, selectedValues]) =>
//         selectedValues.length === 0 ||
//         (group === 'Cat Type' && selectedValues.includes(opportunity.catType)) ||
//         (group === 'Cat Breed' && selectedValues.includes(opportunity.catBreed))
//       )
//     )
//     .sort((a, b) => {
//       const dateA = new Date(a.dateOpened);
//       const dateB = new Date(b.dateOpened);
//       return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
//     });

//   return (
//     <div className="home-page">
//       <HeroSection />
//       <div className="opportunity-section">
//         <div className="controls">
//           <SortOption onSortClick={handleSortClick} />
//           <FilterOption
//             filterGroups={filterGroups}
//             selectedOptions={selectedOptions}
//             setSelectedOptions={setSelectedOptions}
//           />
//         </div>
//         <div className="opportunity-list">
//           {filteredOpportunities.map(opportunity => (
//             <OpportunityCard key={opportunity.id} opportunity={opportunity} />
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }
// export default HomePage;
