/* eslint-disable react/prop-types */
import React, { useState } from 'react';
function SearchBar({ onSearch }) {
  const [city, setCity] = useState('');
  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(city);
  };
  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search city"
        value={city}
        onChange={(event) => setCity(event.target.value)}
        className="block w-full p-2 border rounded"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Search
      </button>
    </form>
  );
}
export default SearchBar;