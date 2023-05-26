import React from 'react';
import styles from './MainPage.module.scss';
import { IMainPagePropTypes } from './MainPagePropTypes';

const MainPage: React.FC<IMainPagePropTypes> = ({}) => {
  return <div className={styles.MainPage}>MainPage</div>;
};

export default MainPage;
