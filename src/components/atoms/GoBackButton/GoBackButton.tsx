import React from 'react';
import { IGoBackButtonPropTypes } from './GoBackButtonPropTypes';
import { Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { ELayout, setLayout } from 'appRedux/features/view';

const GoBackButton: React.FC<IGoBackButtonPropTypes> = ({}) => {
  const dispatch = useDispatch();

  const handleGoBack = () => {
    dispatch(setLayout(ELayout.LIST));
  };

  return (
    <Button
      // leftIcon={}
      aria-label="Back to list view"
      onClick={handleGoBack}
      variant="ghost"
      size="sm"
      colorScheme="teal"
    >
      ← Go back
    </Button>
  );
};

export default GoBackButton;
