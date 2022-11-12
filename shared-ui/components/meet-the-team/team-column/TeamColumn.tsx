import React from 'react';
import { Person, TeamColumnProps } from '../../../lib/types';
import {
  StyledTeamColumn,
  StyledLabel,
  StyledHeadshot,
  ImageContainer,
  StyledImageRow
} from './TeamColumn.styles';

const TeamColumn: React.FC<TeamColumnProps> = ({ columnInfo }) => {
  const listOfPictures: Person[][] = columnInfo.listOfPictures; // data for each team
  return (
    <StyledTeamColumn>
      <StyledLabel twoLines={columnInfo.teamLabel == 'Social Outreach'}>
        {columnInfo.teamLabel}
      </StyledLabel>
      <ImageContainer>
        {listOfPictures.map((rowPics: Person[]) => (
          <StyledImageRow>
            {rowPics.map((pic: Person) => (
              <ToolTip tooltipInfo={pic.toolTipInfo}/>
              <StyledHeadshot src={pic.picture} />
            ))}
          </StyledImageRow>
        ))}
      </ImageContainer>
    </StyledTeamColumn>
  );
};

export default TeamColumn;
