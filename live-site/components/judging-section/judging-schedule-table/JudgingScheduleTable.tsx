import React from 'react';
import { JudgingTableProps } from '../../../lib/types';
import { StyledTable, JudgingTableSection, Styledtd } from './JudgingScheduleTable.styles';
const JudgingScheduleTable: React.FC<JudgingTableProps> = ({ headers, rows }) => {
  return (
    <JudgingTableSection>
    <StyledTable>
      <tr>
    {headers.map((header) => (
      <Styledtd>{header}</Styledtd>
    ))}
    </tr>
    {rows.map((row: string[]) => (
      <tr>
      {row.map((cell: string) => (
        <Styledtd>{cell}</Styledtd>
      ))}
      </tr>
    ))}
    </StyledTable>
    </JudgingTableSection>

  );
};

export default JudgingScheduleTable;