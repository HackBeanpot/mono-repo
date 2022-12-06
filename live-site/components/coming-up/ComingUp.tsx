import React from 'react';
import { ComingUpProps, UpcomingEvent } from '../../lib/types';
import NoUpcoming from './no-upcoming/NoUpcoming';
import Event from './event/Event';
import { H2 } from '../../../shared-ui/style/typography';

// need coming up props because want to check that if it's empty then....
const ComingUpSection: React.FC<ComingUpProps> = ({eventsList}) => {
  // state --> which list of events
  // eventsList is list of list of events grouped in the number
  if (eventsList.length == 0) {
      return (
          <NoUpcoming/>
      );
  } else {
    return (
        <>
        <H2>Coming up...</H2>
        {eventsList.map((event: UpcomingEvent) => (
            <Event eventInfo={event} />
          ))}
        

        </>
    );

  }
  
};

export default ComingUpSection;
