import React from 'react';
import { StyledSecondaryDropdown } from './SecondaryDropdown.styles';
import { DropdownProps } from '../../lib/types';

const SecondaryDropdown: React.FC<DropdownProps> = ({ options }) => {
  return (
    <StyledSecondaryDropdown>{options}</StyledSecondaryDropdown>
  );
};

export default SecondaryDropdown;
