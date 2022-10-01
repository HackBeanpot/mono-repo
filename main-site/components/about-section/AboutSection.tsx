import React, { useState } from 'react';
import { min } from '../../../shared-ui/lib/responsive';
import useMatchMedia from 'react-use-match-media';
import { H2, H3, P } from '../../../shared-ui/style/typography';
import { colors } from '../../../shared-ui/style/colors';
import {
  StyledAboutSectionContainer,
  StyledItemsContainer,
  StyledTitle,
  StyledItemDescription,
  StyledItemTextContainer,
  StyledItemImage,
  StyledItemContainer,
  StyledCenterImage,
  StyledLeftImage,
  StyledRightImage,
  StyledArrowDescriptionContainer,
  StyledRedRocks,
  StyledItemTitle
} from './AboutSection.styles';
import { aboutSectionData } from '../../lib/data';
import Community from '../../../shared-ui/images/community.png';
import Exploration from '../../../shared-ui/images/Exploration.png';
import Growth from '../../../shared-ui/images/Growth.png';
import { AboutSectionData } from '../../lib/types';
import Arrow from '../../../shared-ui/components/arrow/Arrow';
import RedRocks from '../../../shared-ui/images/red-rocks.svg';
import { getLeftOrRight } from '../../lib/utils';

function getImage(title: string): string {
  if (title === 'Community') {
    return Community;
  }
  if (title === 'Exploration') {
    return Exploration;
  }
  return Growth;
}

const AboutSection: React.FC = () => {
  const isDesktop = useMatchMedia(min.tablet);
  const [currItem, setCurrItem] = useState<AboutSectionData>(
    aboutSectionData[0]
  );

  return (
    <StyledAboutSectionContainer>
      <StyledTitle>HackBeanpot is about...</StyledTitle>
      {!isDesktop && (
        <StyledItemsContainer>
          <StyledLeftImage
            src={getImage(
              getLeftOrRight('left', aboutSectionData, currItem).title
            )}
          />
          <StyledItemContainer>
            <StyledCenterImage src={getImage(currItem.title)} />
            <StyledItemTextContainer>
              <StyledItemTitle color={colors.TEXT_BROWN}>
                {currItem.title}
              </StyledItemTitle>
              <StyledArrowDescriptionContainer>
                <Arrow
                  left
                  onClick={(): void =>
                    setCurrItem(
                      getLeftOrRight('left', aboutSectionData, currItem)
                    )
                  }
                />
                <StyledItemDescription color={colors.TEXT_BROWN}>
                  {currItem.description}
                </StyledItemDescription>
                <Arrow
                  left={false}
                  onClick={(): void =>
                    setCurrItem(
                      getLeftOrRight('right', aboutSectionData, currItem)
                    )
                  }
                />
              </StyledArrowDescriptionContainer>
            </StyledItemTextContainer>
          </StyledItemContainer>
          <StyledRightImage
            src={getImage(
              getLeftOrRight('right', aboutSectionData, currItem).title
            )}
          />
        </StyledItemsContainer>
      )}
      {isDesktop && (
        <StyledItemsContainer>
          {aboutSectionData.map((curr) => (
            <StyledItemContainer key={curr.id}>
              <StyledItemImage src={getImage(curr.title)} />
              <StyledItemTextContainer>
                <StyledItemTitle color={colors.TEXT_BROWN}>
                  {curr.title}
                </StyledItemTitle>
                <StyledItemDescription color={colors.TEXT_BROWN}>
                  {curr.description}
                </StyledItemDescription>
              </StyledItemTextContainer>
            </StyledItemContainer>
          ))}
        </StyledItemsContainer>
      )}
      <StyledRedRocks src={RedRocks} />
    </StyledAboutSectionContainer>
  );
};

export default AboutSection;
