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
<<<<<<< HEAD
=======
import { H4 } from '../../../../style/typography';
>>>>>>> 68dd83ee2593b77f98d857147e44094f55659acc

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
          <H4 style={{ fontSize: '1.2em' }}>{curColumn.teamLabel}</H4>
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
