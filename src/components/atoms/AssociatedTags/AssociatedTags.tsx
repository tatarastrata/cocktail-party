import React from 'react';
import { IAssociatedTagsPropTypes } from './AssociatedTagsPropTypes';
import { HStack, Tag } from '@chakra-ui/react';

const AssociatedTags: React.FC<IAssociatedTagsPropTypes> = ({ list }) => {
  return (
    <HStack wrap="wrap">
      {list.map((tag) => (
        <Tag size="sm" key={tag}>
          {tag}
        </Tag>
      ))}
    </HStack>
  );
};

export default AssociatedTags;
