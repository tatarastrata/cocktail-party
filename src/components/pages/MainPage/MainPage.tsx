import React from 'react';
import { Menu } from 'components/features/Menu';
import { Search } from 'components/features/Search';
import { Information } from 'components/features/Information';
import { Modifiers } from 'components/features/Modifiers';
import { HStack, VStack } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { ELayout, selectLayout } from 'appRedux/features/view';
import { CocktailsList } from 'components/features/CocktailsList';
import { selectCocktailsDetails } from 'appRedux/features/detailsCocktail';

const MainPage: React.FC = () => {
  const layout = useSelector(selectLayout);
  const detailsCocktail = useSelector(selectCocktailsDetails);

  return (
    <main>
      <HStack justifyContent={'space-between'}>
        <VStack>
          {!detailsCocktail && <Search />}
          <Modifiers />
          {layout === ELayout.LIST ? <CocktailsList /> : <Information />}
        </VStack>
        <Menu />
      </HStack>
    </main>
  );
};

export default MainPage;
