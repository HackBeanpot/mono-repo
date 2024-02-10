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
import { AboutSectionData } from '../../lib/types';
import Arrow from '../../../shared-ui/components/arrow/Arrow';
import { getLeftOrRight, getLeftOrRightCarouselData } from '../../lib/utils';
import Shell from '../../../shared-ui/images/shell.png';


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
            <StyledLeftImage src={getLeftOrRightCarouselData("left", aboutSectionData, currItem.id).image} />
            <StyledItemContainer>
              <StyledCenterImage src={currItem.image} />
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
            <StyledRightImage src={getLeftOrRightCarouselData("right", aboutSectionData, currItem.id).image} />
          </StyledItemsContainer>
        )}

        {isDesktop && (
          <StyledItemsContainer>
            {aboutSectionData.map((curr) => (
              <StyledItemContainer key={curr.title}>
                <StyledItemImage src={curr.image} />
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
