import React from 'react';
import { JudgingTableProps } from '../../../lib/types';
import JudgingScheduleWelcome from '../judging-schedule-welcome/JudgingScheduleWelcome';
import { Table, JudgingTableSection } from './JudgingScheduleJudges.styles';
import Row from './row/Row';
// the first row is the column names
const JudgingScheduleJudges: React.FC<JudgingTableProps> = ({ rows }) => {
  return (
    <>
    <JudgingScheduleWelcome schedulePersonType={'Judge'} />;
    <JudgingTableSection>
    <Table>
    {rows.map((row) => (
      <Row row={row} />
    ))}
    </Table>
    </JudgingTableSection>
    </>

  );
};

export default JudgingScheduleJudges;