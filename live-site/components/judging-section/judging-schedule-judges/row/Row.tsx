import React from 'react';
import { RowProps } from '../../../../lib/types';
import Cell from '../cell/Cell';
import { StyledRow } from './Row.styles';

const Row: React.FC<RowProps> = ({row}) => {
  return (
    <StyledRow>
    {row.map((cellContent) => (
      <Cell content={cellContent} />
    ))}
    </StyledRow>
  );
  
  };
  
export default Row;