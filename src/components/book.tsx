import React, { useState } from 'react';

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
      <form className="form">
        <label htmlFor="menu">Menu</label>
        <input
          type="input"
          id="menu"
          name="menu"
          onChange={handleChange}
          value={menu}
        />
        <label htmlFor="recipe">Recipes</label>
        <input
          type="input"
          id="recipe"
          name="recipe"
          onChange={handleChange}
          value={recipe}
        />
        <label htmlFor="quantity">Quantity</label>
        <input
          type="input"
          id="quantity"
          name="quantity"
          onChange={handleChange}
          value={quantity}
        />
        <label htmlFor="unit">Unit</label>
        <select id="unit" name="unit" onChange={handleSelect}>
          <option value="">--select unit--</option>
          <option value="g">g</option>
          <option value="kg">kg</option>
        </select>
        <input type="button" value="+ Recipe" onClick={addRecipe} />
        <input type="reset" value="clear all" onClick={clearBoard} />
        <input type="submit" value="keep in book" />
      </form>

      <div className="board">
        <h3>- menu</h3>
        {menu ? <h4>{menu}</h4> : <p>Your Menu</p>}
        <h3>- recipes</h3>
        <ul className="recipes__box">
          {recipes.map((recipe, i) => {
            return (
              <li className="recipes__items" key={i}>
                <div>
                  <span>{recipe.recipe}</span> <span>{recipe.quantity}</span>{' '}
                  <span>{recipe.unit}</span> <span>converter</span>
                </div>
              </li>
            );
          })}
          {recipe || quantity ? (
            <div>
              <span>{recipe}</span> <span>{quantity}</span> <span>{unit}</span>
            </div>
          ) : (
            <li>...add more recipe</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Book;
