import React from 'react';

import Input from './input';
import Select from './select';

interface AddRecipeFormType {
  menu: string;
  recipe: string;
  quantity: string;
  handleChange(e: React.ChangeEvent<HTMLInputElement>): void;
  handleSelect(e: React.FormEvent<HTMLSelectElement>): void;
  addRecipe(e: React.FormEvent<HTMLInputElement>): void;
  clearBoard(): void;
}

const AddRecipeForm = (props: AddRecipeFormType) => {
  const {
    menu,
    handleChange,
    recipe,
    quantity,
    handleSelect,
    addRecipe,
    clearBoard
  } = props;
  return (
    <form className="form">
      <Input
        label="menu"
        type="input"
        id="menu"
        name="menu"
        onChange={handleChange}
        value={menu}
      />
      <Input
        label="Recipes"
        type="input"
        id="recipe"
        name="recipe"
        onChange={handleChange}
        value={recipe}
      />
      <Input
        label="Quantity"
        type="input"
        id="quantity"
        name="quantity"
        onChange={handleChange}
        value={quantity}
      />
      <Select onChange={handleSelect} />
      <input type="button" value="+ Recipe" onClick={addRecipe} />
      <input type="reset" value="clear all" onClick={clearBoard} />
      <input type="submit" value="keep in book" />
    </form>
  );
};

export default AddRecipeForm;
