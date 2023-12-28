import React, { useState } from 'react';

// eslint-disable-next-line react/prop-types
const Search = ({ setSearchQuery }) => {
  const [localSearchQuery, setLocalSearchQuery] = useState('');

  // eslint-disable-next-line no-unused-vars
  const handleSearch = () => {
    setSearchQuery(localSearchQuery);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder="Search by name"
        value={localSearchQuery}
        onChange={(e) => {
          setLocalSearchQuery(e.target.value);
          setSearchQuery(e.target.value);
        }}
      />
    </div>
  );
};

export default Search;
