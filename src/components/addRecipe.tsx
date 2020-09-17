import React from 'react';

import Input from './input';
import Select from './select';

import styles from '../css/addRecipe.module.css';
import { MDBBtn, MDBBtnGroup, MDBIcon } from 'mdbreact';

type Props = {
  menu: string;
  recipe: string;
  quantity: string;
  handleChange(e: React.ChangeEvent<HTMLInputElement>): void;
  handleSelect(e: React.FormEvent<HTMLSelectElement>): void;
  addRecipe(e: React.FormEvent<HTMLButtonElement>): void;
  clearBoard(): void;
};

const AddRecipeForm = (props: Props) => {
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
    <form className={styles.form}>
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
      <div className={styles.selector__box}>
        <Select onChange={handleSelect} />
      </div>

      <MDBBtnGroup
        size="lg"
        className="h-100 d-flex flex-column align-items-start"
        vertical
      >
        <MDBBtn
          type="button"
          className="flex-grow-0"
          color="purple"
          onClick={addRecipe}
        >
          <MDBIcon icon="plus" className="mr-1" /> Recipe
        </MDBBtn>
        <MDBBtn type="submit" className="flex-grow-0" color="purple">
          keep in book
        </MDBBtn>
        <MDBBtn
          type="reset"
          className="mt-auto flex-grow-0"
          color="danger"
          onClick={clearBoard}
        >
          clear all
        </MDBBtn>
      </MDBBtnGroup>
    </form>
  );
};

export default AddRecipeForm;
