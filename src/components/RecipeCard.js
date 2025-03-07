import React from 'react';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card bg-white shadow-md rounded-lg p-4 w-full md:w-1/2 xl:w-1/3 mb-4 mr-1">
      <img
        src={recipe.imgUrl}
        alt={recipe.name}
        className="w-full h-48 object-cover rounded-lg"
      />
      <h2 className="text-lg font-bold mb-2 text-pink-500">{recipe.name}</h2>
      <p className="text-gray-600 mb-4">By {recipe.chef}</p>
      <div className="flex items-center mb-4">
        <span className="text-yellow-500">
          {recipe.avgRating}{' '}
          <i className="fas fa-star"></i>
        </span>
        <span className="text-gray-600 ml-2">
          ({recipe.totalRatings} ratings)
        </span>
      </div>
      <p className="text-gray-600">{recipe.description}</p>
    </div>
  );
};

export default RecipeCard;
