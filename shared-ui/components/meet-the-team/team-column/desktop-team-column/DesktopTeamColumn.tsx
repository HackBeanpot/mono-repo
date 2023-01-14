import React, { useState } from 'react';
import { Person, TeamColumnProps } from '../../../../lib/types';
import SecondaryButton from '../../../secondary-button/SecondaryButton';
import ToolTip from '../../tooltip/ToolTip';
import { StyledTeamColumn, StyledHeadshot } from './DesktopTeamColumn.styles';

const DesktopTeamColumn: React.FC<TeamColumnProps> = ({ columnInfo }) => {
  const listOfPictures: Person[][] = columnInfo.listOfPictures; // data for each team
  const [curPerson, setCurPerson] = useState<Person | null>(null); // initialized as nothing
  return (
    <StyledTeamColumn>
      <SecondaryButton btnText={columnInfo.teamLabel} isClickable={false} />
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

export default DesktopTeamColumn;
