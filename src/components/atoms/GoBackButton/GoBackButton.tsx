import React from 'react';
import { Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { ELayout, setLayout } from 'appRedux/features/view';
import { hideDetails } from 'appRedux/features/detailsCocktail';

const GoBackButton: React.FC = () => {
  const dispatch = useDispatch();

  const handleGoBack = () => {
    dispatch(setLayout(ELayout.LIST));
    dispatch(hideDetails());
  };

  return (
    <Button
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
