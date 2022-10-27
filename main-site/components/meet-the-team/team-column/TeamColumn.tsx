import React from 'react';
import { TeamColumnProps } from '../../../../shared-ui/lib/types';
import {
  StyledTeamColumn,
  StyledLabel,
  StyledHeadshot, 
  ImageContainer, 
  StyledImageRow
} from './TeamColumn.styles';

const TeamColumn: React.FC<TeamColumnProps> = ({ columnInfo }) => {
  const listOfPictures: string[][] = columnInfo.listOfPictures;
  return (
    <StyledTeamColumn>
      <StyledLabel twoLines={columnInfo.teamLabel == 'Social Outreach'}>
        {columnInfo.teamLabel}
      </StyledLabel>
      <ImageContainer>
      {listOfPictures.map((rowPics: string[]) => 
          <StyledImageRow>
            {rowPics.map((pic: string) => 
              <StyledHeadshot src={pic} />
            )}
          </StyledImageRow>
        )}
      </ImageContainer>
    </StyledTeamColumn>
  );
};

export default TeamColumn;
