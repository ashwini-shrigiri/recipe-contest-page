import React, { useState } from 'react';

const SearchBar = ({ recipes, setFilteredRecipes }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filteredRecipes = recipes.filter((recipe) => {
      return (
        recipe.name.toLowerCase().includes(term) ||
        recipe.chef.toLowerCase().includes(term) ||
        recipe.description.toLowerCase().includes(term)
      );
    });
    setFilteredRecipes(filteredRecipes);
  };

  return (
    <div className="search-bar mb-4 mx-auto w-1/2 mt-4">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search recipes..."
        className="w-full p-2 pl-10 text-sm text-gray-700 font-bold"
      />
    </div>
  );
};

export default SearchBar;

