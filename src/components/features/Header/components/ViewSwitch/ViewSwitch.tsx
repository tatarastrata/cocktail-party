import React from 'react';
import { IViewSwitchPropTypes } from './ViewSwitchPropTypes';
// import ViewSwitchLayout from '../ViewSwitchLayout';
import ViewSwitchTheme from '../ViewSwitchTheme';

const ViewSwitch: React.FC<IViewSwitchPropTypes> = ({}) => {
  return (
    <div>
      {/* <ViewSwitchLayout /> */}
      <ViewSwitchTheme />
    </div>
  );
};

export default ViewSwitch;
