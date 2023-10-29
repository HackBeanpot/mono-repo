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
  StyledSecondaryButtonWrapper,
  StyledLinkedIn,
  StyledPictureContainer
} from './MobileTeamColumn.styles';
import SecondaryButton from '../../../secondary-button/SecondaryButton';
import linkedinLogo from '../../../../components/../images/meet-the-team/linkedin-logo.png';

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
            {rowPics.map((person: Person) => (
              <StyledPictureContainer>
                <StyledHeadshot src={person.picture} key={person.picture} />
                <StyledLinkedIn href={person.linkedIn} target="_blank">
                  <img src={linkedinLogo} />
                  {person.name}
                </StyledLinkedIn>
              </StyledPictureContainer>
            ))}
          </StyledImageRow>
        ))}
      </MobileImageContainer>
    </StyledMobileTeamColumn>
  );
};

export default MobileTeamColumn;
