import React from 'react';
import { SearchCocktailInput } from './components';
import { Formik, Form as FormikForm } from 'formik';
import { ISearchFormCocktailValues } from './SearchTypes';
import { VStack } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { fetchCocktailsWithFilters } from 'appRedux/features/cocktails';
import { TAppDispatch } from 'appRedux/types';

const initialValues: ISearchFormCocktailValues = {
  name: '',
  ingredients: [],
  categories: [],
  alcohol: undefined,
};

const Search: React.FC = () => {
  const dispatch: TAppDispatch = useDispatch();
  // const [searchType, setSearchType] = useState<ESearchType>(ESearchType.NAMED);

  const handleSubmit = ({
    ingredients,
    name,
    categories,
  }: ISearchFormCocktailValues) => {
    dispatch(
      fetchCocktailsWithFilters({
        ingredients,
        categories,
        searchInput: name,
      })
    );
  };

  // const handleChangeSearchType = () => {
  //   setSearchType(
  //     searchType === ESearchType.NAMED
  //       ? ESearchType.FILTERED
  //       : ESearchType.NAMED
  //   );
  // };

  return (
    <section>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {() => (
          <FormikForm>
            <VStack align={'start'}>
              {/* <SwitchSearchType
                label={
                  searchType === ESearchType.FILTERED
                    ? 'Named search'
                    : 'Filtered search'
                }
                onChange={handleChangeSearchType}
                isChecked={searchType === ESearchType.FILTERED}
              /> */}
              {/* {searchType === ESearchType.NAMED && <SearchCocktailInput />}
              {searchType === ESearchType.FILTERED && (
                <>
                  <Filters />
                  <SearchButton handleClick={handleSubmit} />
                </>
              )} */}
              <SearchCocktailInput />
            </VStack>
          </FormikForm>
        )}
      </Formik>
    </section>
  );
};

export default Search;
