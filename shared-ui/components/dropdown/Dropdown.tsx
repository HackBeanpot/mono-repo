import React from 'react';
import { StyledDropdown } from './Dropdown.styles';
import { DropdownProps } from '../../lib/types';

const Dropdown: React.FC<DropdownProps> = ({options}) => {
  return (
    <StyledDropdown id="position-filter">
      {options.map((curOption: string) => (
        <option value={curOption}>{curOption}</option>
      ))}
    </StyledDropdown>
  );
};

export default Dropdown;
