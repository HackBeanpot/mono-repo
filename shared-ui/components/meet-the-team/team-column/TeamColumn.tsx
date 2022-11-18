import React, { useState } from 'react';
import { Person, TeamColumnProps } from '../../../lib/types';
import ToolTip from '../tooltip/ToolTip';
import {
  StyledTeamColumn,
  StyledLabel,
  StyledHeadshot
} from './TeamColumn.styles';

const TeamColumn: React.FC<TeamColumnProps> = ({ columnInfo }) => {
  const listOfPictures: Person[][] = columnInfo.listOfPictures; // data for each team
  const [curPerson, setCurPerson] = useState<Person | null>(null); // initialized as nothing
  return (
    <StyledTeamColumn>
      <StyledLabel twoLines={columnInfo.teamLabel == 'Social Outreach'}>
        {columnInfo.teamLabel}
      </StyledLabel>
      <div>
        {listOfPictures.map((rowPics: Person[]) => (
          <div>
            {rowPics.map((person: Person) => (
              <>
                <StyledHeadshot
                  onMouseEnter={(): void => setCurPerson(person)}
                  src={person.picture}
                  key={person.picture}
                  onMouseLeave={(): void => setCurPerson(null)}
                />
                {curPerson !== null && curPerson.picture === person.picture && (
                  <ToolTip
                    toolTipInfo={curPerson.toolTipInfo}
                    team={columnInfo.teamLabel}
                  />
                )}
              </>
            ))}
          </div>
        ))}
      </div>
    </StyledTeamColumn>
  );
};

export default TeamColumn;
