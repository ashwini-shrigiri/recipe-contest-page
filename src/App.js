import React from 'react';
import RecipeList from './components/RecipeList';
import recipes from './data/data';

const App = () => {
  return (
    <div>
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default App;