import React, {useState} from 'react';
import RecipeCard from './RecipeCard';
import SearchBar from './SearchBar';
import FilterSidebar from './FilterSidebar';

const sortOptions = [
  { label: 'Upload Date (Newest)', value: 'newest' },
  { label: 'Upload Date (Oldest)', value: 'oldest' },
  { label: 'Average Rating (Highest)', value: 'highest' },
  { label: 'Average Rating (Lowest)', value: 'lowest' },
];


const RecipeList = ({ recipes }) => {
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const [sortOption, setSortOption] = useState(sortOptions[0].value);

  const handleSort = (option) => {
    setSortOption(option);
    const sortedRecipes = [...recipes];
    switch (option) {
      case 'newest':
        sortedRecipes.sort((a, b) => new Date(b.uploadedOn) - new Date(a.uploadedOn));
        break;
      case 'oldest':
        sortedRecipes.sort((a, b) => new Date(a.uploadedOn) - new Date(b.uploadedOn));
        break;
      case 'highest':
        sortedRecipes.sort((a, b) => b.avgRating - a.avgRating);
        break;
      case 'lowest':
        sortedRecipes.sort((a, b) => a.avgRating - b.avgRating);
        break;
      default:
        break;
    }
    setFilteredRecipes(sortedRecipes);
  };

  return (
    <div>
        <SearchBar
        recipes={recipes}
        setFilteredRecipes={setFilteredRecipes}
        />
        <div className="flex justify-end mb-4">
        <select
          value={sortOption}
          onChange={(e) => handleSort(e.target.value)}
          className="px-4 py-2 rounded-lg mr-3 text-blue-500"
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    <div className="recipe-list container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center text-red-500">Recipe List</h1>
      <div className="flex">
      <FilterSidebar
        recipes={recipes}
        setFilteredRecipes={setFilteredRecipes}
      />
      <div className="flex flex-wrap justify-center">
        {filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.name} recipe={recipe} />
        ))}
      </div>
    </div>
  </div>
  </div>
  );
};

export default RecipeList;


