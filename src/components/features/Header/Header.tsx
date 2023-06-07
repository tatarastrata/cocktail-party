import React from 'react';
import { MenuBadge } from 'components/atoms';
import { HStack, Heading } from '@chakra-ui/react';
import { ViewSwitch } from './components';
import { useViewport } from 'hooks';

const Header: React.FC = ({}) => {
  const { isMobile } = useViewport();
  return (
    <header>
      <HStack>
        <Heading size={isMobile ? 'xs' : 'md'} variant={isMobile ? 'h4' : 'h3'}>
          Cocktail Party 🍸
        </Heading>
        <ViewSwitch />
        <MenuBadge />
      </HStack>
    </header>
  );
};

export default Header;
