import React from 'react';
import { FormControl, FormLabel, Switch } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { ELayout, selectLayout, setLayout } from 'appRedux/features/view';

const ViewSwitchLayout: React.FC = ({}) => {
  const layout = useSelector(selectLayout);
  const dispatch = useDispatch();

  const handleSwitchLayout = () => {
    dispatch(
      setLayout(layout === ELayout.LIST ? ELayout.SINGLE : ELayout.LIST)
    );
  };

  return (
    <FormControl display="flex" alignItems="center">
      <FormLabel htmlFor="layout" mb="0">
        {layout}
      </FormLabel>
      <Switch
        id="layout"
        onChange={handleSwitchLayout}
        isChecked={layout === ELayout.SINGLE}
      />
    </FormControl>
  );
};

export default ViewSwitchLayout;
