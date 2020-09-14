import React from 'react';

import styles from '../css/screen.module.css';
import { Recipes } from './types';

interface Props {
  menu: String;
  recipes: Recipes[];
  recipe: String;
  unit: String;
  quantity: String;
}

const Screen = (props: Props) => {
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
              <div className={styles['recipes__items--box']}>
                <div>{recipe.recipe}</div>
                <div>{recipe.quantity}</div>
                <div>{recipe.unit}</div>
                <div>{recipe.convert}</div>
                <div>{recipe.unitConvert}</div>
              </div>
            </li>
          );
        })}
        {recipe || quantity ? (
          <div>
            <div className={styles['recipes__items--box']}>
              <div>{recipe}</div>
              <div>{quantity}</div>
              <div>{unit}</div>
            </div>
          </div>
        ) : (
          <li>...add more recipe</li>
        )}
      </ul>
    </div>
  );
};

export default Screen;
