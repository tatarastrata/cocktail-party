import React from 'react';
import { ITablePropTypes } from './TablePropTypes';
import {
  Table as ChakraTable,
  TableContainer,
  Tbody,
  Td,
  Tr,
} from '@chakra-ui/react';

const Table: React.FC<ITablePropTypes> = ({ data }) => {
  return (
    <TableContainer>
      <ChakraTable size="s" maxWidth="50%" variant={'simple'}>
        <Tbody>
          {data.map((dataItem) => (
            <Tr key={dataItem.key}>
              <Td>{dataItem.key}</Td>
              <Td isNumeric>{dataItem.value}</Td>
            </Tr>
          ))}
        </Tbody>
      </ChakraTable>
    </TableContainer>
  );
};

export default Table;
