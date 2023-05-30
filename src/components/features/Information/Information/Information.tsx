import React from 'react';
import styles from './Information.module.scss';
import { IInformationPropTypes } from './InformationPropTypes';
import { CocktailDetails } from 'components/features/Information/components';
import { Stack } from '@chakra-ui/react';

const Information: React.FC<IInformationPropTypes> = ({}) => {
  return (
    <section className={styles.Information}>
      <Stack>
        <CocktailDetails />
      </Stack>
    </section>
  );
};

export default Information;
