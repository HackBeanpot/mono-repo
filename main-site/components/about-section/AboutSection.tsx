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
  StyledArrowDescriptionContainer
} from './AboutSection.styles';
import { aboutSectionData } from '../../lib/data';
import Community from '../../../shared-ui/images/community.png';
import Exploration from '../../../shared-ui/images/Exploration.png';
import Growth from '../../../shared-ui/images/Growth.png';
import { AboutSectionData } from '../../lib/types';
import Arrow from '../../../shared-ui/components/arrow/Arrow';

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
  const getLeftOrRight = (direction: string): AboutSectionData => {
    if (direction === 'left') {
      if (currItem === aboutSectionData[0]) {
        return aboutSectionData[2];
      }
      if (currItem === aboutSectionData[1]) {
        return aboutSectionData[0];
      }
      if (currItem === aboutSectionData[2]) {
        return aboutSectionData[1];
      }
    }
    if (direction === 'right') {
      if (currItem === aboutSectionData[0]) {
        return aboutSectionData[1];
      }
      if (currItem === aboutSectionData[1]) {
        return aboutSectionData[2];
      }
      if (currItem === aboutSectionData[2]) {
        return aboutSectionData[0];
      }
    }
    return currItem;
  };

  return (
    <StyledAboutSectionContainer>
      <StyledTitle>HackBeanpot is about...</StyledTitle>
      {!isDesktop && (
        <StyledItemsContainer>
          <StyledLeftImage src={getImage(getLeftOrRight('left').title)} />
          <StyledItemContainer>
            <StyledCenterImage src={getImage(currItem.title)} />
            <StyledItemTextContainer>
              <H3>{currItem.title}</H3>
              <StyledArrowDescriptionContainer>
                <Arrow
                  left
                  onClick={(): void => setCurrItem(getLeftOrRight('left'))}
                />
                <StyledItemDescription color={colors.TEXT_BROWN}>
                  {currItem.description}
                </StyledItemDescription>
                <Arrow
                  left={false}
                  onClick={(): void => setCurrItem(getLeftOrRight('right'))}
                />
              </StyledArrowDescriptionContainer>
            </StyledItemTextContainer>
          </StyledItemContainer>
          <StyledRightImage src={getImage(getLeftOrRight('right').title)} />
        </StyledItemsContainer>
      )}
      {isDesktop && (
        <StyledItemsContainer>
          {aboutSectionData.map((curr) => (
            <StyledItemContainer key={curr.id}>
              <StyledItemImage src={getImage(curr.title)} />
              <StyledItemTextContainer>
                <H3>{curr.title}</H3>
                <StyledItemDescription color={colors.TEXT_BROWN}>
                  {curr.description}
                </StyledItemDescription>
              </StyledItemTextContainer>
            </StyledItemContainer>
          ))}
        </StyledItemsContainer>
      )}
    </StyledAboutSectionContainer>
  );
};

export default AboutSection;
