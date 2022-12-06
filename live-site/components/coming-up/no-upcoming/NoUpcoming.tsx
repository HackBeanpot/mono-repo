import React from 'react';
import { NoUpcomingContainer, StyledH2 } from './NoUpcoming.styles';

// need coming up props because want to check that if it's empty then....
const NoUpcoming: React.FC = () => {
  // state --> which list of events
  // eventsList is list of list of events grouped in the number

  return (
    <NoUpcomingContainer>
      <StyledH2>No upcoming events!</StyledH2>
    </NoUpcomingContainer>
  );
};

export default NoUpcoming;
