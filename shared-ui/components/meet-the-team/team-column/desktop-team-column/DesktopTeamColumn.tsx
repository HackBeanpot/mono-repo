import React from 'react';
import { Person, TeamColumnProps } from '../../../../lib/types';
import linkedinLogo from '../../../../components/../images/meet-the-team/linkedin-logo.png';

import {
  StyledTeamColumn,
  StyledHeadshot,
  StyledLinkedIn,
  StyledTeamText
} from './DesktopTeamColumn.styles';

const DesktopTeamColumn: React.FC<TeamColumnProps> = ({ columnInfo }) => {
  const listOfPictures: Person[][] = columnInfo.listOfPictures; // data for each team

  return (
    <StyledTeamColumn>
      <StyledTeamText>{columnInfo.teamLabel}</StyledTeamText>
      <div>
        {listOfPictures.map((rowPics: Person[], index) => (
          <div key={`desktop-column-${index}`}>
            {rowPics.map((person: Person) => (
              <div key={person.picture}>
                <StyledHeadshot src={person.picture} />
                <StyledLinkedIn href={person.linkedIn} target="_blank">
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
