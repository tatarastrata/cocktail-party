import React from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';

const MenuFooter: React.FC = ({}) => {
  return (
    <ButtonGroup w="100%">
      <Button w="100%">Export</Button>
      <Button w="100%">Share</Button>
    </ButtonGroup>
  );
};

export default MenuFooter;
