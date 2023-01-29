import React from 'react';
import { CellProps } from '../../../../lib/types';
import { StyledCell } from './Cell.styled';

const Cell: React.FC<CellProps> = ({content}) => {
  return <StyledCell>{content}</StyledCell>;
};

export default Cell;