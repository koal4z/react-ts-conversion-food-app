import React, { useState } from 'react';

import Screen from './screen';
import AddRecipeForm from './addRecipe';
import Dropdown from './dropdown';

import { Recipes, alertType } from './types';

type Props = {
  setIsAlert: ({ message, status }: alertType) => void;
};

const Book = (props: Props) => {
  const { setIsAlert } = props;
  const [menu, setMenu] = useState<string>('');
  const [recipe, setRecipe] = useState<string>('');
  const [quantity, setQuantity] = useState<string>('');
  const [unit, setUnit] = useState<string>('');
  const [recipes, setRecipes] = useState<Recipes[]>([
    {
      recipe: 'flour',
      quantity: '1500',
      unit: 'g',
      unitConvert: '',
      convert: ''
    },
    {
      recipe: 'bread',
      quantity: '1500',
      unit: 'g',
      unitConvert: '',
      convert: ''
    },
    {
      recipe: 'vegetables',
      quantity: '1500',
      unit: 'g',
      unitConvert: '',
      convert: ''
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

  const addRecipe = (e: React.FormEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    if (recipe === '' || quantity === '' || unit === '') {
      setIsAlert({
        message: 'recipe or quantity or unit must have to input.',
        status: true
      });
      return;
    }

    if (!/^[0-9]+/.test(quantity) || parseInt(quantity) <= 0) {
      setIsAlert({
        message: 'quantity must have to add only number or more than 0.',
        status: true
      });
      return;
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
    if (recipes.length !== 0 && unitConvert !== '--select unit--') {
      setRecipes(
        recipes.map((recipe: Recipes) => {
          return {
            ...recipe,
            convert: converter(recipe.unit, unitConvert, recipe.quantity),
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
  if (unitInit === 'g' && unitFinal === 'kg') {
    return (parseInt(val) * 0.001).toFixed(1);
  }

  if (unitInit === 'kg' && unitFinal === 'g') {
    return (parseInt(val) * 1000).toFixed(1);
  }

  return val;
};
