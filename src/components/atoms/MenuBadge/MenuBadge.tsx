import React from 'react';
import { IMenuBadgePropTypes } from './MenuBadgePropTypes';
import { useDispatch, useSelector } from 'react-redux';
import { TAppDispatch } from 'appRedux/types';
import {
  openMenu,
  selectUserMenu,
} from 'appRedux/features/userMenu/userMenuSlice';
import { Button, Text, Badge } from '@chakra-ui/react';

const MenuBadge: React.FC<IMenuBadgePropTypes> = ({}) => {
  const dispatch: TAppDispatch = useDispatch();
  const { menu } = useSelector(selectUserMenu);

  const handleOpenMenu = () => {
    dispatch(openMenu());
  };

  return (
    <Button onClick={handleOpenMenu} variant="text">
      <Badge>
        {menu.length}
        <Text>🎉</Text>
      </Badge>
    </Button>
  );
};

export default MenuBadge;
