import React from 'react';
import { IFilterAccordionPropTypes } from './FilterAccordionPropTypes';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Checkbox,
  Heading,
  Stack,
} from '@chakra-ui/react';

const FilterAccordion: React.FC<IFilterAccordionPropTypes> = ({
  filterOptions,
  filterName,
}) => {
  return (
    <Accordion allowToggle borderWidth={0}>
      <AccordionItem>
        <AccordionButton>
          <Heading
            as="h5"
            size="sm"
            alignContent={'start'}
            sx={{ textTransform: 'capitalize' }}
          >
            {filterName}
          </Heading>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <Stack spacing={1}>
            {filterOptions.map((filter) => (
              <Checkbox size="sm" name={filterName} key={filter}>
                {filter}
              </Checkbox>
            ))}
          </Stack>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default FilterAccordion;
