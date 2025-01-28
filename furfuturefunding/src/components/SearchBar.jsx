import React, { useState } from 'react';

function SearchBar() {
  const [fieldOfStudy, setFieldOfStudy] = useState('');
  const [state, setState] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality here
    console.log('Searching for:', fieldOfStudy, 'in', state);
  };

  return (
    <form onSubmit={handleSearch} className="flex bg-white rounded-full overflow-hidden">
      <input
        type="text"
        placeholder="Field of Study"
        value={fieldOfStudy}
        onChange={(e) => setFieldOfStudy(e.target.value)}
        className="p-2 flex-grow text-black"
      />
      <select
        value={state}
        onChange={(e) => setState(e.target.value)}
        className="p-2 text-black"
      >
        <option value="">Field of Study</option>
        [{/* Add state options here */}]
      <option value="Agricultural Science">Agricultural Science</option>
      <option value="Animal Science and Management">Animal Science and Management</option>
      <option value="Astronomy and Astrophysics">Astronomy and Astrophysics</option>
      <option value="Biochemistry">Biochemistry</option>
      <option value="Biodiversity Conservation">Biodiversity Conservation</option>
      <option value="Biological Anthropology">Biological Anthropology</option>
      <option value="Biotechnology">Biotechnology</option>
      <option value="Cell and Developmental Biology">Cell and Developmental Biology</option>
      <option value="Chemistry">Chemistry</option>
      <option value="Climate and Weather">Climate and Weather</option>
      <option value="Computational Biology">Computational Biology</option>
      <option value="Earth Science">Earth Science</option>
      <option value="Ecology and Evolutionary Biology">Ecology and Evolutionary Biology</option>
      <option value="Ecosystem Science">Ecosystem Science</option>
      <option value="Environmental Science">Environmental Science</option>
      <option value="Food Science">Food Science</option>
      <option value="Genetics">Genetics</option>
      <option value="Geography">Geography</option>
      <option value="Geology">Geology</option>
      <option value="Human Biology">Human Biology</option>
      <option value="Human Nutrition">Human Nutrition</option>
      <option value="Human Structure and Function">Human Structure and Function</option>
      <option value="Immunology">Immunology</option>
      <option value="Indigenous Science and Knowledges">Indigenous Science and Knowledges</option>
      <option value="Infection and Immunity">Infection and Immunity</option>
      <option value="Marine Biology">Marine Biology</option>
      <option value="Microbiology">Microbiology</option>
      <option value="Neuroscience">Neuroscience</option>
      <option value="Pathology">Pathology</option>
      <option value="Pharmacology">Pharmacology</option>
      <option value="Physics">Physics</option>
      <option value="Physiology">Physiology</option>
      <option value="Plant Science">Plant Science</option>
      <option value="Psychology">Psychology</option>
      <option value="Quantitative Biology">Quantitative Biology</option>
      <option value="Quantitative Environmental Modelling">Quantitative Environmental Modelling</option>
      <option value="Resource Management">Resource Management</option>
      <option value="Science Communication">Science Communication</option>
      <option value="Spatial Systems">Spatial Systems</option>
      <option value="Sustainability Studies">Sustainability Studies</option>
      <option value="Veterinary BioSciences">Veterinary BioSciences</option>
      <option value="Water Science">Water Science</option>
      <option value="Zoology">Zoology</option>
      </select>
      <button type="submit" className="bg-orange-300 p-2 px-4">
        →
      </button>
    </form>
  );
}

export default SearchBar;