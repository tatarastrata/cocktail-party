import React from 'react';
import { MenuBadge } from 'components/atoms';
import { HStack, Heading } from '@chakra-ui/react';
import { ViewSwitch } from './components';
import { useDesktopView } from 'hooks';

const Header: React.FC = ({}) => {
  const isDesktop = useDesktopView();
  return (
    <header>
      <HStack>
        <Heading size={isDesktop ? 'md' : 'sm'} variant={'h3'}>
          Cocktail Party 🍸
        </Heading>
        <ViewSwitch />
        {!isDesktop && <MenuBadge />}
      </HStack>
    </header>
  );
};

export default Header;
