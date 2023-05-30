import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TAppDispatch } from 'appRedux/types';
import {
  selectLoading,
  selectError,
} from 'appRedux/features/cocktails/cocktailsSlice';
import { fetchRandomCocktail } from 'appRedux/features/cocktails/cocktailsActions';

const CocktailList: React.FC = () => {
  const dispatch: TAppDispatch = useDispatch();

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchRandomCocktail());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Cocktails</h2>
    </div>
  );
};

export default CocktailList;
