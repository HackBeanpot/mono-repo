import React from 'react';
import JudgingScheduleWelcome from '../judging-schedule-welcome/JudgingScheduleWelcome';
import {
  JudgingTableSection,
} from './JudgingScheduleJudges.styles';
const JudgingScheduleJudges: React.FC = () => {
  return (
    <>
      <JudgingScheduleWelcome schedulePersonType={'Judge'} />;
      <JudgingTableSection>
      </JudgingTableSection>
    </>
  );
};

export default JudgingScheduleJudges;
