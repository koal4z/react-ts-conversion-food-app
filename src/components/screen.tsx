import React from 'react';

import styles from '../css/converter.module.css';
interface screenTypes {
  menu: String;
  recipes: Recipes[];
  recipe: String;
  unit: String;
  quantity: String;
}

type Recipes = {
  recipe: string;
  quantity: string;
  unit: string;
};

const Screen = (props: screenTypes) => {
  const { menu, recipes, recipe, unit, quantity } = props;
  return (
    <div className="board">
      <h3>- menu</h3>
      {menu ? <h4>{menu}</h4> : <p>Your Menu</p>}
      <h3>- recipes</h3>
      <ul className="recipes__box">
        {recipes.map((recipe: Recipes, i) => {
          return (
            <li className="recipes__items" key={i}>
              <div>
                <span>{recipe.recipe}</span> <span>{recipe.quantity}</span>{' '}
                <span>{recipe.unit}</span>{' '}
                <div className={styles.converter}>converter</div>
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
  );
};

export default Screen;
