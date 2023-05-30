import React from 'react';
import { IDrawerComponentPropTypes } from './DrawerComponentPropTypes';
import { useDispatch, useSelector } from 'react-redux';
import {
  closeMenu,
  selectUserMenu,
} from 'appRedux/features/userMenu/userMenuSlice';
import { TAppDispatch } from 'appRedux/types';
import { Drawer } from '@chakra-ui/react';

const DrawerComponent: React.FC<IDrawerComponentPropTypes> = ({ children }) => {
  const { showMenu } = useSelector(selectUserMenu);
  const dispatch: TAppDispatch = useDispatch();

  const handleCloseDrawer = () => {
    dispatch(closeMenu());
  };

  return (
    <Drawer isOpen={showMenu} onClose={handleCloseDrawer}>
      {children}
    </Drawer>
  );
};

export default DrawerComponent;
