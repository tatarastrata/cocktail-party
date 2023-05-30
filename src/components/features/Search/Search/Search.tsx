import React from 'react';
import { ISearchPropTypes } from './SearchPropTypes';
import styles from './Search.module.scss';
import SearchCocktailInput from '../components/SearchCocktailInput';
import { Stack } from '@chakra-ui/react';

const Search: React.FC<ISearchPropTypes> = ({}) => {
  return (
    <section className={styles.SearchForDrinks}>
      <Stack>
        <SearchCocktailInput />
      </Stack>
    </section>
  );
};

export default Search;
