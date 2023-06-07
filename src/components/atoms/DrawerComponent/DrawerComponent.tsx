import React from 'react';
import { IDrawerComponentPropTypes } from './DrawerComponentPropTypes';
import { useDispatch, useSelector } from 'react-redux';
import {
  closeMenu,
  selectUserMenu,
} from 'appRedux/features/userMenu/userMenuSlice';
import { TAppDispatch } from 'appRedux/types';
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/react';

const DrawerComponent: React.FC<IDrawerComponentPropTypes> = ({
  title,
  footer,
  children,
}) => {
  const { showMenu } = useSelector(selectUserMenu);

  const dispatch: TAppDispatch = useDispatch();

  const handleCloseDrawer = () => {
    dispatch(closeMenu());
  };

  return (
    <Drawer isOpen={showMenu} placement="right" onClose={handleCloseDrawer}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader>{title}</DrawerHeader>
        <DrawerBody>{children}</DrawerBody>
        <DrawerFooter w="100%" display="none">
          {footer}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerComponent;
