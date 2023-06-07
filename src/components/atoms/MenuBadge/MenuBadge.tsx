import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TAppDispatch } from 'appRedux/types';
import {
  openMenu,
  selectUserMenu,
} from 'appRedux/features/userMenu/userMenuSlice';
import { Badge, Text, Button } from '@chakra-ui/react';
import { colors } from 'styles/colors';

const MenuBadge: React.FC = ({}) => {
  const dispatch: TAppDispatch = useDispatch();
  const { menu } = useSelector(selectUserMenu);

  const handleOpenMenu = () => {
    dispatch(openMenu());
  };

  return (
    <Button
      aria-label="Open the menu"
      onClick={handleOpenMenu}
      variant="ghost"
      position="relative"
      isDisabled={menu.length === 0}
      sx={{
        borderSizing: 'content-box',
      }}
      p={'1rem'}
      _hover={{
        '& .chakra-badge': {
          opacity: 1,
        },
      }}
    >
      <Text sx={{ fontSize: '30px', color: colors.white }}>🎉</Text>
      {!!menu.length && (
        <Badge
          position={'absolute'}
          bg={colors.orange[400]}
          borderRadius={'2.2rem'}
          p={'0.2rem'}
          w={'1.3rem'}
          sx={{
            color: colors.white,
            opacity: 0.8,
            fontSize: '0.8rem',
            top: '0',
            right: '0',
          }}
        >
          {menu.length}
        </Badge>
      )}
    </Button>
  );
};

export default MenuBadge;
