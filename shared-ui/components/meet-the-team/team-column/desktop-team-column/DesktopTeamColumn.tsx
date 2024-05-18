import React from 'react';
import { Person, TeamColumnProps } from '../../../../lib/types';
import SecondaryButton from '../../../secondary-button/SecondaryButton';
import linkedinLogo from  "../../../../components/../images/meet-the-team/linkedin-logo.png";

import {
  StyledTeamColumn,
  StyledHeadshot,
  StyledLinkedIn
} from './DesktopTeamColumn.styles';
import { H4 } from '../../../../style/typography';

const DesktopTeamColumn: React.FC<TeamColumnProps> = ({ columnInfo }) => {
  const listOfPictures: Person[][] = columnInfo.listOfPictures; // data for each team
  // testing
  console.log("List of Pictures:", listOfPictures);

  return (
    <StyledTeamColumn>
      <H4 style={{fontSize: '1.2em'}}>{columnInfo.teamLabel}</H4>
      <div>
        {listOfPictures.map((rowPics: Person[], index) => (
          <div key={`desktop-column-${index}`}>
            {rowPics.map((person: Person) => (
              <div key={person.picture}>
                <StyledHeadshot src={person.picture} />
                <StyledLinkedIn
                  href={person.linkedIn}
                  target="_blank"
                >
                  <img src={linkedinLogo} />
                  {person.name}
                </StyledLinkedIn>
              </div>
            ))}
          </div>
        ))}
      </div>
    </StyledTeamColumn>
  );
};

export default DesktopTeamColumn;
