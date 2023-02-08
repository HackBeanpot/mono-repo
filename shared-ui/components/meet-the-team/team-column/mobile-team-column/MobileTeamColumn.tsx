import React, { useState } from 'react';
import Arrow from '../../../arrow/Arrow';
import {
  MobileTeamColumnProps,
  Person,
  TeamColumnInfo
} from '../../../../lib/types';
import { getLeftOrRight } from '../../../../../main-site/lib/utils';
import {
  StyledMobileTeamColumn,
  LabelArrowContainer,
  MobileImageContainer,
  StyledImageRow,
  StyledHeadshot,
  StyledSecondaryButtonWrapper
} from './MobileTeamColumn.styles';
import SecondaryButton from '../../../secondary-button/SecondaryButton';

const MobileTeamColumn: React.FC<MobileTeamColumnProps> = ({
  listOfColumnInfo
}) => {
  const [curColumn, setCurColumn] = useState<TeamColumnInfo>(
    listOfColumnInfo[0]
  );
  const listOfPictures: Person[][] = curColumn.listOfPictures;
  return (
    <StyledMobileTeamColumn>
      <LabelArrowContainer>
        <Arrow
          left
          onClick={(): void =>
            setCurColumn(
              getLeftOrRight<TeamColumnInfo>(
                'left',
                listOfColumnInfo,
                curColumn
              )
            )
          }
        />
        <StyledSecondaryButtonWrapper>
          <SecondaryButton btnText={curColumn.teamLabel} isClickable={false} />
        </StyledSecondaryButtonWrapper>
        <Arrow
          left={false}
          onClick={(): void =>
            setCurColumn(
              getLeftOrRight<TeamColumnInfo>(
                'right',
                listOfColumnInfo,
                curColumn
              )
            )
          }
        />
      </LabelArrowContainer>
      <MobileImageContainer>
        {listOfPictures.map((rowPics: Person[], index) => (
          <StyledImageRow key={`mobile-column-${index}`}>
            {rowPics.map((pic: Person) => (
              <StyledHeadshot src={pic.picture} key={pic.picture} />
            ))}
          </StyledImageRow>
        ))}
      </MobileImageContainer>
    </StyledMobileTeamColumn>
  );
};

export default MobileTeamColumn;
