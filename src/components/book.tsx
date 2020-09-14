import React, { useState } from 'react';

import Screen from './screen';
import AddRecipeForm from './addRecipe';
import Dropdown from './dropdown';

import { Recipes } from './types';

const Book = () => {
  const [menu, setMenu] = useState<string>('');
  const [recipe, setRecipe] = useState<string>('');
  const [quantity, setQuantity] = useState<string>('');
  const [unit, setUnit] = useState<string>('');
  const [recipes, setRecipes] = useState<Recipes[]>([
    {
      recipe: 'recipe',
      quantity: 'quantity',
      unit: 'kg',
      unitConvert: '1000',
      convert: '1000'
    }
  ]);

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
    setRecipes([
      ...recipes,
      {
        recipe: recipe,
        quantity: quantity,
        unit: unit,
        unitConvert: '-',
        convert: '-'
      }
    ]);
    setRecipe('');
    setQuantity('');
  };

  const clearBoard = (): void => {
    setMenu('');
    setRecipe('');
    setRecipes([]);
  };

  const selectConvert = (e: React.FormEvent<HTMLSelectElement>): void => {
    e.preventDefault();
    const unitConvert = e.currentTarget.value;
    if (recipes.length !== 0) {
      setRecipes(
        recipes.map((recipe: Recipes) => {
          return {
            ...recipe,
            convert: converter(unit, unitConvert, recipe.quantity),
            unitConvert: unitConvert
          };
        })
      );
    }
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
      <Dropdown setConvert={selectConvert} />
    </div>
  );
};

export default Book;

const converter = (unitInit: string, unitFinal: string, val: string): string => {
  if (unitInit === unitFinal) {
    return val;
  }

  if (unitInit === 'g') {
    if (unitFinal === 'kg') {
      return (parseInt(val, 10) / 1000).toFixed(2);
    }
  }

  if (unitInit === 'kg') {
    if (unitFinal === 'g') {
      return (parseInt(val, 10) * 1000).toFixed(2);
    }
  }

  return val;
};
