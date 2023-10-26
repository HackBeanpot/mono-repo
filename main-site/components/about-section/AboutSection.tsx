import React, { useState } from 'react';
import { min } from '../../../shared-ui/lib/responsive';
import useMatchMedia from 'react-use-match-media';
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
  StyledItemTitle
} from './AboutSection.styles';
import { aboutSectionData } from '../../lib/data';
import Community from '../../../shared-ui/images/communityShell.png';
import Exploration from '../../../shared-ui/images/explorationShell.png';
import Growth from '../../../shared-ui/images/growthShell.png';
import { AboutSectionData } from '../../lib/types';
import Arrow from '../../../shared-ui/components/arrow/Arrow';
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
    <div id="about">
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
                <StyledItemTitle color={colors.WHITE}>
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
                  <StyledItemDescription color={colors.WHITE}>
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
              <StyledItemContainer key={curr.title}>
                <StyledItemImage src={getImage(curr.title)} />
                <StyledItemTextContainer>
                  <StyledItemTitle color={colors.WHITE}>
                    {curr.title}
                  </StyledItemTitle>
                  <StyledItemDescription color={colors.WHITE}>
                    {curr.description}
                  </StyledItemDescription>
                </StyledItemTextContainer>
              </StyledItemContainer>
            ))}
          </StyledItemsContainer>
        )}
      </StyledAboutSectionContainer>
    </div>
  );
};

export default AboutSection;
