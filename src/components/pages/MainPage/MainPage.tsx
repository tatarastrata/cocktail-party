import React from 'react';
import { IMainPagePropTypes } from './MainPagePropTypes';
import { Menu } from 'components/features/Menu';
import { Search } from 'components/features/Search';
import { Information } from 'components/features/Information';
import { Modifiers } from 'components/features/Modifiers';

const MainPage: React.FC<IMainPagePropTypes> = ({}) => {
  return (
    <main>
      <Search />
      <Modifiers />
      <Information />
      <Menu />
    </main>
  );
};

export default MainPage;
