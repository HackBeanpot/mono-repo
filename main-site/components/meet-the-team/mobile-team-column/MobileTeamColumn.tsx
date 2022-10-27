import React, { useState } from 'react';
import Arrow from '../../../../shared-ui/components/arrow/Arrow';
import {
  MobileTeamColumnProps,
  TeamColumnInfo
} from '../../../../shared-ui/lib/types';
import { getLeftOrRight } from '../../../lib/utils';
import { StyledHeadshot, StyledLabel } from '../team-column/TeamColumn.styles';
import {
  StyledMobileTeamColumn,
  LabelArrowContainer,
  MobileImageContainer,
  StyledImageRow
} from './MobileTeamColumn.styles';

const MobileTeamColumn: React.FC<MobileTeamColumnProps> = ({
  listOfColumnInfo
}) => {
  const [curColumn, setCurColumn] = useState<TeamColumnInfo>(
    listOfColumnInfo[0]
  );
  const listOfPictures: string[][] = curColumn.listOfPictures;
  return (
    <StyledMobileTeamColumn>
      <LabelArrowContainer>
        <Arrow
          left
          onClick={(): void =>
            setCurColumn(getLeftOrRight('left', listOfColumnInfo, curColumn))
          }
        />
        <StyledLabel twoLines={curColumn.teamLabel == 'Social Outreach'}>
          {curColumn.teamLabel}
        </StyledLabel>
        <Arrow
          left={false}
          onClick={(): void =>
            setCurColumn(getLeftOrRight('right', listOfColumnInfo, curColumn))
          }
        />
      </LabelArrowContainer>
      <MobileImageContainer>
        {listOfPictures.map((rowPics: string[]) => {
          <StyledImageRow>
            {rowPics.map((pic: string) => {
              <StyledHeadshot src={pic} />;
            })}
          </StyledImageRow>;
        })}
      </MobileImageContainer>
    </StyledMobileTeamColumn>
  );
};

export default MobileTeamColumn;
