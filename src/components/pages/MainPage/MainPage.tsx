import React from 'react';
import { IMainPagePropTypes } from './MainPagePropTypes';
// import { Modifiers } from '../../features/Modifiers';
import { Search } from '../../features/Search';
import { Information } from '../../features/Information';
import { Menu } from '../../features/Menu';

const MainPage: React.FC<IMainPagePropTypes> = ({}) => {
  return (
    <main>
      <Search />
      {/* <Modifiers /> */}
      <Information />
      <Menu />
    </main>
  );
};

export default MainPage;
