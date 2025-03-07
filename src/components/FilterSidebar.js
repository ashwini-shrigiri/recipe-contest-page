import React, { useState } from 'react';

const FilterSidebar = ({ recipes, setFilteredRecipes }) => {
  const [filters, setFilters] = useState({
    attributes: {
      contestWinner: false,
      featured: false,
      testKitchenApproved: false,
    },
    mealType: '',
    dishType: '',
  });

  const handleAttributeFilter = (attribute, checked) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      attributes: { ...prevFilters.attributes, [attribute]: checked },
    }));
  };

  const handleMealTypeFilter = (mealType) => {
    setFilters((prevFilters) => ({ ...prevFilters, mealType }));
  };

  const handleDishTypeFilter = (dishType) => {
    setFilters((prevFilters) => ({ ...prevFilters, dishType }));
  };

  const applyFilters = () => {
    const filteredRecipes = recipes.filter((recipe) => {
      if (!recipe) {
        console.error('Recipe object is undefined');
        return false;
      }
      const attributeMatches =
        (!filters.attributes.contestWinner || recipe?.attributes?.contestWinner) &&
        (!filters.attributes.featured || recipe?.attributes?.featured) &&
        (!filters.attributes.testKitchenApproved || recipe?.attributes?.testKitchenApproved);
  
      const mealTypeMatches = filters.mealType === '' || recipe.mealType === filters.mealType;
      const dishTypeMatches = filters.dishType === '' || recipe.dishType === filters.dishType;
  
      return attributeMatches && mealTypeMatches && dishTypeMatches;
    });
    setFilteredRecipes(filteredRecipes);
  };
  
  const clearFilters = () => {
    setFilters({
      contestWinner: false,
      featured: false,
      testKitchenApproved: false,
      mealType: '',
      dishType: '',
    });
    setFilteredRecipes(recipes);
  };

  return (
    <div className="filter-sidebar bg-white p-4 rounded-lg lg:w-1/4 xl:w-1/5">
      <h2 className="text-lg font-bold mb-4">Filters</h2>

      <div className="attribute-filters mb-4">
        <h3 className="text-sm font-bold mb-2">Attributes</h3>
        <div className="flex items-center mb-2">
          <input
            type="checkbox"
            id="contest-winner"
            checked={filters.attributes.contestWinner}
            onChange={(e) => handleAttributeFilter('contestWinner', e.target.checked)}
          />
          <label className="text-sm ml-2" htmlFor="contest-winner">Contest Winner</label>
        </div>
        <div className="flex items-center mb-2">
          <input
            type="checkbox"
            id="featured"
            checked={filters.attributes.featured}
            onChange={(e) => handleAttributeFilter('featured', e.target.checked)}
          />
          <label className="text-sm ml-2" htmlFor="featured">Featured</label>
        </div>
        <div className="flex items-center mb-2">
          <input
            type="checkbox"
            id="test-kitchen-approved"
            checked={filters.attributes.testKitchenApproved}
            onChange={(e) => handleAttributeFilter('testKitchenApproved', e.target.checked)}
          />
          <label className="text-sm ml-2" htmlFor="test-kitchen-approved">Test Kitchen Approved</label>
        </div>
      </div>

      <div className="meal-type-filters mb-4">
        <h3 className="text-sm font-bold mb-2">Meal Type</h3>
        <select
          value={filters.mealType}
          onChange={(e) => handleMealTypeFilter(e.target.value)}
          className="w-full p-2 rounded-lg"
        >
          <option value="">All</option>
          <option value="Dinner">Dinner</option>
          <option value="Lunch">Lunch</option>
          <option value="Dessert">Dessert</option>
          <option value="Breakfast">Breakfast</option>
        </select>
      </div>

      <div className="dish-type-filters mb-4">
        <h3 className="text-sm font-bold mb-2">Dish Type</h3>
        <select
          value={filters.dishType}
          onChange={(e) => handleDishTypeFilter(e.target.value)}
          className="w-full p-2 rounded-lg"
        >
          <option value="">All</option>
          <option value="Curry">Curry</option>
          <option value="Pizza">Pizza</option>
          <option value="Seafood">Seafood</option>
          <option value="Soup">Soup</option>
          <option value="Mexican">Mexican</option>
          <option value="Smoothie">Smoothie</option>
        </select>
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
        onClick={applyFilters}
      >
        Apply Filters
      </button>
      <button
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg mt-4"
        onClick={clearFilters}
      >
        Clear All Filters
      </button>
    </div>
  );
};

export default FilterSidebar;
