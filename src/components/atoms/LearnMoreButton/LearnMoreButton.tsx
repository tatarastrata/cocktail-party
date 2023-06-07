import React from 'react';
import { ILearnMoreButtonPropTypes } from './LearnMoreButtonPropTypes';
import { Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { showDetails } from 'appRedux/features/detailsCocktail';
import { ELayout, setLayout } from 'appRedux/features/view';

const LearnMoreButton: React.FC<ILearnMoreButtonPropTypes> = ({ cocktail }) => {
  const dispatch = useDispatch();

  const handleOpenCocktail = () => {
    dispatch(showDetails(cocktail));
    dispatch(setLayout(ELayout.SINGLE));
  };
  return (
    <Button
      size="sm"
      variant="solid"
      colorScheme={'orange'}
      onClick={handleOpenCocktail}
    >
      Learn more
    </Button>
  );
};

export default LearnMoreButton;
