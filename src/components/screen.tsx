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
    <div className={styles.board}>
      <h3 className={styles.board__header}>menu</h3>
      {menu ? (
        <p className={styles.board__show_text}>{menu}</p>
      ) : (
        <p className={styles.board__show_text}>Your Menu</p>
      )}
      <h3 className={styles.board__header}>recipes</h3>
      <ul className={styles.recipes__box}>
        <li className={styles.recipes__items}>
          <ul className={styles['recipes__items--box']}>
            <li className={styles['recipes__items--head']}>Recipe</li>
            <li className={styles['recipes__items--head']}>Qty</li>
            <li className={styles['recipes__items--head']}>Unit</li>
            <li className={styles['recipes__items--head']}>Qty</li>
            <li className={styles['recipes__items--head']}>Unit</li>
          </ul>
        </li>
        {recipes.map((recipe: Recipes, i) => {
          return (
            <li className={styles.recipes__items} key={i}>
              <ul
                className={`${styles['recipes__items--box']} ${
                  i % 2 === 0 ? styles['white-background'] : ''
                }`}
              >
                <li className={styles['recipes__items--items']}>{recipe.recipe}</li>
                <li className={styles['recipes__items--items']}>
                  {recipe.quantity}
                </li>
                <li className={styles['recipes__items--items']}>{recipe.unit}</li>
                <li className={styles['recipes__items--items']}>{recipe.convert}</li>
                <li className={styles['recipes__items--items']}>
                  {recipe.unitConvert}
                </li>
              </ul>
            </li>
          );
        })}
        {recipe || quantity ? (
          <ul className={styles['recipes__items--box']}>
            <li className={styles['recipes__items--items']}>{recipe || '-'}</li>
            <li className={styles['recipes__items--items']}>{quantity || '-'}</li>
            <li className={styles['recipes__items--items']}>{unit || '-'}</li>
            <li className={styles['recipes__items--items']}>-</li>
            <li className={styles['recipes__items--items']}>-</li>
          </ul>
        ) : (
          <li className={styles['recipes__items--last']}>...add more recipe</li>
        )}
      </ul>
    </div>
  );
};

export default Screen;
