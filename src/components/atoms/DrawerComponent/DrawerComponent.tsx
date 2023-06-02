import React from 'react';
import { IDrawerComponentPropTypes } from './DrawerComponentPropTypes';
import { useDispatch, useSelector } from 'react-redux';
import {
  closeMenu,
  selectUserMenu,
} from 'appRedux/features/userMenu/userMenuSlice';
import { TAppDispatch } from 'appRedux/types';
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Stack,
} from '@chakra-ui/react';
import { useDesktopView } from 'hooks';

const permanentProps = {
  position: 'relative',
  top: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'white',
};

const DrawerComponent: React.FC<IDrawerComponentPropTypes> = ({ children }) => {
  const { showMenu } = useSelector(selectUserMenu);
  const isDesktop = useDesktopView();
  // const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch: TAppDispatch = useDispatch();

  const handleCloseDrawer = () => {
    dispatch(closeMenu());
  };

  if (isDesktop) {
    return (
      <Box sx={permanentProps}>
        <Stack color={'blackAlpha.900'}>{children}</Stack>
      </Box>
    );
  }

  return (
    <Drawer isOpen={showMenu} placement="right" onClose={handleCloseDrawer}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerBody>{children}</DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerComponent;
