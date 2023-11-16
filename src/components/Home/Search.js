import React, { useState } from 'react';

const Search = ({ setSearchQuery }) => {
  const [localSearchQuery, setLocalSearchQuery] = useState('');

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
