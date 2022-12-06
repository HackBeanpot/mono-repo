import React from 'react';
import { EventProps } from '../../../lib/types';

const Event: React.FC<EventProps> = ({eventInfo}) => {
  return (
      <>{eventInfo}</>

  );
};

export default Event;
