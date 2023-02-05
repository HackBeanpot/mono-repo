import React from 'react';
import { JudgingTableProps } from '../../../lib/types';
import JudgingScheduleWelcome from '../judging-schedule-welcome/JudgingScheduleWelcome';
import { StyledTable, JudgingTableSection, Styledtd } from './JudgingScheduleJudges.styles';
const JudgingScheduleJudges: React.FC<JudgingTableProps> = ({ headers, rows }) => {
  return (
    <>
    <JudgingScheduleWelcome schedulePersonType={'Judge'} />;
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
    </>

  );
};

export default JudgingScheduleJudges;