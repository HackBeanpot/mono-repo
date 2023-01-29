import React from 'react';
import { JudgingTableProps } from '../../../lib/types';
import JudgingScheduleWelcome from '../judging-schedule-welcome/JudgingScheduleWelcome';
import Row from './row/Row';

const JudgingScheduleJudges: React.FC<JudgingTableProps> = ({colNames, rows}) => {
  return (
    <>
    <JudgingScheduleWelcome schedulePersonType={'Judge'} />;
    <Row row={['hi', 'hi','hi','hi','hi','hi']}/>
    </>

  );
};

export default JudgingScheduleJudges;

// judging table: don't wanna hard code the columns/rows
/**
 * inputs: ###list of col names####, list of rows
 * each row is gonna be like an object: => put each row in a div
 * with all col names as the fields
 * 
 * 
 * for eadch row map: 
 *    
 * Idea: create a component for a cell that takes in contents --> use css
 */