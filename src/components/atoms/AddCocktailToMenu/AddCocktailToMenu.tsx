import React, { useMemo } from 'react';
import { IAddCocktailToMenuPropTypes } from './AddCocktailToMenuPropTypes';
import { useDispatch, useSelector } from 'react-redux';
import { addCocktail, selectUserMenu } from 'appRedux/features/userMenu';
import { Button } from '@chakra-ui/react';
import { ELayout, selectLayout } from 'appRedux/features/view';

const AddCocktailToMenu: React.FC<IAddCocktailToMenuPropTypes> = ({
  cocktail,
}) => {
  const dispatch = useDispatch();
  const { menu } = useSelector(selectUserMenu);
  const layout = useSelector(selectLayout);

  const isShort = layout === ELayout.LIST;

  const isDisabled: boolean = useMemo(
    () => !!menu.find((menuItem) => menuItem.id === cocktail.id),
    [cocktail.id, menu]
  );

  const handleAddCocktail = () => {
    dispatch(addCocktail(cocktail));
  };

  return (
    <Button
      onClick={handleAddCocktail}
      variant="outline"
      size="sm"
      mt={2}
      isDisabled={isDisabled}
      colorScheme={isDisabled ? 'green' : 'orange'}
    >
      {isShort
        ? isDisabled
          ? '✔'
          : '＋'
        : isDisabled
        ? 'Already there'
        : 'Add to menu'}
    </Button>
  );
};

export default AddCocktailToMenu;
