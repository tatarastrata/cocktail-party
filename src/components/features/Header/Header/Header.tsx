import React from 'react';
import { IHeaderPropTypes } from './HeaderPropTypes';
import { MenuBadge } from 'components/atoms';
import { Heading } from '@chakra-ui/react';

const Header: React.FC<IHeaderPropTypes> = ({}) => {
  return (
    <header>
      <Heading sx={{ flexGrow: 1 }}>Cocktail Party 🍸</Heading>
      <MenuBadge />
    </header>
  );
};

export default Header;
