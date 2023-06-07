import React from 'react';
import { Button, Text } from '@chakra-ui/react';
import { IMenuItemPropTypes } from './MenuItemPropTypes';

const Count = ({ count = 1 }): JSX.Element | null =>
  count > 1 ? <Text ml={'2rem'}>{`x${count}`}</Text> : null;

const MenuItem: React.FC<IMenuItemPropTypes> = ({
  item: { name, count },
  handleClick,
}) => {
  if (!!handleClick) {
    return (
      <Button
        variant="link"
        ml={4}
        size="xs"
        colorScheme="cyan"
        onClick={handleClick}
      >
        {name}
        {<Count count={count} />}
      </Button>
    );
  }

  return (
    <Text size="xs" ml={'1rem'}>
      {name}
      {<Count count={count} />}
    </Text>
  );
};

export default MenuItem;
