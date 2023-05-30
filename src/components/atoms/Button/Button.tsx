import React from 'react';
import styles from './Button.module.scss';
import { IButtonPropTypes } from './ButtonPropTypes';

const Button: React.FC<IButtonPropTypes> = ({}) => {
  return <div className={styles.Button}></div>;
};

export default Button;
