import React from 'react';
import { IMainPagePropTypes } from './MainPagePropTypes';
import { Menu } from 'components/features/Menu';
import { Search } from 'components/features/Search';
import { Information } from 'components/features/Information';
import { Modifiers } from 'components/features/Modifiers';
import { HStack, VStack } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { ELayout, selectLayout } from 'appRedux/features/view';
import { CocktailsList } from 'components/features/CocktailsList';
import { selectCocktails } from 'appRedux/features/cocktails';

const MainPage: React.FC<IMainPagePropTypes> = ({}) => {
  const layout = useSelector(selectLayout);
  const cocktails = useSelector(selectCocktails);

  return (
    <main>
      <HStack justifyContent={'space-between'}>
        <VStack>
          <Search />
          <Modifiers />
          {layout === ELayout.LIST ? (
            <CocktailsList list={cocktails} />
          ) : (
            <Information />
          )}
        </VStack>
        <Menu />
      </HStack>
    </main>
  );
};

export default MainPage;
