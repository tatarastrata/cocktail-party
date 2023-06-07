import React from 'react';
import { IMenuBlockPropTypes } from './MenuBlockPropTypes';
import { Box, Button, Heading, List, ListItem, Text } from '@chakra-ui/react';

interface IListAcc {
  name: string;
  id: string;
  count: number;
}

const MenuBlock: React.FC<IMenuBlockPropTypes> = ({
  heading,
  list,
  handleClick,
}) => {
  const listAcc: { [key: string]: IListAcc } = {};

  list.forEach((item) => {
    const key = item.name.toLowerCase();
    if (listAcc.hasOwnProperty(key)) {
      listAcc[key].count += 1;
    } else {
      listAcc[key] = {
        name: item.name,
        id: item.id,
        count: 1,
      };
    }
  });

  return (
    <Box>
      <Heading variant="h5">{heading}</Heading>
      <List>
        {Object.values(listAcc)
          .sort((itemA, itemB) => itemA.name.localeCompare(itemB.name))
          .map(({ name, id, count }: IListAcc) => (
            <ListItem key={id}>
              {!!handleClick ? (
                <Button
                  variant="link"
                  ml={4}
                  size="xs"
                  colorScheme="cyan"
                  onClick={() => handleClick(id)}
                >
                  {name}
                  {count > 1 && <Text ml={'2rem'}>{`x${count}`}</Text>}
                </Button>
              ) : (
                <Text size="xs" ml={'1rem'}>
                  {name}
                  {count > 1 && (
                    <Text as="span" ml={'1rem'}>{`x${count}`}</Text>
                  )}
                </Text>
              )}
            </ListItem>
          ))}
      </List>
    </Box>
  );
};

export default MenuBlock;
