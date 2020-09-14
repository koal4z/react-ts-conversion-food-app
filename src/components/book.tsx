import React, { useState } from 'react';

import Screen from './screen';
import AddRecipeForm from './addRecipe';
import Dropdown from './dropdown';

type Recipes = {
  recipe: string;
  quantity: string;
  unit: string;
};

const Book = () => {
  const [menu, setMenu] = useState<string>('');
  const [recipe, setRecipe] = useState<string>('');
  const [quantity, setQuantity] = useState<string>('');
  const [unit, setUnit] = useState<string>('');
  const [recipes, setRecipes] = useState<Recipes[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const input = e.target.value;
    const name = e.target.name;

    if (name === 'menu') {
      setMenu(input);
    } else if (name === 'recipe') {
      setRecipe(input);
    } else if (name === 'quantity') {
      setQuantity(input);
    }
  };

  const handleSelect = (e: React.FormEvent<HTMLSelectElement>): void => {
    const option = e.currentTarget.value;
    const name = e.currentTarget.name;
    if (name === 'unit') {
      setUnit(option);
    }
  };

  const addRecipe = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault();
    if (recipe === '' || quantity === '' || unit === '') {
      return alert('recipe or quantity or unit must have to input.');
    }

    if (!/^[0-9]+/.test(quantity) || parseInt(quantity) <= 0) {
      return alert('quantity must have to add only number or more than 0.');
    }
    setRecipes([...recipes, { recipe: recipe, quantity: quantity, unit: unit }]);
    setRecipe('');
    setQuantity('');
  };

  const clearBoard = (): void => {
    setMenu('');
    setRecipe('');
    setRecipes([]);
  };

  return (
    <div className="book">
      <AddRecipeForm
        menu={menu}
        recipe={recipe}
        quantity={quantity}
        handleChange={handleChange}
        handleSelect={handleSelect}
        addRecipe={addRecipe}
        clearBoard={clearBoard}
      />
      <Screen
        menu={menu}
        recipe={recipe}
        recipes={recipes}
        unit={unit}
        quantity={quantity}
      />
      <Dropdown />
    </div>
  );
};

export default Book;
