import React from 'react';
import { IFallbackUIPropTypes } from './FallbackUIPropTypes';
import styles from './FallbackUI.module.scss';

const FallbackUI: React.FC<IFallbackUIPropTypes> = ({}) => {
  return <div className={styles.FallbackUI}>FallbackUI</div>;
};

export default FallbackUI;
