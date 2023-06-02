import React from 'react';
import styles from './MenuCocktails.module.scss';
import { IMenuCocktailsPropTypes } from './MenuCocktailsPropTypes';

const MenuCocktails: React.FC<IMenuCocktailsPropTypes> = ({}) => {
  return <div className={styles.MenuCocktails}>MenuCocktails</div>;
};

export default MenuCocktails;
